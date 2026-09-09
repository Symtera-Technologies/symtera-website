import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema, type ContactInput } from '@/lib/contact-schema';

export const runtime = 'nodejs';

const SALES_INBOX = process.env.CONTACT_TO ?? 'sales@symteratech.com';
const FROM = process.env.CONTACT_FROM ?? 'Symtera Website <website@symteratech.com>';

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

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function row(k: string, v?: string | string[]) {
  const value = Array.isArray(v) ? v.join(', ') : v;
  if (!value) return '';
  return `<tr><td style="padding:6px 14px 6px 0;color:#4E5D6C;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#101C2B">${esc(value).replace(/\n/g, '<br>')}</td></tr>`;
}

function salesEmail(d: ContactInput) {
  return `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#101C2B">
<h2 style="margin:0 0 4px;font-weight:500">New website request</h2>
<p style="margin:0 0 18px;color:#4E5D6C">${esc(d.service)} — ${esc(d.fullName)}</p>
<table style="border-collapse:collapse">
${row('Name', d.fullName)}${row('Email', d.email)}${row('Phone', d.phone)}${row('Company', d.company)}
${row('Service', d.service)}${row('Requirement', d.requirementType)}${row('Features', d.features)}
${row('Existing system', d.existingSystem)}${row('Timeline', d.timeline)}${row('Budget', d.budget)}
${row('Message', d.message)}
</table></div>`;
}

function autoReply(d: ContactInput) {
  return `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#101C2B">
<p>Hi ${esc(d.fullName.split(' ')[0])},</p>
<p>Thank you for contacting Symtera Technologies. We have received your request about <strong>${esc(d.service)}</strong> and a member of our team will get back to you within 24 hours.</p>
<p>If it is urgent, call us on +92 3 111 119 120 (Lahore) or +1 (646) 505-7083 (New Jersey).</p>
<p style="margin-top:22px;color:#4E5D6C">— Symtera Technologies<br>Expanding Possibilities</p>
</div>`;
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set; submission was not emailed.', {
      service: data.service,
      email: data.email,
    });
    return NextResponse.json({ error: 'Email is not configured on this environment.' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const sent = await resend.emails.send({
      from: FROM,
      to: SALES_INBOX,
      replyTo: data.email,
      subject: `[Website] ${data.service} — ${data.fullName}`,
      html: salesEmail(data),
    });

    if (sent.error) {
      console.error('[contact] Resend rejected the sales email', sent.error);
      return NextResponse.json({ error: 'We could not send your request. Please email sales@symteratech.com.' }, { status: 502 });
    }

    // Auto-reply is best effort: the request is already recorded with sales.
    const reply = await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: 'We received your request — Symtera Technologies',
      html: autoReply(data),
    });
    if (reply.error) console.error('[contact] auto-reply failed', reply.error);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] unexpected failure', err);
    return NextResponse.json({ error: 'We could not send your request. Please email sales@symteratech.com.' }, { status: 502 });
  }
}
