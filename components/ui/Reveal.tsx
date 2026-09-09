/**
 * Scroll reveal. The actual animation is driven by <Motion /> in the root
 * layout, which observes every [data-reveal] element — so this stays a plain
 * server component.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  style,
  id,
  stack,
  ...rest
}: {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'figure' | 'p';
  style?: React.CSSProperties;
  id?: string;
  /** Adds data-stack so the grid collapses to one column under 760px. */
  stack?: boolean;
} & Record<string, unknown>) {
  return (
    <Tag data-reveal="" {...(stack ? { 'data-stack': '' } : {})} id={id} style={style} {...rest}>
      {children}
    </Tag>
  );
}
