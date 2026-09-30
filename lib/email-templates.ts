/**
 * The two mails /api/contact sends: one to sales, one back to the visitor.
 *
 * Email clients are not browsers. Everything here is a nested table with
 * inline styles, because Outlook has no flexbox or grid, Gmail strips <style>
 * from forwarded copies, and nothing can be relied on to load a web font. So
 * the site's design is reproduced with what survives: its navy and green, its
 * uppercase monospace eyebrows, the dark band over a light card, and system
 * fonts standing in for Geist. Each mail also carries a plain-text part.
 *
 * Images are absolute URLs built from SITE_URL, so that variable has to point
 * at the host actually serving the site or the logo arrives broken. Nothing
 * depends on images loading: the layout holds and the logo falls back to its
 * alt text, which most clients show until the reader allows images.
 */

import type { ContactInput } from '@/lib/contact-schema';
import { COMPANY, OFFICES } from '@/content/company';
import { SITE_URL } from '@/lib/site-url';

const NAVY = '#0B1420';
const BLUE = '#0A70B8';
const GREEN = '#8CC63F';
const LIGHT = '#F4F7FA';
const PAGE = '#E8EDF2';
const HAIRLINE = '#E4EAF0';
const ON_LIGHT = '#101C2B';
const ON_LIGHT_2 = '#4E5D6C';
const ON_DARK_2 = '#B7C3CF';
const MUTED = '#8A96A3';

const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const MONO = "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace";

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const nl2br = (s: string) => esc(s).replace(/\r?\n/g, '<br>');

type Field = [label: string, value: string | string[] | undefined];

/** Drops the fields the visitor left empty rather than printing blank rows. */
function present(fields: Field[]): [string, string][] {
  return fields
    .map(([label, value]): [string, string] => [label, Array.isArray(value) ? value.join(', ') : value ?? ''])
    .filter(([, value]) => value.trim() !== '');
}

function eyebrow(text: string, color: string) {
  return `<p style="margin:0 0 10px;font-family:${MONO};font-size:11px;line-height:1.4;letter-spacing:.14em;text-transform:uppercase;color:${color}">${esc(text)}</p>`;
}

/**
 * The shared frame: dark banner, white card, dark footer — the same three
 * bands as a page on the site.
 */
function shell(opts: { title: string; preheader: string; eyebrow: string; heading: string; intro?: string; body: string }) {
  const { title, preheader, eyebrow: eyebrowText, heading, intro, body } = opts;

  return `<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(title)}</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
<style>
  @media only screen and (max-width:620px) {
    .sym-card { width:100% !important; }
    .sym-pad { padding-left:24px !important; padding-right:24px !important; }
    .sym-h1 { font-size:26px !important; }
    .sym-col { display:block !important; width:100% !important; padding-right:0 !important; }
    .sym-col + .sym-col { padding-top:18px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:${PAGE};">
<div style="display:none;font-size:1px;color:${PAGE};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${esc(preheader)}&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${PAGE};">
<tr><td align="center" style="padding:28px 12px;">

<table role="presentation" class="sym-card" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;max-width:600px;border-collapse:collapse;background-color:#FFFFFF;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(11,20,32,.08);">

  <tr>
    <td class="sym-pad" style="background-color:${NAVY};background-image:linear-gradient(120deg,${NAVY} 0%,${BLUE} 100%);padding:34px 40px 30px;">
      <img src="${SITE_URL}/symtera-logo.png" width="150" height="45" alt="Symtera Technologies" style="display:block;border:0;outline:none;width:150px;height:45px;margin-bottom:22px;">
      ${eyebrow(eyebrowText, GREEN)}
      <h1 class="sym-h1" style="margin:0;font-family:${SANS};font-size:30px;line-height:1.15;letter-spacing:-.02em;font-weight:500;color:#FFFFFF;">${esc(heading)}</h1>
      ${intro ? `<p style="margin:12px 0 0;font-family:${SANS};font-size:15px;line-height:1.6;color:${ON_DARK_2};">${intro}</p>` : ''}
    </td>
  </tr>

  <tr><td style="height:3px;background-color:${GREEN};font-size:0;line-height:0;">&nbsp;</td></tr>

  <tr><td class="sym-pad" style="padding:34px 40px 36px;font-family:${SANS};font-size:15px;line-height:1.65;color:${ON_LIGHT};">
    ${body}
  </td></tr>

  <tr>
    <td class="sym-pad" style="background-color:${NAVY};padding:30px 40px;font-family:${SANS};font-size:13px;line-height:1.6;color:${ON_DARK_2};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          ${OFFICES.map(
            (o) => `<td class="sym-col" valign="top" width="50%" style="padding-right:18px;font-family:${SANS};font-size:13px;line-height:1.6;color:${ON_DARK_2};">
            ${eyebrow(o.region, GREEN)}
            ${o.lines.map((l) => esc(l)).join('<br>')}<br>
            <a href="tel:${esc(o.tel)}" style="color:${ON_DARK_2};text-decoration:none;">${esc(o.phone)}</a>
          </td>`,
          ).join('')}
        </tr>
      </table>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:26px;">
        <tr><td style="border-top:1px solid rgba(255,255,255,.1);padding-top:16px;font-family:${MONO};font-size:11px;line-height:1.7;letter-spacing:.04em;color:${MUTED};">
          <a href="${SITE_URL}" style="color:${MUTED};text-decoration:none;">symteratech.com</a>
          &nbsp;·&nbsp;
          <a href="mailto:${COMPANY.email}" style="color:${MUTED};text-decoration:none;">${COMPANY.email}</a>
          <br>${esc(COMPANY.copyright)}
        </td></tr>
      </table>
    </td>
  </tr>

</table>

</td></tr>
</table>
</body>
</html>`;
}

