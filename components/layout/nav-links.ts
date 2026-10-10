/**
 * Navigation entries that are not derived from the content files, shared by the
 * desktop header and the mobile menu so the two cannot drift apart.
 *
 * The four dynamic lists (AI, services, cloud, products) are built from the
 * content in app/layout.tsx and handed down as props.
 */

export type NavItem = { label: string; href: string };

/**
 * The About pages. The desktop header hangs these off its Home menu, which is
 * how the old site read; the mobile menu hangs them off About, where their URLs
 * put them.
 */
export const ABOUT_LINKS: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Management Team', href: '/about/leadership' },
  { label: 'Certifications', href: '/about/certifications' },
  { label: 'Our Affiliations', href: '/about/affiliations' },
];

/** Partner groups are sections of one page, so these are anchors. */
export const PARTNER_LINKS: NavItem[] = [
  { label: 'Network Security Partners', href: '/partners#network-security' },
  { label: 'Compliance Partners', href: '/partners#ssl-compliance' },
  { label: 'End-Point Security Partners', href: '/partners#endpoint-security' },
  { label: 'Other Brand Partners', href: '/partners#infrastructure-cloud' },
];
