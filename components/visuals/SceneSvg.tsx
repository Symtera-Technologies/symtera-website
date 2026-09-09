/**
 * Per-page animated SVG scenes, ported from the prototype's aiVisual() and
 * svcVisual() switches. Pure SVG + CSS keyframes, so these stay server
 * components; prefers-reduced-motion disables the animations globally.
 */

const G = '#8CC63F';
const B = '#0A70B8';
const S = '#1BA0D8';
const W = 'rgba(244,247,250,.14)';
const MONO_FF = 'var(--font-geist-mono), monospace';
const SERIF_FF = 'var(--font-cormorant), serif';

type Kids = React.ReactNode;

const Frame = () => (
  <rect x={20} y={20} width={360} height={360} rx={28} fill="none" stroke={W} strokeDasharray="2 6" />
);

const Dash = ({ d, col, dur }: { d: string; col: string; dur: number }) => (
  <path
    d={d}
    stroke={col}
    strokeWidth={1.6}
    fill="none"
    strokeDasharray="6 8"
    style={{ animation: `sym-dash ${dur}s linear infinite` }}
  />
);

const Line = ({ x, y, w, col = W }: { x: number; y: number; w: number; col?: string }) => (
  <rect x={x} y={y} width={w} height={6} rx={3} fill={col} />
);

const Node = ({ x, y, r, col, delay }: { x: number; y: number; r: number; col: string; delay: number }) => (
  <g>
    <circle
      cx={x}
      cy={y}
      r={r * 2.6}
      fill={col}
      opacity={0.12}
      style={{ animation: 'sym-pulse 3s ease-in-out infinite', animationDelay: `${delay}s`, transformOrigin: `${x}px ${y}px` }}
    />
    <circle cx={x} cy={y} r={r} fill={col} />
  </g>
);

const Card = ({
  x,
  y,
  w,
  h,
  delay,
  fill = 'rgba(15,27,43,.9)',
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
  fill?: string;
  children?: Kids;
}) => (
  <g style={{ animation: 'sym-float 6s ease-in-out infinite', animationDelay: `${delay}s` }}>
    <rect x={x} y={y} width={w} height={h} rx={14} fill={fill} stroke={W} />
    {children}
  </g>
);

function Svg({ children }: { children: Kids }) {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ overflow: 'visible', display: 'block' }}>
      {children}
    </svg>
  );
}

/* ─────────────────────────── AI scenes ─────────────────────────── */

