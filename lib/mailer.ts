/**
 * Delivery for /api/contact. Two transports, picked from the environment:
 *
 *   SMTP   — set SMTP_HOST, SMTP_USER and SMTP_PASSWORD. Mail leaves through
 *            the cPanel mailbox, so delivery depends on nothing but the server.
 *   Resend — the fallback, used whenever SMTP_HOST is absent.
 *
 * SMTP wins when both are configured, so switching a running deployment over
 * is a matter of adding the variables and restarting: no rebuild, and removing
 * SMTP_HOST puts Resend back.
 */

import type { Transporter } from 'nodemailer';
import { Resend } from 'resend';

export const CONTACT_TO = process.env.CONTACT_TO ?? 'sales@symteratech.com';
export const CONTACT_FROM = process.env.CONTACT_FROM ?? 'Symtera Website <website@symteratech.com>';

export interface Mail {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export type SendResult = { ok: true } | { ok: false; error: string };

export type Transport = 'smtp' | 'resend';

/** Which transport this process will use, or null when neither is configured. */
export function mailTransport(): Transport | null {
  if (process.env.SMTP_HOST) return 'smtp';
  if (process.env.RESEND_API_KEY) return 'resend';
  return null;
}

/**
 * One pooled transporter per process. Passenger keeps the Node app alive
 * between requests, so reusing it saves a TLS handshake on every submission.
 */
let transporter: Transporter | null = null;

async function smtpTransporter(): Promise<Transporter> {
  if (transporter) return transporter;

  // Imported lazily so a Resend-only deployment never loads nodemailer.
  const nodemailer = (await import('nodemailer')).default;

  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    // 465 is implicit TLS. 587 and 25 open in the clear, so when there are
    // credentials to protect, demand STARTTLS rather than let the session fall
    // back to plaintext authentication. An unauthenticated local relay
    // (localhost:25 on cPanel) has no secret to leak and is left alone.
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    requireTLS: port !== 465 && Boolean(user && pass),
    auth: user && pass ? { user, pass } : undefined,
    pool: true,
    maxConnections: 2,
    tls: {
      // Shared cPanel servers often present a certificate for the machine's
      // own hostname rather than for mail.<domain>, which fails validation.
      // Point SMTP_HOST at the hostname the certificate names if you can;
      // set SMTP_TLS_REJECT_UNAUTHORIZED=false only when that is impossible.
      rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
    },
  });

  return transporter;
}

async function sendViaSmtp(mail: Mail): Promise<SendResult> {
  try {
    const smtp = await smtpTransporter();
    await smtp.sendMail({
      from: CONTACT_FROM,
      to: mail.to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      html: mail.html,
    });
    return { ok: true };
  } catch (err) {
    // A dead pool stays dead, so drop it and let the next send reconnect.
    transporter = null;
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

async function sendViaResend(mail: Mail): Promise<SendResult> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sent = await resend.emails.send({
      from: CONTACT_FROM,
      to: mail.to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      html: mail.html,
    });
    if (sent.error) return { ok: false, error: sent.error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

export async function sendMail(mail: Mail): Promise<SendResult> {
  switch (mailTransport()) {
    case 'smtp':
      return sendViaSmtp(mail);
    case 'resend':
      return sendViaResend(mail);
    default:
      return { ok: false, error: 'No mail transport is configured.' };
  }
}
