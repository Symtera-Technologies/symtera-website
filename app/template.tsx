/**
 * Route transition: fade + translateY(12px) + blur(4px) over 280ms.
 * A template remounts on every navigation, so the CSS animation replays.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div data-page-transition>{children}</div>;
}