/** Label above value, the way the site sets its captions. */
function detailRows(fields: [string, string][]) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
${fields
  .map(
    ([label, value], i) => `<tr>
  <td style="padding:${i === 0 ? '0' : '14px'} 0 14px;border-top:${i === 0 ? 'none' : `1px solid ${HAIRLINE}`};font-family:${SANS};">
    <span style="display:block;font-family:${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:${MUTED};padding-bottom:5px;">${esc(label)}</span>
    <span style="display:block;font-family:${SANS};font-size:15px;line-height:1.6;color:${ON_LIGHT};">${nl2br(value)}</span>
  </td>
</tr>`,
  )
  .join('')}
</table>`;
}

function button(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
  <tr><td align="center" bgcolor="${GREEN}" style="border-radius:999px;">
    <a href="${href}" style="display:inline-block;padding:13px 28px;font-family:${SANS};font-size:14px;font-weight:600;line-height:1;letter-spacing:.01em;color:${NAVY};text-decoration:none;border-radius:999px;">${esc(label)}</a>
  </td></tr>
</table>`;
}

function quote(text: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
  <tr><td style="background-color:${LIGHT};border-left:3px solid ${GREEN};border-radius:0 10px 10px 0;padding:18px 22px;font-family:${SANS};font-size:15px;line-height:1.7;color:${ON_LIGHT};">${nl2br(text)}</td></tr>
</table>`;
}

const hr = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:26px 0;"><tr><td style="height:1px;background-color:${HAIRLINE};font-size:0;line-height:0;">&nbsp;</td></tr></table>`;

function textFields(fields: [string, string][]) {
  return fields.map(([label, value]) => `${label}: ${value.replace(/\r?\n/g, '\n  ')}`).join('\n');
}

const TEXT_FOOTER = `\n\n—\n${COMPANY.name}\n${OFFICES.map((o) => `${o.region}: ${o.lines.join(', ')} · ${o.phone}`).join('\n')}\n${SITE_URL} · ${COMPANY.email}`;

/** What lands in CONTACT_TO: the enquiry, laid out to be read on a phone. */
export function salesNotification(d: ContactInput): EmailContent {
  const who = present([
    ['Name', d.fullName],
    ['Email', d.email],
    ['Phone', d.phone],
    ['Company', d.company],
  ]);
  const what = present([
    ['Service', d.service],
    ['Requirement', d.requirementType],
    ['Features', d.features],
    ['Existing system', d.existingSystem],
    ['Timeline', d.timeline],
    ['Budget', d.budget],
  ]);

  const body = `${eyebrow('Contact', BLUE)}
${detailRows(who)}
${hr}
${eyebrow('Project', BLUE)}
${detailRows(what)}
${hr}
${eyebrow('Message', BLUE)}
${quote(d.message)}
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:28px;"><tr><td>
${button(`mailto:${d.email}?subject=${encodeURIComponent(`Re: your ${d.service} enquiry — Symtera Technologies`)}`, `Reply to ${d.fullName.split(' ')[0]}`)}
</td></tr></table>
<p style="margin:16px 0 0;font-family:${SANS};font-size:13px;line-height:1.6;color:${ON_LIGHT_2};">Replying to this email reaches ${esc(d.email)} directly.</p>`;

  return {
    subject: `[Website] ${d.service} — ${d.fullName}`,
    html: shell({
      title: 'New website request',
      preheader: `${d.service} — ${d.fullName}${d.company ? ` (${d.company})` : ''}`,
      eyebrow: 'New website request',
      heading: d.fullName,
      intro: `${esc(d.service)}${d.company ? ` · ${esc(d.company)}` : ''}`,
      body,
    }),
    text: `NEW WEBSITE REQUEST\n\nCONTACT\n${textFields(who)}\n\nPROJECT\n${textFields(what)}\n\nMessage:\n  ${d.message.replace(/\r?\n/g, '\n  ')}\n\nReply to this email to answer ${d.email} directly.${TEXT_FOOTER}`,
  };
}

/** The acknowledgement the visitor gets, with a copy of what they sent. */
export function clientAcknowledgement(d: ContactInput): EmailContent {
  const firstName = d.fullName.split(' ')[0];
  const summary = present([
    ['Service', d.service],
    ['Requirement', d.requirementType],
    ['Timeline', d.timeline],
    ['Budget', d.budget],
  ]);

  const steps: [string, string, string][] = [
    ['I', 'We read it today', 'Your request goes straight to our solutions team, not a queue.'],
    ['II', 'We reply within 24 hours', 'With first questions, or a call slot if the scope needs one.'],
    ['III', 'You get a written proposal', 'Scope, timeline and cost, once we agree on what you need.'],
  ];

  const body = `<p style="margin:0 0 18px;font-family:${SANS};font-size:16px;line-height:1.65;color:${ON_LIGHT};">Hi ${esc(firstName)},</p>
<p style="margin:0 0 26px;font-family:${SANS};font-size:16px;line-height:1.65;color:${ON_LIGHT};">Thank you for getting in touch with ${esc(COMPANY.name)}. Your request about <strong style="font-weight:600;">${esc(d.service)}</strong> has reached our team, and a specialist will come back to you within one business day.</p>

${eyebrow('What happens next', BLUE)}
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
${steps
  .map(
    ([numeral, title, detail], i) => `<tr>
  <td width="42" valign="top" style="padding:${i === 0 ? '4px' : '18px'} 0 0;font-family:${MONO};font-size:13px;letter-spacing:.1em;color:${GREEN};">${numeral}</td>
  <td valign="top" style="padding:${i === 0 ? '0' : '14px'} 0 0;font-family:${SANS};">
    <span style="display:block;font-size:15px;font-weight:600;line-height:1.5;color:${ON_LIGHT};">${esc(title)}</span>
    <span style="display:block;font-size:14px;line-height:1.6;color:${ON_LIGHT_2};">${esc(detail)}</span>
  </td>
</tr>`,
  )
  .join('')}
</table>

${hr}

${eyebrow('Your request', BLUE)}
${detailRows(summary)}
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:18px;">
  <tr><td>${quote(d.message)}</td></tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:28px;"><tr><td>
${button(`${SITE_URL}/ai`, 'See what we build')}
</td></tr></table>

<p style="margin:26px 0 0;font-family:${SANS};font-size:14px;line-height:1.7;color:${ON_LIGHT_2};">If it is urgent, call us on <a href="tel:${OFFICES[0].tel}" style="color:${BLUE};text-decoration:none;">${esc(OFFICES[0].phone)}</a> (${esc(OFFICES[0].region)}) or <a href="tel:${OFFICES[1].tel}" style="color:${BLUE};text-decoration:none;">${esc(OFFICES[1].phone)}</a> (${esc(OFFICES[1].region)}). You can also just reply to this email.</p>
<p style="margin:22px 0 0;font-family:${SANS};font-size:15px;line-height:1.7;color:${ON_LIGHT};">— The ${esc(COMPANY.name)} team<br><span style="font-family:${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${MUTED};">${esc(COMPANY.tagline)}</span></p>`;

  return {
    subject: `We received your request — ${COMPANY.name}`,
    html: shell({
      title: 'We received your request',
      preheader: `Thanks ${firstName} — your ${d.service} request is with our team. We reply within one business day.`,
      eyebrow: 'Request received',
      heading: 'Thank you, we have your request.',
      intro: 'A specialist will come back to you within one business day.',
      body,
    }),
    text: `Hi ${firstName},

Thank you for getting in touch with ${COMPANY.name}. Your request about ${d.service} has reached our team, and a specialist will come back to you within one business day.

WHAT HAPPENS NEXT
${steps.map(([numeral, title, detail]) => `${numeral}. ${title} — ${detail}`).join('\n')}

YOUR REQUEST
${textFields(summary)}

Message:
  ${d.message.replace(/\r?\n/g, '\n  ')}

If it is urgent, call us on ${OFFICES[0].phone} (${OFFICES[0].region}) or ${OFFICES[1].phone} (${OFFICES[1].region}). You can also just reply to this email.

— The ${COMPANY.name} team
${COMPANY.tagline}${TEXT_FOOTER}`,
  };
}
