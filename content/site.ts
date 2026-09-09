// Site-level lists ported verbatim from the prototype's Component class.

export const AI_LINES = [
  { n: '01', title: 'Process Automation', copy: 'Automate routine processes and eliminate data silos so teams spend time on judgement, not re-keying.' },
  { n: '02', title: 'AI Chatbots', copy: '24/7 support with personalised interactions, embedded in your website, app or CRM, scaling as demand grows.' },
  { n: '03', title: 'AI Agents', copy: 'Systems that reason, retrieve and act across your tools to complete multi-step work.' },
  { n: '04', title: 'Document Intelligence', copy: 'Read, classify and extract from documents; automate analysis and report generation.' },
  { n: '05', title: 'Knowledge & RAG', copy: 'Retrieval-augmented answers grounded in your own knowledge base, so outputs are accurate and traceable.' },
  { n: '06', title: 'Integration', copy: 'CRM and ERP integrations with OTT services for real-time analytics and unified data streams.' },
  { n: '07', title: 'Predictive AI', copy: 'Predictive analytics on your operational data to forecast demand, risk and behaviour.' },
  { n: '08', title: 'Custom AI', copy: 'Bespoke AI applications when an off-the-shelf model does not fit the problem.' },
];

export const AI_CAPS = [
  { title: 'Large Language Models', copy: 'Human-like text understanding and generation: high-quality content at speed, better conversational AI, automated analysis and reporting.' },
  { title: 'Vision AI', copy: 'Automated analysis of images and video for security monitoring, quality control and customer behaviour.' },
  { title: 'Generative AI', copy: 'Original content, rapid design variations and prototyping, creative problem-solving.' },
  { title: 'E-commerce personalisation', copy: 'Behaviour-driven recommendations and tailored shopping experiences that lift conversion and loyalty.' },
  { title: 'Machine learning & signal processing', copy: 'AI and ML solutions built on multi-source information, knowledge-based and expert systems, in collaboration with startups and universities.' },
];

export const AI_FAQ: [string, string][] = [
  ['What industries do you serve?', 'Our AI solutions are versatile and can be customised for industries such as retail, finance, healthcare, manufacturing and more.'],
  ['How long does implementation take?', 'Timelines vary with project complexity, typically ranging from a few weeks to several months.'],
  ['Do you provide support after deployment?', 'Yes. Continuous monitoring, regular updates and dedicated support keep your AI solutions delivering value over time.'],
];

/** Services index rows. `slug` links the row to a /services/[slug] page when one exists. */
export const SERVICE_ROWS: { n: string; title: string; copy: string; slug?: string }[] = [
  { n: '01', title: 'Software development', copy: 'Custom web and mobile applications, API development and application integration so every system in the business talks to the others.', slug: 'software-development' },
  { n: '02', title: 'e-Commerce development', copy: 'WordPress, Shopify and WooCommerce stores, payment gateway integration, product upload, redesigns and maintenance.', slug: 'e-commerce-development' },
  { n: '03', title: 'Enterprise cloud services', copy: 'Optimise performance, control costs and secure complex mixes of apps and environments, inside the data centre or in the cloud.', slug: 'cloud-services' },
  { n: '04', title: 'IT infrastructure', copy: 'End-to-end infrastructure: networks, LAN and Wi-Fi, servers, storage and NAS, firewalls, VPN, backup, hardware deployment and managed support.', slug: 'it-infrastructure' },
  { n: '05', title: 'System integrations', copy: 'Application integration and API development across the apps modern businesses run.' },
  { n: '06', title: 'Business intelligence', copy: 'A full range of BI services on MS-SQL Server, SharePoint and Power BI to drive cost saving and performance.' },
  { n: '07', title: 'IoT solutions', copy: 'Interconnected, centrally managed sensors integrated with mobile and web applications for automation.' },
  { n: '08', title: 'SMS notification services', copy: 'Bulk, transactional and OTP SMS with API integration, custom sender IDs, delivery reports and international reach.' },
  { n: '09', title: 'SEO / SEM', copy: 'Search visibility and paid search for businesses that need to be found.', slug: 'seo' },
  { n: '10', title: 'Social media', copy: 'Social presence and campaigns as part of a digital marketing programme.', slug: 'social-media' },
];

