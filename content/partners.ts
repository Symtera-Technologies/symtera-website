// Partner brands, partner-page sections and case studies. Verbatim from the design handoff.

export interface PartnerGroup {
  title: string;
  copy: string;
  items: string[];
}

/** The 27 partner brands in 5 groups, used by the home marquee. */
export const PARTNER_GROUPS: PartnerGroup[] = [
  {
    title: 'Network security',
    copy: 'Firewalls, UTM and secure networking for the perimeter and beyond.',
    items: ['Barracuda', 'Fortinet', 'SonicWall', 'Sophos', 'SafeUTM', 'Sangfor'],
  },
  {
    title: 'Compliance',
    copy: 'SSL certificates from every major certificate authority.',
    items: ['DigiCert', 'GeoTrust', 'Thawte', 'Sectigo', 'GoDaddy', 'SSL.com'],
  },
  {
    title: 'Endpoint security',
    copy: 'Protection for every device on the network.',
    items: ['Kaspersky', 'Bitdefender'],
  },
  {
    title: 'Infrastructure & platforms',
    copy: 'Hardware, networking, cloud, backup and surveillance brands we supply and deploy.',
    items: [
      'Dell', 'Cisco', 'HP', 'Lenovo', 'Microsoft', 'Huawei', 'D-Link', 'cPanel',
      'Grandstream', 'Ubiquiti', 'Amazon Web Services', 'Veeam', 'Hikvision',
    ],
  },
];

export interface PartnerSection {
  /** Anchor id; old /our-partners/* URLs redirect to /partners#<id>. */
  id: string;
  num: string;
  title: string;
  copy: string;
  items: [name: string, copy: string][];
}

export const PARTNER_SECTIONS: PartnerSection[] = [
  {
    id: 'network-security',
    num: 'I',
    title: 'Network Security Partners',
    copy: 'Our network security practice is built on partnerships with the world’s leading firewall and threat protection vendors. Each partner brings unique strengths, and our certified engineers help you choose and deploy the right solution for your specific security requirements and budget.',
    items: [
      ['Fortinet', 'FortiGate next-generation firewalls, FortiAnalyzer, FortiManager'],
      ['Sophos', 'XGS firewalls, Sophos Central unified management'],
      ['SonicWall', 'TZ and NSa series firewalls, cloud-managed security'],
      ['Barracuda Networks', 'CloudGen firewalls, email security, backup'],
      ['Sangfor Technologies', 'Next-generation firewalls, HCI, SD-WAN'],
      ['SafeUTM', 'Unified threat management solutions'],
    ],
  },
  {
    id: 'endpoint-security',
    num: 'II',
    title: 'Endpoint Security Partners',
    copy: 'Protecting endpoints — laptops, desktops, servers, and mobile devices — is critical in today’s distributed work environment. Our endpoint security partnerships deliver advanced threat detection, behavioral analysis, and automated response capabilities.',
    items: [
      ['Bitdefender', 'GravityZone endpoint protection, EDR, and XDR solutions'],
      ['Kaspersky', 'Endpoint security, threat intelligence, and managed detection'],
    ],
  },
  {
    id: 'ssl-compliance',
    num: 'III',
    title: 'SSL & Compliance Partners',
    copy: 'SSL certificates and compliance tools are essential for securing web transactions, protecting customer data, and meeting regulatory requirements. We partner with the world’s most trusted certificate authorities and compliance solution providers.',
    items: [
      ['DigiCert', 'Enterprise SSL/TLS certificates, code signing, PKI solutions'],
      ['Sectigo', 'SSL certificates, website security, and certificate management'],
      ['GeoTrust', 'Trusted SSL certificates for businesses of all sizes'],
      ['SSL.com', 'Affordable SSL certificates with strong browser compatibility'],
      ['Thawte', 'SSL certificates and web server security'],
      ['GoDaddy', 'SSL certificates, domain services, and web security tools'],
    ],
  },
  {
    id: 'infrastructure-cloud',
    num: 'IV',
    title: 'Infrastructure & Cloud Partners',
    copy: 'Our infrastructure partnerships with the world’s leading hardware and cloud vendors enable us to design, deploy, and manage enterprise-grade environments that deliver maximum performance, reliability, and value.',
    items: [
      ['Dell Technologies', 'PowerEdge servers, PowerVault storage, networking'],
      ['HP / HPE', 'ProLiant servers, Aruba networking, storage solutions'],
      ['Lenovo', 'ThinkSystem servers, HCI, workstations'],
      ['Cisco', 'Switches, routers, wireless, collaboration tools'],
      ['D-Link', 'SMB networking, switches, wireless access points'],
      ['Amazon Web Services (AWS)', 'Cloud compute, storage, database, AI/ML services'],
      ['Microsoft', 'Azure cloud, Microsoft 365, Windows Server, SQL Server'],
      ['Huawei', 'Networking, enterprise storage, cloud infrastructure'],
    ],
  },
  {
    id: 'collaboration-management',
    num: 'V',
    title: 'Collaboration & Management Partners',
    copy: 'Modern businesses need tools that simplify management, automate processes, and enable seamless collaboration across distributed teams. Our partnerships in this space cover backup, hosting management, networking, communications, and surveillance.',
    items: [
      ['Veeam', 'Enterprise backup, replication, and disaster recovery'],
      ['cPanel', 'Web hosting control panel and server management'],
      ['Ubiquiti', 'Enterprise WiFi, switching, and network management (UniFi)'],
      ['Grandstream', 'IP phones, video conferencing, and PBX systems'],
      ['Hikvision', 'Video surveillance cameras, NVRs, and access control'],
    ],
  },
];

