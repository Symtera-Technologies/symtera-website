# Symtera Technologies — website

Next.js 15 (App Router) + TypeScript + Tailwind v4 rebuild of the design in
`../design_handoff_symtera`. All 35 routes from the handoff route map are
implemented.

Deployment to cPanel is documented separately in [DEPLOYMENT.md](DEPLOYMENT.md).
The project must live outside `public_html`.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env.local` and fill it in before the contact form can
deliver mail:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required. Without it `/api/contact` returns 500 and logs the submission. |
| `CONTACT_TO` | Inbox for requests. Defaults to `sales@symteratech.com`. |
| `CONTACT_FROM` | Verified Resend sender. Defaults to `website@symteratech.com`. |

## How the design was ported

The handoff is an HTML prototype, not production code. Colors, type, spacing and
motion are copied from it exactly, so **components carry inline styles rather
than utility classes**. Tailwind is installed and the tokens are mapped in
`app/globals.css` under `@theme`, but layout values come from the prototype
verbatim. The prototype's `<style>` block (keyframes, `[data-*]` hover rules,
breakpoints) is ported verbatim into `app/globals.css`.

### Motion

`components/ui/Motion.tsx` is one client controller mounted in the root layout.
It implements the prototype's behaviours through data attributes, which lets
every page stay a server component:

| Attribute | Behaviour |
| --- | --- |
| `data-reveal` | opacity 0→1, translateY(22px)→0, 700ms, 70ms stagger capped at 350ms |
| `data-count` | count-up, 1500ms ease-out cubic |
| `data-tilt` | rotateX/Y from the pointer, glow overlay follows the cursor |
| `data-magnet` | translate up to ±8px toward the pointer |
| `data-parallax` | translateY(scrollY × factor) |

All of it is disabled under `prefers-reduced-motion`, and every element renders
its final content without JavaScript.

Two deliberate improvements over the prototype's observer: an element already
scrolled past (deep link, restored scroll position, anchor jump) is shown
outright instead of staying invisible, and a section taller than the viewport
reveals on any visible part, since it can never reach the 10% threshold.

### Content

`content/` holds the copy, ported verbatim from the handoff's data files. The
only edit was rewriting image URLs from `symteratech.com` to the local copies in
`public/`.

| File | Source |
| --- | --- |
| `ai.ts` | `ai-pages.js` → `AI_PAGES` |
| `services.ts`, `cloud.ts`, `products.ts` | `service-pages.js` → `SERVICE_PAGES`, `CLOUD_PAGES`, `PRODUCT_PAGES` |
| `icons.ts` | `ICONS` + `SERVICE_ICONS` |
| `site.ts`, `company.ts`, `partners.ts` | the prototype's `Component` class data |
| `types.ts` | types added on top of the verbatim data |

Body copy contains inline `<b>` and HTML entities, so it is rendered with
`dangerouslySetInnerHTML` exactly as the prototype did. `lib/html.ts` holds the
`<b>` → styled `<strong>` substitution. These strings are checked-in content,
never user input.

### Structure

```
app/                     35 routes; template.tsx is the 280ms route transition
components/layout/       Header (hover dropdowns), MobileMenu, Footer + CtaBanner
components/ui/           Button, Type, Layout, TiltCard, Counter, Reveal,
                         Marquee, FaqList, Icons, Motion
components/visuals/      SceneSvg (aiVisual + svcVisual ports), NetworkCanvas, OrbitScene
components/sections/     home page sections
components/pages/        ServicePageTemplate + SectionRenderer + PlanMatrix
components/forms/        ContactForm
content/                 ported copy
lib/                     tokens, html helpers, contact schema
```

`ServicePageTemplate` renders all 18 AI, service, cloud and product sub-pages
from content alone: hero with its animated scene, roman-numeral sections, plans,
the collapsible comparison matrix, FAQ, dark CTA and related links.

## Contact form

React Hook Form + Zod, with `lib/contact-schema.ts` shared by the client and the
route handler so both validate identically. `POST /api/contact` emails sales with
the subject `[Website] {service} — {fullName}`, sends the user an auto-reply, and
returns 200. It carries a honeypot field (a filled one is accepted silently so a
bot learns nothing) and an in-process rate limit of 5 requests per IP per 10
minutes.

**The rate limit is in-memory and does not survive scaling.** `@upstash/ratelimit`
and `@upstash/redis` are installed for the swap when this runs on more than one
instance.

Product pages point their CTAs at `/contact?service=<Product>`. A product name
matches no service option, so it seeds the message with a demo request instead;
a query value that does match an option preselects it.

## Notes for the design team

- **Header nav.** The handoff README describes an "About" menu and a "Talk to us"
  button. Both design files instead show a **Home** menu (About Us, Management
  Team, Certifications, Our Affiliations) and an **Order Now** button. The design
  files won, since they are the stated visual source of truth.
- **Leadership portraits** are placeholders in the design (`image-slot`,
  "Portrait"), so they are rendered as placeholder panels. Drop in real images
  when they exist.
- **Client logos and service photos** were downloaded from the live site into
  `public/clients` and `public/services`, as the handoff asked. Nothing loads
  from `symteratech.com` at runtime, so no `next/image` remote pattern is needed.
- The prototype's own Products page renders no product cards (its content import
  does not always resolve). This build renders all four, which is what the
  template intends.
