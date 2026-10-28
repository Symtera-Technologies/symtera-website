import Script from 'next/script';

/**
 * Google Analytics 4. The measurement ID is not a secret — it is visible in the
 * page source of every site that uses one — so it is checked in as the default
 * and only needs NEXT_PUBLIC_GA_ID to point a staging build somewhere else.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-N2MCR8YT3Z';

/**
 * Held back outside production so `next dev` and local production builds do not
 * file hits against the real property. Set NEXT_PUBLIC_GA_ID to '' to turn it
 * off in production too.
 */
export function GoogleAnalytics() {
  if (!GA_ID || process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      {/* `afterInteractive` is the Next equivalent of the snippet's `async`: it
          loads once the page is interactive, so it never blocks first paint. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