export const CLOUD_ROWS = [
  { n: '01', title: 'Enterprise Email Solutions', copy: 'Business email accounts, domain setup, migration, spam and malware protection, Microsoft 365 and Google Workspace.' },
  { n: '02', title: 'Cloud Enterprise Server', copy: 'VPS, dedicated and managed cloud servers with migration and monitoring.' },
  { n: '03', title: 'cPanel Hosting', copy: 'Linux hosting with cPanel, SSL and automated backups.' },
  { n: '04', title: 'Windows Hosting', copy: 'Windows-based hosting for .NET and Windows workloads.' },
  { n: '05', title: 'Shared Hosting Plus', copy: 'Shared hosting bundled with enterprise email.' },
];

export const SOLUTIONS = [
  { kicker: 'Operations', title: 'Automate the work that repeats', copy: 'Workflow automation, document intelligence and system integration remove manual steps and data silos.', uses: 'AI · Integration · BI' },
  { kicker: 'Customers', title: 'Serve customers around the clock', copy: 'Chatbots and agents that answer, personalise and hand off, embedded in your site, app or CRM.', uses: 'AI Chatbots · AI Agents · SMS' },
  { kicker: 'Security', title: 'Secure the network and every endpoint', copy: 'Firewalls, UTM, endpoint protection, VPN, backup and SSL from authorised partners.', uses: 'Fortinet · Sophos · Kaspersky · DigiCert' },
  { kicker: 'Cloud', title: 'Move to the cloud without disruption', copy: 'Enterprise email, cloud servers, hosting and migration with monitoring after go-live.', uses: 'Microsoft 365 · AWS · cPanel · Veeam' },
  { kicker: 'Commerce', title: 'Sell online', copy: 'Shopify, WooCommerce and WordPress stores with payments, personalisation and SEO.', uses: 'e-Commerce · Personalisation · SEO/SEM' },
  { kicker: 'Insight', title: 'See the business clearly', copy: 'Business intelligence and predictive analytics on the data you already hold.', uses: 'Power BI · MS-SQL · Predictive AI' },
];

export const INDUSTRIES = [
  'Healthcare',
  'Finance',
  'Education',
  'Retail &amp; e-commerce',
  'Manufacturing',
  'Infrastructure',
  'Travel &amp; hospitality',
];

export const PRODUCT_KICKERS: Record<string, string> = {
  symscan: 'HR & Biometrics',
  'job-management-system': 'Operations',
  'patient-management-system': 'Healthcare',
  'assets-management-system': 'Property & Assets',
};

/** 46 client logos, downloaded from the live site into /public/clients. */
export const CLIENT_LOGOS: { src: string; alt: string }[] = [
  'ppt-2-40', 'ppt-2-59', 'ppt-2-54', 'outfitter', 'ppt-2-43', 'ppt-2-34', 'ppt-2-60', 'ramada',
  'ppt-2-44', 'ppt-2-46', 'ppt-2-45', 'ppt-2-42', 'ppt-2-53', 'ppt-2-61', 'ppt-2-63', 'ppt-2-62',
  'ppt-2-55', 'ppt-2-56', 'ppt-2-57', 'ppt-2-58', 'ppt-2-52', 'ppt-2-51', 'ppt-2-50', 'ppt-2-49',
  'ppt-2-47', 'ppt-2-48', 'ppt-2-41', 'ppt-2-39', 'ppt-2-38', 'ppt-2-35', 'ppt-2-36', 'loftex',
  'ppt-2-37', 'untitled-design-10-1', 'untitled-design-9-1-1', 'untitled-design-8-1-1',
  'untitled-design-7-1', 'untitled-design-6-1', 'untitled-design-5-1', 'untitled-design-15',
  'untitled-design-14', 'untitled-design-13-1', 'untitled-design-12-1', 'untitled-design-11-1-1',
  'untitled-design-17', 'untitled-design-16',
].map((f) => ({
  src: `/clients/${f}.webp`,
  alt: ({ outfitter: 'Outfitters', ramada: 'Ramada', loftex: 'Loftex' } as Record<string, string>)[f] || 'Client logo',
}));

