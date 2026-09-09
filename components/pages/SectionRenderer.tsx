import Image from 'next/image';
import { MONO, SERIF } from '@/lib/tokens';
import { boldOnLight, decode } from '@/lib/html';
import TiltCard from '@/components/ui/TiltCard';
import { Chip } from '@/components/ui/Type';
import { ContentIcon, Check, ArrowRight } from '@/components/ui/Icons';
import type { ContentSection } from '@/content/types';

function Cards({ items }: { items: [string, string, string][] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,230px),1fr))',
        gap: 12,
        perspective: 1400,
      }}
    >
      {items.map(([title, copy, icon], i) => (
        <TiltCard
          key={i}
          style={{
            background: 'linear-gradient(160deg,#ffffff,#F4F7FA)',
            border: '1px solid #DCE3EA',
            borderRadius: 18,
            padding: '22px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            boxShadow: '0 18px 40px -28px rgba(11,20,32,.35)',
          }}
        >
          <span
            data-tilt-num
            style={{
              position: 'relative',
              display: 'inline-grid',
              placeItems: 'center',
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'linear-gradient(160deg,#0F1B2B,#0B1420)',
              color: '#8CC63F',
              transform: 'translateZ(22px)',
              boxShadow: '0 10px 24px -12px rgba(11,20,32,.6)',
            }}
          >
            <ContentIcon name={icon} />
          </span>
          <div style={{ position: 'relative', transform: 'translateZ(12px)' }}>
            <h3
              style={{
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 1.15,
                letterSpacing: '-.02em',
                margin: '0 0 8px',
                color: '#101C2B',
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: '#4E5D6C', margin: 0 }}>{copy}</p>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}

function Steps({ steps }: { steps: [string, string][] }) {
  return (
    <ol style={{ listStyle: 'none', margin: '6px 0 0', padding: 0, display: 'grid', gap: 0, position: 'relative' }}>
      {steps.map(([title, copy], i) => (
        <li
          key={i}
          data-row
          style={{
            display: 'grid',
            gridTemplateColumns: '44px 1fr',
            gap: 16,
            padding: '16px 0',
            borderBottom: '1px dashed #DCE3EA',
            borderRadius: 8,
          }}
        >
          <span
            style={{
              display: 'inline-grid',
              placeItems: 'center',
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#0B1420',
              color: '#8CC63F',
              fontFamily: MONO,
              fontSize: 12,
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <strong style={{ fontWeight: 500, color: '#101C2B', fontSize: 17 }}>{title}</strong>
            {copy ? <p style={{ margin: '4px 0 0', fontSize: 15 }}>{copy}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        marginTop: 18,
        background: '#0B1420',
        color: '#F4F7FA',
        borderRadius: 18,
        padding: 22,
      }}
    >
      {steps.map((label, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 12.5,
              letterSpacing: '.02em',
              border: '1px solid rgba(255,255,255,.16)',
              borderRadius: 999,
              padding: '9px 14px',
              whiteSpace: 'nowrap',
              background: 'rgba(255,255,255,.04)',
              animation: 'sym-pipe 4s ease-in-out infinite',
              animationDelay: `${i * 0.45}s`,
            }}
          >
            {label}
          </span>
          {i < steps.length - 1 && <ArrowRight size={14} style={{ color: '#8CC63F' }} />}
        </span>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: '18px 0 0',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
        gap: '10px 24px',
      }}
    >
      {items.map((li, i) => (
        <li
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '18px 1fr',
            gap: 10,
            alignItems: 'start',
            fontSize: 15,
            lineHeight: 1.5,
            padding: '8px 0',
            borderBottom: '1px dashed #DCE3EA',
          }}
        >
          <Check stroke="#39B54A" style={{ marginTop: 2 }} />
          <span>{li}</span>
        </li>
      ))}
    </ul>
  );
}

function Bullets({ items }: { items: [string, string][] }) {
  return (
    <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'grid', gap: 12 }}>
      {items.map(([k, v], i) => (
        <li
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '14px 1fr',
            gap: 14,
            alignItems: 'start',
            paddingBottom: 12,
            borderBottom: '1px dashed #DCE3EA',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#8CC63F', marginTop: 8 }} />
          <span>
            <strong style={{ color: '#101C2B', fontWeight: 500 }}>{k}</strong> {v}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Stats({ stats }: { stats: [string, string, string][] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
        gap: 12,
        marginTop: 18,
      }}
    >
      {stats.map(([big, label, copy], i) => (
        <div key={i} data-card-light style={{ background: '#fff', border: '1px solid #DCE3EA', borderRadius: 16, padding: 20 }}>
          <div style={{ fontFamily: SERIF, fontSize: 'clamp(34px,3vw,46px)', lineHeight: 1, color: '#0A70B8', marginBottom: 8 }}>
            {big}
          </div>
          <div style={{ fontWeight: 500, color: '#101C2B', fontSize: 15, marginBottom: 6 }}>{label}</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: '#4E5D6C' }}>{copy}</div>
        </div>
      ))}
    </div>
  );
}

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <TiltCard
      as="figure"
      style={{
        margin: '18px 0 0',
        borderRadius: 18,
        border: '1px solid #DCE3EA',
        background: '#fff',
        boxShadow: '0 30px 60px -36px rgba(11,20,32,.4)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        style={{ width: '100%', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
      />
    </TiltCard>
  );
}

/** Renders one content section's body: paragraphs plus whatever kind it is. */
export default function SectionBody({ section, images }: { section: ContentSection; images?: string[] }) {
  const s = section;
  return (
    <>
      <div style={{ display: 'grid', gap: 14 }}>
        {(s.body || []).map((p, i) => (
          <p key={i} style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: boldOnLight(p) }} />
        ))}
      </div>

      {s.chips && s.chips.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
          {s.chips.map((c, i) => (
            <Chip key={i}>{c}</Chip>
          ))}
        </div>
      )}

      {s.after && <p style={{ margin: '20px 0 0' }}>{s.after}</p>}

      {s.kind === 'cards' && <Cards items={s.items} />}
      {s.kind === 'steps' && <Steps steps={s.steps} />}
      {s.list && s.list.length > 0 && <CheckList items={s.list} />}
      {s.bullets && s.bullets.length > 0 && <Bullets items={s.bullets} />}
      {s.kind === 'stats' && <Stats stats={s.stats} />}
      {s.kind === 'feature' && images?.[s.img] && <FeatureImage src={images[s.img]} alt={decode(s.title)} />}
      {s.kind === 'pipeline' && <Pipeline steps={s.steps} />}
    </>
  );
}
