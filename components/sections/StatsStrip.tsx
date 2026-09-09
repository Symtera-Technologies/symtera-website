import { MONO } from '@/lib/tokens';
import Counter from '@/components/ui/Counter';

const STATS: { to: number; from?: number; label: React.ReactNode; color?: string }[] = [
  { to: 2019, from: 1990, label: 'Founded in Lahore' },
  { to: 2, label: <>Offices · USA &amp; Pakistan</> },
  { to: 27, label: 'Technology partners', color: '#4FB8E8' },
  { to: 8, label: 'AI service lines', color: '#8CC63F' },
];

const caption: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: '#8A96A3',
  margin: 0,
};

export default function StatsStrip() {
  return (
    <section
      aria-label="Symtera at a glance"
      style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px) clamp(64px,8vw,120px)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          borderTop: '1px solid rgba(255,255,255,.12)',
          borderBottom: '1px solid rgba(255,255,255,.12)',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            data-reveal
            style={{
              padding:
                i === 0 ? '32px 24px 32px 0' : i === STATS.length - 1 ? '32px 0 32px 24px' : '32px 24px',
              ...(i > 0 ? { borderLeft: '1px solid rgba(255,255,255,.08)' } : {}),
            }}
          >
            <Counter to={s.to} from={s.from} style={s.color ? { color: s.color } : undefined} />
            <p style={caption}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
