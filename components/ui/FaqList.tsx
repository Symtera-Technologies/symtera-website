import Link from 'next/link';
import { SERIF } from '@/lib/tokens';
import type { Faq } from '@/content/types';

/** White card of question/answer rows, as used on every service sub-page. */
export function FaqCard({ faq, contactLine = true }: { faq: Faq[]; contactLine?: boolean }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #DCE3EA', borderRadius: 18, padding: '6px 24px' }}>
      {faq.map(([q, a], i) => (
        <div key={i} style={{ padding: '18px 0', borderBottom: '1px solid #DCE3EA' }}>
          <strong style={{ fontWeight: 500, fontSize: 17, letterSpacing: '-.01em', color: '#101C2B' }}>{q}</strong>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#4E5D6C', margin: '8px 0 0' }}>{a}</p>
        </div>
      ))}
      {contactLine && (
        <p style={{ fontSize: 15, color: '#4E5D6C', padding: '18px 0', margin: 0 }}>
          <Link href="/contact" style={{ color: '#0A70B8', fontWeight: 500 }}>
            Contact Symtera Technologies
          </Link>{' '}
          to discuss your project.
        </p>
      )}
    </div>
  );
}

/** The sticky "?" index column plus the FAQ card. */
export default function FaqList({ faq }: { faq: Faq[] }) {
  return (
    <div
      data-reveal
      data-stack
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,4fr) minmax(0,8fr)',
        gap: '20px clamp(32px,5vw,96px)',
        alignItems: 'start',
        padding: 'clamp(36px,4vw,56px) 0',
        borderTop: '1px solid #DCE3EA',
      }}
    >
      <div>
        <span
          style={{
            display: 'block',
            fontFamily: SERIF,
            fontSize: 'clamp(44px,4.6vw,72px)',
            lineHeight: 0.9,
            color: '#0A70B8',
            marginBottom: 14,
          }}
        >
          ?
        </span>
        <h2
          style={{
            fontWeight: 500,
            fontSize: 'clamp(24px,2.4vw,34px)',
            lineHeight: 1.08,
            letterSpacing: '-.03em',
            margin: 0,
          }}
        >
          Frequently Asked Questions
        </h2>
      </div>
      <FaqCard faq={faq} />
    </div>
  );
}
