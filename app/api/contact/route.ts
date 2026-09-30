import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';
import { clientAcknowledgement, salesNotification } from '@/lib/email-templates';
import { CONTACT_TO, mailTransport, sendMail } from '@/lib/mailer';

export const runtime = 'nodejs';

/**
 * In-memory rate limit: 5 submissions per IP per 10 minutes. Swap for
 * @upstash/ratelimit (already a dependency) when running more than one
 * instance — an in-process map does not survive scaling.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the highlighted fields.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot filled → accept silently so the bot learns nothing.
  if (data.website) return NextResponse.json({ ok: true });

  const transport = mailTransport();
  if (!transport) {
    console.error('[contact] no mail transport configured; submission was not emailed.', {
      service: data.service,
      email: data.email,
    });
    return NextResponse.json({ error: 'Email is not configured on this environment.' }, { status: 500 });
  }

  const sales = salesNotification(data);
  const sent = await sendMail({
    to: CONTACT_TO,
    replyTo: data.email,
    subject: sales.subject,
    html: sales.html,
    text: sales.text,
  });

  if (!sent.ok) {
    console.error(`[contact] ${transport} rejected the sales email: ${sent.error}`, {
      service: data.service,
      email: data.email,
    });
    return NextResponse.json({ error: 'We could not send your request. Please email sales@symteratech.com.' }, { status: 502 });
  }

  // The acknowledgement is best effort: the request is already with sales.
  const ack = clientAcknowledgement(data);
  const reply = await sendMail({
    to: data.email,
    subject: ack.subject,
    html: ack.html,
    text: ack.text,
  });
  if (!reply.ok) console.error(`[contact] auto-reply failed: ${reply.error}`);

  return NextResponse.json({ ok: true });
}
