/**
 * Pointer-tilt card. <Motion /> binds the rotateX/Y transform and moves the
 * glow overlay; the card renders fully without JavaScript.
 */
export default function TiltCard({
  children,
  style,
  reveal,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  reveal?: boolean;
  as?: 'div' | 'figure';
}) {
  return (
    <Tag
      data-tilt=""
      {...(reveal ? { 'data-reveal': '' } : {})}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      <div
        data-tilt-glow=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity .35s',
        }}
      />
      {children}
    </Tag>
  );
}
