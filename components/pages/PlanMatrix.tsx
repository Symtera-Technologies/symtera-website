'use client';

import { useState } from 'react';
import { MONO } from '@/lib/tokens';
import { ChevronDown } from '@/components/ui/Icons';
import type { Matrix } from '@/content/types';

const th: React.CSSProperties = {
  textAlign: 'center',
  padding: '14px 18px',
  fontWeight: 500,
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: '#8CC63F',
};

/** Collapsible full feature comparison table. */
export default function PlanMatrix({ matrix }: { matrix: Matrix }) {
  const [open, setOpen] = useState(false);

  return (
    <div data-reveal style={{ padding: '0 0 clamp(36px,4vw,56px)' }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          border: '1px solid #DCE3EA',
          background: '#fff',
          color: '#101C2B',
          fontWeight: 500,
          fontSize: 14.5,
          padding: '12px 18px',
          borderRadius: 999,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {open ? 'Hide full feature comparison' : 'Compare all plan features'}
        <ChevronDown size={14} style={{ transform: `rotate(${open ? 180 : 0}deg)`, transition: 'transform .25s' }} />
      </button>

      {open && (
        <div
          data-hero-rise
          style={{ marginTop: 18, overflow: 'auto', border: '1px solid #DCE3EA', borderRadius: 18, background: '#fff' }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
            <thead>
              <tr style={{ background: '#0B1420', color: '#F4F7FA' }}>
                <th style={{ ...th, textAlign: 'left', color: '#F4F7FA' }}>Features</th>
                {matrix.cols.map((c) => (
                  <th key={c} style={th}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.rows.map((row, i) => {
                const [name, ...cells] = row;
                return (
                  <tr key={i} data-row style={{ borderTop: '1px solid #DCE3EA' }}>
                    <td style={{ padding: '11px 18px', color: '#101C2B' }}>{name}</td>
                    {cells.map((t, j) => (
                      <td
                        key={j}
                        style={{
                          padding: '11px 18px',
                          textAlign: 'center',
                          color: t === '✓' ? '#39B54A' : t === '–' ? '#B7C3CF' : '#101C2B',
                          fontWeight: t === '✓' ? 700 : 500,
                        }}
                      >
                        {t}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