/** The marquee strip on home and about uses this 12-logo subset. */
export const MARQUEE_LOGOS: { src: string; alt: string }[] = [
  'ppt-2-44', 'ppt-2-57', 'outfitter', 'ppt-2-34', 'ppt-2-59', 'ppt-2-45',
  'ppt-2-58', 'ppt-2-41', 'ramada', 'ppt-2-49', 'ppt-2-55', 'ppt-2-51',
].map((f) => ({
  src: `/clients/${f}.webp`,
  alt: ({ outfitter: 'Outfitters', ramada: 'Ramada' } as Record<string, string>)[f] || 'Client logo',
}));

/** Contact form: services, and the feature checkboxes each one reveals. */
export const SERVICE_OPTIONS: [label: string, icon: string][] = [
  ['AI Solutions', 'spark'],
  ['SMS Solutions', 'mail'],
  ['Cloud Email Services', 'cloud'],
  ['WordPress & Shopify Development', 'cart'],
  ['Hosting Solutions', 'server'],
  ['IT Infrastructure Solutions', 'network'],
  ['Not Sure / Need Consultation', 'headset'],
];

export const FEATURE_MAP: Record<string, string[]> = {
  'AI Solutions': ['AI Automation', 'AI Chatbot', 'Document Analysis', 'Image Analysis', 'Data Analysis / Reporting', 'Predictive Analytics', 'Workflow Automation', 'API / System Integration', 'Custom AI Application', 'Not Sure / Need Recommendation', 'Other'],
  'SMS Solutions': ['Bulk SMS', 'Transactional SMS', 'OTP SMS', 'SMS API Integration', 'Custom Sender ID', 'Delivery Reports', 'International SMS', 'SMS Marketing Campaign', 'Web Portal Access', 'Not Sure / Need Recommendation', 'Other'],
  'Cloud Email Services': ['Business Email Accounts', 'Domain Email Setup', 'Email Migration', 'Spam Protection', 'Antivirus / Malware Protection', 'Microsoft 365 Setup', 'Google Workspace Setup', 'Email Backup / Archiving', 'Mobile / Outlook Configuration', 'Not Sure / Need Recommendation', 'Other'],
  'WordPress & Shopify Development': ['WordPress Website', 'Shopify Store', 'WooCommerce Store', 'Custom Website Design', 'Website Redesign', 'Mobile-Friendly Design', 'Payment Gateway Integration', 'Product Upload', 'Basic SEO Setup', 'Website Maintenance', 'Not Sure / Need Recommendation', 'Other'],
  'Hosting Solutions': ['Shared Hosting', 'VPS Hosting', 'Dedicated Server', 'Cloud Hosting', 'Managed Hosting', 'WordPress Hosting', 'SSL Certificate', 'Automated Backups', 'Server Migration', 'Server Monitoring', 'Not Sure / Need Recommendation', 'Other'],
  'IT Infrastructure Solutions': ['Network Setup', 'LAN / Wi-Fi Setup', 'Server Setup', 'Storage / NAS Setup', 'Firewall / Security', 'VPN Setup', 'Backup Solution', 'Microsoft 365 / Cloud Integration', 'Hardware Deployment', 'AMC / Managed IT Support', 'Not Sure / Need Recommendation', 'Other'],
  'Not Sure / Need Consultation': ['Need Consultation', 'Need Recommendation', 'New Business Setup', 'Existing System Review', 'Cost Estimate Required', 'Technical Support Required', 'Other'],
};

export const REQUIREMENT_TYPES = [
  'New setup',
  'Upgrade existing system',
  'Migration',
  'Integration',
  'Support / Maintenance',
  'Consultation only',
  'Not sure',
];

export const EXISTING_SYSTEM_OPTIONS = ['Yes', 'No', 'Not sure'];
export const TIMELINE_OPTIONS = ['Immediately', 'Within 1 week', 'Within 1 month', 'Flexible / Not sure'];
export const BUDGET_OPTIONS = ['Basic', 'Standard', 'Premium', 'Need recommendation', 'Prefer to discuss'];

export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