function AiScene({ kind }: { kind: string }) {
  if (kind === 'flow') {
    return (
      <Svg>
        <Frame />
        <Dash d="M80 110 C 160 110, 160 200, 240 200 S 320 290, 330 290" col={S} dur={3} />
        <Dash d="M80 290 C 160 290, 160 200, 240 200" col={G} dur={2.6} />
        <Card x={40} y={80} w={80} h={60} delay={0}>
          <Line x={52} y={96} w={40} col={G} />
          <Line x={52} y={112} w={56} />
        </Card>
        <Card x={40} y={260} w={80} h={60} delay={1}>
          <Line x={52} y={276} w={48} col={S} />
          <Line x={52} y={292} w={36} />
        </Card>
        <Card x={200} y={165} w={90} h={70} delay={0.5}>
          <circle
            cx={245}
            cy={190}
            r={12}
            fill="none"
            stroke={G}
            strokeWidth={1.6}
            strokeDasharray="10 8"
            style={{ animation: 'sym-spin 6s linear infinite', transformOrigin: '245px 190px' }}
          />
          <Line x={222} y={214} w={46} />
        </Card>
        <Card x={300} y={250} w={80} h={60} delay={1.4}>
          <Line x={312} y={266} w={40} col={G} />
          <Line x={312} y={282} w={56} />
        </Card>
        <Node x={80} y={110} r={5} col={G} delay={0} />
        <Node x={80} y={290} r={5} col={S} delay={0.6} />
        <Node x={240} y={200} r={6} col={G} delay={1.2} />
        <Node x={330} y={290} r={5} col={S} delay={1.8} />
      </Svg>
    );
  }

  if (kind === 'chat') {
    return (
      <Svg>
        <Frame />
        <Card x={50} y={90} w={200} h={62} delay={0}>
          <Line x={66} y={108} w={120} />
          <Line x={66} y={124} w={80} />
        </Card>
        <Card x={150} y={175} w={200} h={62} delay={0.8}>
          <rect x={150} y={175} width={200} height={62} rx={14} fill={B} opacity={0.85} />
          <Line x={166} y={193} w={150} col="rgba(255,255,255,.7)" />
          <Line x={166} y={209} w={96} col="rgba(255,255,255,.5)" />
        </Card>
        <Card x={50} y={260} w={150} h={54} delay={1.6}>
          {[80, 100, 120].map((cx, i) => (
            <circle
              key={cx}
              cx={cx}
              cy={287}
              r={5}
              fill={G}
              style={{ animation: 'sym-typing 1.2s ease-in-out infinite', animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </Card>
        <circle cx={320} cy={90} r={26} fill="rgba(140,198,63,.15)" stroke={G} />
        <path d="M310 90h20M320 80v20" stroke={G} strokeWidth={2} />
      </Svg>
    );
  }

  if (kind === 'agent') {
    return (
      <Svg>
        <circle cx={200} cy={200} r={150} fill="none" stroke={W} strokeDasharray="2 6" />
        <circle cx={200} cy={200} r={100} fill="none" stroke={W} />
        <g style={{ animation: 'sym-spin 24s linear infinite', transformOrigin: '200px 200px' }}>
          {[0, 60, 120, 180, 240, 300].map((a, i) => {
            const x = 200 + Math.cos((a * Math.PI) / 180) * 100;
            const y = 200 + Math.sin((a * Math.PI) / 180) * 100;
            return (
              <g key={a}>
                <line x1={200} y1={200} x2={x} y2={y} stroke={i % 2 ? S : G} strokeWidth={1.2} opacity={0.5} />
                <rect x={x - 16} y={y - 16} width={32} height={32} rx={9} fill="#0F1B2B" stroke={i % 2 ? S : G} />
              </g>
            );
          })}
        </g>
        <rect x={164} y={164} width={72} height={72} rx={20} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
        <circle cx={188} cy={196} r={4} fill={G} style={{ animation: 'sym-typing 2s ease-in-out infinite' }} />
        <circle cx={212} cy={196} r={4} fill={G} style={{ animation: 'sym-typing 2s ease-in-out infinite', animationDelay: '.3s' }} />
        <path d="M186 214q14 8 28 0" stroke={G} strokeWidth={2} fill="none" />
      </Svg>
    );
  }

  if (kind === 'docs') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 7s ease-in-out infinite' }}>
          <rect x={110} y={70} width={180} height={240} rx={14} fill="rgba(15,27,43,.92)" stroke={W} />
          <Line x={134} y={100} w={80} col={G} />
          <Line x={134} y={124} w={130} />
          <Line x={134} y={144} w={110} />
          <Line x={134} y={164} w={130} />
          <Line x={134} y={196} w={60} col={S} />
          <Line x={134} y={216} w={130} />
          <Line x={134} y={236} w={90} />
          <Line x={134} y={268} w={100} col={G} />
        </g>
        <g style={{ clipPath: 'inset(70px 110px 90px 110px round 14px)' }}>
          <rect
            x={110}
            y={70}
            width={180}
            height={3}
            fill={G}
            style={{ animation: 'sym-scan 3.5s linear infinite', filter: 'drop-shadow(0 0 8px #8CC63F)' }}
          />
        </g>
        <Card x={270} y={130} w={90} h={44} delay={0.6}>
          <path d="M286 152l8 8 14-16" stroke={G} strokeWidth={2} fill="none" />
          <Line x={316} y={148} w={30} />
        </Card>
        <Card x={40} y={230} w={90} h={44} delay={1.2}>
          <path d="M56 252l8 8 14-16" stroke={S} strokeWidth={2} fill="none" />
          <Line x={86} y={248} w={30} />
        </Card>
      </Svg>
    );
  }

  if (kind === 'rag') {
    const sources: [number, number][] = [
      [80, 120],
      [320, 110],
      [70, 290],
      [330, 300],
      [200, 60],
    ];
    return (
      <Svg>
        <circle cx={200} cy={200} r={160} fill="none" stroke={W} strokeDasharray="2 6" />
        {sources.map(([x, y], i) => (
          <g key={i}>
            <Dash d={`M${x} ${y} L200 200`} col={i % 2 ? S : G} dur={2 + i * 0.3} />
            <Card x={x - 34} y={y - 22} w={68} h={44} delay={i * 0.4}>
              <Line x={x - 22} y={y - 10} w={30} col={i % 2 ? S : G} />
              <Line x={x - 22} y={y + 4} w={44} />
            </Card>
          </g>
        ))}
        <circle cx={200} cy={200} r={46} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
        <circle
          cx={200}
          cy={200}
          r={62}
          fill="none"
          stroke={G}
          opacity={0.4}
          style={{ animation: 'sym-pulse 3s ease-in-out infinite', transformOrigin: '200px 200px' }}
        />
        <circle cx={194} cy={196} r={12} fill="none" stroke={G} strokeWidth={2} />
        <path d="M203 205l10 10" stroke={G} strokeWidth={2.4} />
      </Svg>
    );
  }

  if (kind === 'hub') {
    return (
      <Svg>
        <Frame />
        {['CRM', 'ERP', 'DB', 'API', 'Email', 'Docs'].map((t, i) => {
          const a = i * 60 - 90;
          const x = 200 + Math.cos((a * Math.PI) / 180) * 130;
          const y = 200 + Math.sin((a * Math.PI) / 180) * 130;
          return (
            <g key={t}>
              <Dash d={`M200 200 L${x} ${y}`} col={i % 2 ? S : G} dur={2.2 + i * 0.2} />
              <g style={{ animation: 'sym-float 6s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}>
                <rect x={x - 30} y={y - 18} width={60} height={36} rx={10} fill="#0F1B2B" stroke={W} />
                <text x={x} y={y + 4} textAnchor="middle" fill="#F4F7FA" fontSize={12} fontFamily={MONO_FF}>
                  {t}
                </text>
              </g>
            </g>
          );
        })}
        <rect x={164} y={164} width={72} height={72} rx={20} fill={B} />
        <path d="M188 188v-8M212 188v-8M182 190h36v8a18 18 0 0 1-36 0zM200 216v10" stroke="#fff" strokeWidth={2} fill="none" />
      </Svg>
    );
  }

  if (kind === 'forecast') {
    const bars = [90, 130, 110, 170, 150, 200];
    return (
      <Svg>
        <Frame />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={60} y1={100 + i * 55} x2={340} y2={100 + i * 55} stroke={W} />
        ))}
        {[60, 100, 140, 180, 220, 260].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={320 - bars[i]}
            width={22}
            height={bars[i]}
            rx={5}
            fill={i % 2 ? S : B}
            opacity={0.85}
            style={{
              transformOrigin: `${x}px 320px`,
              animation: 'sym-grow 1.2s cubic-bezier(.2,.7,.2,1) both',
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
        <path
          d="M71 230 L111 190 L151 210 L191 150 L231 170 L271 120"
          stroke={G}
          strokeWidth={2.4}
          fill="none"
          strokeLinecap="round"
        />
        <Dash d="M271 120 C 300 100, 320 90, 345 70" col={G} dur={2} />
        <Node x={271} y={120} r={5} col={G} delay={0} />
        <Node x={345} y={70} r={6} col={G} delay={0.5} />
        <Card x={280} y={40} w={90} h={44} delay={0}>
          <Line x={294} y={54} w={30} col={G} />
          <Line x={294} y={68} w={60} />
        </Card>
      </Svg>
    );
  }

  // 'custom' and any unknown kind
  const blocks: [number, number, string][] = [
    [60, 60, 'UI'],
    [250, 50, 'API'],
    [50, 250, 'DB'],
    [260, 260, 'LLM'],
  ];
  return (
    <Svg>
      <Frame />
      {blocks.map(([x, y, t], i) => (
        <g key={t}>
          <Dash d={`M${x + 45} ${y + 30} L200 200`} col={i % 2 ? S : G} dur={2.4 + i * 0.3} />
          <Card x={x} y={y} w={90} h={60} delay={i * 0.5}>
            <text x={x + 14} y={y + 26} fill={i % 2 ? S : G} fontSize={12} fontFamily={MONO_FF}>
              {t}
            </text>
            <Line x={x + 14} y={y + 38} w={60} />
            <Line x={x + 14} y={y + 48} w={40} />
          </Card>
        </g>
      ))}
      <g style={{ animation: 'sym-spin 30s linear infinite', transformOrigin: '200px 200px' }}>
        <ellipse cx={200} cy={200} rx={120} ry={40} fill="none" stroke={S} opacity={0.6} />
      </g>
      <g style={{ animation: 'sym-spin 20s linear infinite reverse', transformOrigin: '200px 200px' }}>
        <ellipse cx={200} cy={200} rx={90} ry={32} fill="none" stroke={G} opacity={0.7} />
      </g>
      <circle cx={200} cy={200} r={44} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
      <circle
        cx={200}
        cy={200}
        r={58}
        fill="none"
        stroke={G}
        opacity={0.35}
        style={{ animation: 'sym-pulse 3s ease-in-out infinite', transformOrigin: '200px 200px' }}
      />
      <path d="M200 176l7 17 17 7-17 7-7 17-7-17-17-7 17-7z" fill={G} />
    </Svg>
  );
}

/* ───────────────────────── Service scenes ───────────────────────── */

const SCard = ({ x, y, w, h, delay, children }: { x: number; y: number; w: number; h: number; delay: number; children?: Kids }) => (
  <Card x={x} y={y} w={w} h={h} delay={delay} fill="rgba(15,27,43,.92)">
    {children}
  </Card>
);

function SvcScene({ kind }: { kind: string }) {
  if (kind === 'code') {
    const codeLines = [120, 180, 90, 150, 60, 130];
    const codeCols = [G, W, S, W, G, W];
    return (
      <Svg>
        <Frame />
        <SCard x={60} y={70} w={280} h={200} delay={0}>
          <circle cx={80} cy={88} r={4} fill="#FF5F57" />
          <circle cx={94} cy={88} r={4} fill="#FEBC2E" />
          <circle cx={108} cy={88} r={4} fill="#28C840" />
          {codeLines.map((w, i) => (
            <Line key={i} x={80 + (i % 3) * 16} y={112 + i * 22} w={w} col={codeCols[i]} />
          ))}
        </SCard>
        <g style={{ animation: 'sym-float 7s ease-in-out infinite', animationDelay: '1s' }}>
          <rect x={250} y={200} width={96} height={170} rx={18} fill="#0F1B2B" stroke={G} strokeWidth={1.4} />
          <rect x={262} y={224} width={72} height={110} rx={8} fill="rgba(10,112,184,.35)" />
          <Line x={274} y={240} w={48} col={G} />
          <Line x={274} y={256} w={36} />
          <circle cx={298} cy={352} r={6} fill="none" stroke={W} />
        </g>
      </Svg>
    );
  }

  if (kind === 'cart') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 6s ease-in-out infinite' }}>
          <rect x={70} y={80} width={200} height={150} rx={14} fill="rgba(15,27,43,.92)" stroke={W} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x={88 + i * 58}
                y={100}
                width={44}
                height={44}
                rx={8}
                fill={i === 1 ? 'rgba(140,198,63,.25)' : 'rgba(10,112,184,.3)'}
              />
              <Line x={88 + i * 58} y={152} w={44} />
              <Line x={88 + i * 58} y={164} w={28} col={i === 1 ? G : S} />
            </g>
          ))}
          <rect x={88} y={190} width={164} height={24} rx={12} fill={G} />
          <text x={170} y={207} textAnchor="middle" fill="#0B1420" fontSize={11} fontFamily={MONO_FF} letterSpacing={1}>
            CHECKOUT
          </text>
        </g>
        <Dash d="M270 150 C 300 150, 300 270, 320 270" col={S} dur={2.2} />
        <SCard x={280} y={250} w={90} h={60} delay={0.8}>
          <path d="M296 282l8 8 14-16" stroke={G} strokeWidth={2.2} fill="none" />
          <Line x={322} y={270} w={34} />
          <Line x={322} y={284} w={22} col={S} />
        </SCard>
        <g style={{ animation: 'sym-float 5s ease-in-out infinite', animationDelay: '.6s' }}>
          <path d="M60 290h12l10 40h36l8-28H78" stroke={G} strokeWidth={2.2} fill="none" strokeLinejoin="round" />
          <circle cx={88} cy={342} r={4} fill={G} />
          <circle cx={112} cy={342} r={4} fill={G} />
        </g>
      </Svg>
    );
  }

  if (kind === 'seo') {
    return (
      <Svg>
        <Frame />
        <SCard x={50} y={60} w={300} h={46} delay={0}>
          <circle cx={76} cy={83} r={8} fill="none" stroke={G} strokeWidth={2} />
          <path d="M82 89l6 6" stroke={G} strokeWidth={2.4} />
          <Line x={100} y={80} w={150} />
          <rect x={100} y={78} width={2} height={10} fill={G} style={{ animation: 'sym-typing 1s step-end infinite' }} />
        </SCard>
        {[0, 1, 2].map((i) => (
          <SCard key={i} x={50} y={126 + i * 66} w={300} h={54} delay={i * 0.4}>
            <Line x={66} y={142 + i * 66} w={i === 0 ? 160 : 120} col={i === 0 ? G : S} />
            <Line x={66} y={158 + i * 66} w={220} />
            <text
              x={330}
              y={158 + i * 66}
              textAnchor="end"
              fill={i === 0 ? G : '#8A96A3'}
              fontSize={12}
              fontFamily={MONO_FF}
            >
              {`#${i + 1}`}
            </text>
          </SCard>
        ))}
        <path
          d="M60 350 L120 330 L180 336 L240 300 L300 290 L345 250"
          stroke={G}
          strokeWidth={2.4}
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={345} cy={250} r={6} fill={G} />
      </Svg>
    );
  }

  if (kind === 'social') {
    const nodes: [number, number, string][] = [
      [90, 110, G],
      [300, 100, S],
      [110, 300, S],
      [290, 300, G],
      [200, 200, B],
    ];
    return (
      <Svg>
        <Frame />
        {nodes.map(([x, y, c], i) => (
          <g key={i}>
            {i < 4 && <Dash d={`M${x} ${y} L200 200`} col={c} dur={2 + i * 0.3} />}
            <g style={{ animation: 'sym-float 6s ease-in-out infinite', animationDelay: `${i * 0.4}s` }}>
              <circle cx={x} cy={y} r={i === 4 ? 40 : 30} fill="#0F1B2B" stroke={c} strokeWidth={1.6} />
              {i === 4 ? (
                <path
                  d="M190 208q10 8 20 0M192 194h.01M208 194h.01"
                  stroke={G}
                  strokeWidth={2.4}
                  fill="none"
                  strokeLinecap="round"
                />
              ) : (
                <path d={`M${x - 8} ${y + 4}l5 5 11-12`} stroke={c} strokeWidth={2.2} fill="none" />
              )}
            </g>
          </g>
        ))}
        <SCard x={230} y={40} w={120} h={46} delay={0.5}>
          <path d="M248 68l6-10 6 10z" fill={G} />
          <text x={268} y={68} fill="#F4F7FA" fontSize={12} fontFamily={MONO_FF}>
            +24% reach
          </text>
        </SCard>
      </Svg>
    );
  }

  if (kind === 'cloud') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 7s ease-in-out infinite' }}>
          <path
            d="M120 230a45 45 0 0 1 8-89 70 70 0 0 1 132 14 45 45 0 0 1-2 75z"
            fill="rgba(15,27,43,.92)"
            stroke={S}
            strokeWidth={1.6}
          />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={150 + i * 36} y={180} width={26} height={26} rx={6} fill={i === 1 ? G : B} opacity={0.9} />
          ))}
        </g>
        {([[70, 320], [200, 340], [330, 320]] as [number, number][]).map(([x, y], i) => (
          <g key={i}>
            <Dash d={`M${x} ${y} L${150 + i * 50} 232`} col={i === 1 ? G : S} dur={2 + i * 0.3} />
            <rect x={x - 30} y={y - 14} width={60} height={28} rx={8} fill="#0F1B2B" stroke={W} />
            <text x={x} y={y + 4} textAnchor="middle" fill="#F4F7FA" fontSize={11} fontFamily={MONO_FF}>
              {['On-prem', 'Apps', 'Users'][i]}
            </text>
          </g>
        ))}
      </Svg>
    );
  }

  if (kind === 'infra') {
    return (
      <Svg>
        <Frame />
        {[0, 1, 2].map((i) => (
          <g key={i} style={{ animation: 'sym-float 6s ease-in-out infinite', animationDelay: `${i * 0.3}s` }}>
            <rect x={90} y={90 + i * 64} width={220} height={48} rx={10} fill="rgba(15,27,43,.92)" stroke={W} />
            {[0, 1, 2, 3].map((j) => (
              <rect key={j} x={106 + j * 22} y={104 + i * 64} width={12} height={20} rx={2} fill="rgba(10,112,184,.6)" />
            ))}
            <circle
              cx={290}
              cy={114 + i * 64}
              r={4}
              fill={G}
              style={{ animation: 'sym-typing 1.6s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}
            />
            <circle cx={276} cy={114 + i * 64} r={4} fill={S} />
          </g>
        ))}
        <Dash d="M200 282 L200 330" col={G} dur={2} />
        {([[110, 340], [200, 350], [290, 340]] as [number, number][]).map(([x, y], i) => (
          <g key={i}>
            <Dash d={`M200 300 L${x} ${y}`} col={S} dur={2.4 + i * 0.2} />
            <circle cx={x} cy={y} r={10} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
          </g>
        ))}
        <path
          d="M330 60l22 8v16c0 14-10 22-22 26-12-4-22-12-22-26V68z"
          fill="rgba(140,198,63,.15)"
          stroke={G}
          strokeWidth={1.6}
        />
        <path d="M322 84l6 6 12-12" stroke={G} strokeWidth={2.2} fill="none" />
      </Svg>
    );
  }

  if (kind === 'mail') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 6s ease-in-out infinite' }}>
          <rect x={80} y={120} width={240} height={160} rx={16} fill="rgba(15,27,43,.92)" stroke={S} strokeWidth={1.6} />
          <path d="M80 136l120 90 120-90" stroke={G} strokeWidth={2} fill="none" />
          <path d="M80 280l90-70M320 280l-90-70" stroke={W} strokeWidth={1.4} />
        </g>
        <g style={{ animation: 'sym-float 5s ease-in-out infinite', animationDelay: '.6s' }}>
          <circle cx={310} cy={110} r={30} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
          <path
            d="M310 94l12 5v10c0 8-5 13-12 16-7-3-12-8-12-16V99z"
            fill="rgba(140,198,63,.2)"
            stroke={G}
            strokeWidth={1.6}
          />
          <path d="M304 110l4 4 8-8" stroke={G} strokeWidth={2} fill="none" />
        </g>
        {([[60, 300], [200, 330], [340, 300]] as [number, number][]).map(([x, y], i) => (
          <g key={i}>
            <Dash d={`M200 280 L${x} ${y}`} col={i === 1 ? G : S} dur={2 + i * 0.3} />
            <rect x={x - 22} y={y - 16} width={44} height={32} rx={8} fill="#0F1B2B" stroke={W} />
          </g>
        ))}
      </Svg>
    );
  }

  if (kind === 'server') {
    return (
      <Svg>
        <Frame />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} style={{ animation: 'sym-float 6s ease-in-out infinite', animationDelay: `${i * 0.25}s` }}>
            <rect x={100} y={80 + i * 56} width={200} height={42} rx={10} fill="rgba(15,27,43,.92)" stroke={W} />
            {[0, 1, 2].map((j) => (
              <rect key={j} x={116 + j * 26} y={94 + i * 56} width={16} height={14} rx={3} fill="rgba(10,112,184,.65)" />
            ))}
            <circle
              cx={282}
              cy={101 + i * 56}
              r={4}
              fill={G}
              style={{ animation: 'sym-typing 1.5s ease-in-out infinite', animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}
        <path d="M150 340a30 30 0 0 1 6-59 46 46 0 0 1 88 9 30 30 0 0 1-2 50z" fill="none" stroke={S} strokeWidth={1.6} />
        <Dash d="M200 304 L200 340" col={G} dur={2} />
      </Svg>
    );
  }

  if (kind === 'host') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 6s ease-in-out infinite' }}>
          <rect x={60} y={80} width={280} height={200} rx={16} fill="rgba(15,27,43,.92)" stroke={W} />
          <rect x={60} y={80} width={280} height={32} rx={16} fill="rgba(255,255,255,.05)" />
          <circle cx={80} cy={96} r={4} fill="#FF5F57" />
          <circle cx={94} cy={96} r={4} fill="#FEBC2E" />
          <circle cx={108} cy={96} r={4} fill="#28C840" />
          <rect x={130} y={90} width={180} height={12} rx={6} fill="rgba(255,255,255,.08)" />
          <path d="M150 96h6M162 93l3 3-3 3" stroke={G} strokeWidth={1.4} fill="none" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={80 + (i % 3) * 90}
              y={130 + Math.floor(i / 3) * 66}
              width={74}
              height={50}
              rx={8}
              fill={i % 2 ? 'rgba(10,112,184,.3)' : 'rgba(140,198,63,.18)'}
              stroke={W}
            />
          ))}
        </g>
        <g style={{ animation: 'sym-float 5s ease-in-out infinite', animationDelay: '.7s' }}>
          <circle cx={320} cy={300} r={30} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
          <rect x={310} y={298} width={20} height={16} rx={3} fill="none" stroke={G} strokeWidth={1.8} />
          <path d="M314 298v-5a6 6 0 0 1 12 0v5" stroke={G} strokeWidth={1.8} fill="none" />
        </g>
      </Svg>
    );
  }

  if (kind === 'partners') {
    return (
      <Svg>
        <circle cx={200} cy={200} r={160} fill="none" stroke={W} strokeDasharray="2 6" />
        <g style={{ animation: 'sym-spin 40s linear infinite', transformOrigin: '200px 200px' }}>
          {['F', 'S', 'D', 'C', 'M', 'A', 'V', 'H'].map((t, i) => {
            const a = i * 45;
            const x = 200 + Math.cos((a * Math.PI) / 180) * 130;
            const y = 200 + Math.sin((a * Math.PI) / 180) * 130;
            return (
              <g key={t}>
                <line x1={200} y1={200} x2={x} y2={y} stroke={i % 2 ? S : G} strokeWidth={1} opacity={0.45} />
                <circle cx={x} cy={y} r={22} fill="#0F1B2B" stroke={i % 2 ? S : G} strokeWidth={1.4} />
                <text x={x} y={y + 6} textAnchor="middle" fill="#F4F7FA" fontSize={16} fontFamily={SERIF_FF}>
                  {t}
                </text>
              </g>
            );
          })}
        </g>
        <circle cx={200} cy={200} r={46} fill="#0F1B2B" stroke={G} strokeWidth={1.6} />
        <circle
          cx={200}
          cy={200}
          r={62}
          fill="none"
          stroke={G}
          opacity={0.35}
          style={{ animation: 'sym-pulse 3s ease-in-out infinite', transformOrigin: '200px 200px' }}
        />
        <image href="/symtera-logo.png" x={170} y={190} width={60} height={20} preserveAspectRatio="xMidYMid meet" />
      </Svg>
    );
  }

  if (kind === 'biometric') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 6s ease-in-out infinite' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${200 - 30 - i * 16} 250 a${30 + i * 16} ${30 + i * 16} 0 0 1 ${60 + i * 32} 0`}
              stroke={i % 2 ? S : G}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              opacity={1 - i * 0.12}
            />
          ))}
        </g>
        <g style={{ clipPath: 'inset(150px 60px 100px 60px)' }}>
          <rect
            x={60}
            y={150}
            width={280}
            height={3}
            fill={G}
            style={{ animation: 'sym-scan 3s linear infinite', filter: 'drop-shadow(0 0 8px #8CC63F)' }}
          />
        </g>
        <rect x={60} y={150} width={280} height={150} rx={18} fill="none" stroke={W} strokeDasharray="10 8" />
        <SCard x={240} y={60} w={110} h={56} delay={0.4}>
          <path d="M256 88l6 6 12-14" stroke={G} strokeWidth={2.2} fill="none" />
          <text x={282} y={84} fill="#F4F7FA" fontSize={11} fontFamily={MONO_FF}>
            CHECKED IN
          </text>
          <text x={282} y={100} fill="#8A96A3" fontSize={10} fontFamily={MONO_FF}>
            09:00:14
          </text>
        </SCard>
        <SCard x={50} y={320} w={130} h={46} delay={0.9}>
          <text x={64} y={348} fill="#8CC63F" fontSize={12} fontFamily={MONO_FF}>
            PAYROLL · AUTO
          </text>
        </SCard>
      </Svg>
    );
  }

  if (kind === 'kanban') {
    return (
      <Svg>
        <Frame />
        {[0, 1, 2].map((c) => (
          <g key={c}>
            <rect x={60 + c * 96} y={70} width={84} height={260} rx={12} fill="rgba(15,27,43,.6)" stroke={W} />
            <text
              x={72 + c * 96}
              y={92}
              fill={[S, G, '#F4F7FA'][c]}
              fontSize={10}
              fontFamily={MONO_FF}
              letterSpacing={1}
            >
              {['TO DO', 'DOING', 'DONE'][c]}
            </text>
            {[0, 1, 2].slice(0, 3 - (c === 1 ? 1 : 0)).map((r) => (
              <g
                key={r}
                style={{ animation: 'sym-float 6s ease-in-out infinite', animationDelay: `${c * 0.4 + r * 0.3}s` }}
              >
                <rect
                  x={70 + c * 96}
                  y={106 + r * 66}
                  width={64}
                  height={52}
                  rx={8}
                  fill="rgba(15,27,43,.95)"
                  stroke={W}
                />
                <Line x={78 + c * 96} y={118 + r * 66} w={40} col={c === 2 ? G : S} />
                <Line x={78 + c * 96} y={132 + r * 66} w={48} />
                <circle cx={122 + c * 96} cy={146 + r * 66} r={5} fill={c === 2 ? G : B} />
              </g>
            ))}
          </g>
        ))}
      </Svg>
    );
  }

  if (kind === 'health') {
    return (
      <Svg>
        <Frame />
        <g style={{ animation: 'sym-float 6s ease-in-out infinite' }}>
          <rect x={70} y={90} width={260} height={220} rx={18} fill="rgba(15,27,43,.92)" stroke={W} />
          <path
            d="M90 200h40l14-40 20 80 18-60 12 20h96"
            stroke={G}
            strokeWidth={2.4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={400}
            style={{ animation: 'sym-dash 6s linear infinite' }}
          />
          <circle cx={300} cy={120} r={14} fill="none" stroke={S} strokeWidth={1.6} />
          <path d="M300 113v14M293 120h14" stroke={S} strokeWidth={2} />
          <Line x={90} y={250} w={120} />
          <Line x={90} y={268} w={180} />
          <Line x={90} y={286} w={90} col={S} />
        </g>
        <g style={{ animation: 'sym-float 5s ease-in-out infinite', animationDelay: '.7s' }}>
          <rect x={250} y={300} width={110} height={50} rx={12} fill="#0F1B2B" stroke={G} />
          <text x={305} y={322} textAnchor="middle" fill="#8A96A3" fontSize={10} fontFamily={MONO_FF}>
            TOKEN
          </text>
          <text x={305} y={340} textAnchor="middle" fill="#8CC63F" fontSize={16} fontFamily={MONO_FF}>
            #042
          </text>
        </g>
      </Svg>
    );
  }

  if (kind === 'building') {
    const towers: [number, number, number, number][] = [
      [70, 180, 70, 170],
      [150, 110, 90, 240],
      [250, 150, 80, 200],
    ];
    return (
      <Svg>
        <Frame />
        {towers.map(([x, y, w, h], i) => (
          <g key={i} style={{ animation: 'sym-float 7s ease-in-out infinite', animationDelay: `${i * 0.4}s` }}>
            <rect x={x} y={y} width={w} height={h} rx={8} fill="rgba(15,27,43,.92)" stroke={W} />
            {Array.from({ length: Math.floor(h / 30) }).flatMap((_, r) =>
              [0, 1].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={x + 12 + c * (w / 2 - 6)}
                  y={y + 14 + r * 30}
                  width={w / 2 - 18}
                  height={14}
                  rx={3}
                  fill={(r + c + i) % 3 === 0 ? 'rgba(140,198,63,.6)' : 'rgba(10,112,184,.45)'}
                  style={{ animation: 'sym-typing 3s ease-in-out infinite', animationDelay: `${(r + c) * 0.35}s` }}
                />
              )),
            )}
          </g>
        ))}
        <line x1={40} y1={350} x2={360} y2={350} stroke={W} />
        <SCard x={40} y={60} w={120} h={46} delay={0.5}>
          <text x={54} y={78} fill="#8A96A3" fontSize={10} fontFamily={MONO_FF}>
            OCCUPANCY
          </text>
          <text x={54} y={96} fill="#8CC63F" fontSize={14} fontFamily={MONO_FF}>
            Rent · Lease · Sell
          </text>
        </SCard>
      </Svg>
    );
  }

  return (
    <Svg>
      <Frame />
    </Svg>
  );
}

const AI_KINDS = new Set(['flow', 'chat', 'agent', 'docs', 'rag', 'hub', 'forecast', 'custom']);

/** Renders the scene for a content `visual` key, from either scene family. */
export default function SceneSvg({ kind }: { kind: string }) {
  return AI_KINDS.has(kind) ? <AiScene kind={kind} /> : <SvcScene kind={kind} />;
}

export { AiScene, SvcScene };