export const PARTNER_CASES = [
  {
    who: 'Mid-Size NJ Law Firm',
    stack: ['Fortinet FortiGate firewall', 'Dell PowerEdge servers', 'Veeam backup'],
    result: 'Secure, compliant infrastructure with 99.9% uptime and automated disaster recovery.',
  },
  {
    who: 'E-Commerce Startup',
    stack: ['AWS cloud hosting', 'Sophos endpoint protection', 'Ubiquiti UniFi networking'],
    result: 'Scalable, secure infrastructure that grew with the business from launch to 10x revenue.',
  },
  {
    who: 'Healthcare Provider',
    stack: ['Cisco switching', 'Fortinet security fabric', 'Microsoft 365'],
    result: 'HIPAA-compliant environment with unified security management and seamless collaboration.',
  },
];

export const VENDOR_PROGRAMS = [
  { n: '01', name: 'Fortinet', copy: 'Authorized partner with certified FortiGate engineers for network security deployments.' },
  { n: '02', name: 'Sophos', copy: 'Certified partner for Sophos XGS firewalls and endpoint protection solutions.' },
  { n: '03', name: 'Dell Technologies', copy: 'Authorized partner for Dell PowerEdge servers, storage, and data center solutions.' },
  { n: '04', name: 'Cisco', copy: 'Certified partner for Cisco networking, switching, and collaboration solutions.' },
  { n: '05', name: 'Microsoft Partner Network', copy: 'Partner for Microsoft Azure cloud services, Microsoft 365, and Windows Server solutions.' },
  { n: '06', name: 'AWS Partner Network', copy: 'Cloud partner for AWS infrastructure, migration, and managed services.' },
];

export const FRAMEWORKS = [
  { name: 'HIPAA', copy: 'Healthcare data protection and privacy requirements' },
  { name: 'PCI-DSS', copy: 'Payment card industry data security standards' },
  { name: 'SOC 2', copy: 'Service organization controls for security, availability, and confidentiality' },
  { name: 'GDPR', copy: 'European Union general data protection regulation' },
  { name: 'CMMC', copy: 'Cybersecurity Maturity Model Certification for defense contractors' },
];
