/**
 * Count-up figure. <Motion /> animates it from `from` to `to` over 1500ms
 * ease-out cubic the first time it scrolls into view; the rendered text is the
 * final value so it is correct without JavaScript.
 */
export default function Counter({
  to,
  from = 0,
  style,
}: {
  to: number;
  from?: number;
  style?: React.CSSProperties;
}) {
  return (
    <p
      data-count={to}
      data-from={from}
      style={{
        fontWeight: 500,
        fontSize: 'clamp(40px,4vw,64px)',
        lineHeight: 1,
        letterSpacing: '-.04em',
        margin: '0 0 12px',
        fontVariantNumeric: 'tabular-nums',
        ...style,
      }}
    >
      {to}
    </p>
  );
}
