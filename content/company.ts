// Company facts, offices and site-wide copy. Verbatim from the design handoff.

export const COMPANY = {
  name: 'Symtera Technologies',
  legalName: 'Symtera Technologies LLC',
  founded: 2019,
  email: 'sales@symteratech.com',
  tagline: 'Expanding Possibilities',
  copyright: 'Copyright © 2026 Symtera Technologies LLC. All rights reserved.',
  blurb: 'Part of a multinational group of companies headquartered in the USA with a global footprint.',
  mission: 'Continuously improve technology for betterment in the quality of life.',
  vision: 'Local resources building a platform that supports advancement between technology and life.',
  missionFull:
    'It is our fundamental belief that we can continuously improve technology across all disciplines for betterment in the quality of life. Through building solutions with emerging technologies, and providing unparalleled support, it is our aim to deliver unique solutions tailored to individuals as well as enterprises. Mergers across technology platforms will ultimately help us to provide personalized solutions within healthcare, finance, education, infrastructure building, and travel.',
  visionFull:
    'Using local resources to build a platform and infrastructure to support advancements within technology and between technology and life.',
  historyFull:
    'Symtera Technologies Private Limited was founded in the year 2019 as an Information Technologies Company with the aim of a state-of-the-art software house based on modern and emerging technologies like Open-source, AI, ML, Blockchain, IoT, BI and authorized supplier of networking products, solutions, and services. Symtera Technologies Private Limited evolved through trusted advisory board members and technology strategic partners who help us to provide IT solutions for large and small business organizations that cover the whole Information communication technology spectrum.',
  valuesFull:
    'Our uniqueness lies within our team, its expertise, and its collective experience. Our core competencies within hardware and software solutions enable us to offer comprehensive deliverables in a timely and cost-effective manner. We value the needs of our clients and commit to fulfilling the requirements based on expectations, Commitment, Excellence, Partnership, Teamwork, Integrity, Communication, and Diversity.',
  aboutIntro:
    'Symtera Technologies Private Limited is an IT solution company and part of a multi-national group of companies with headquarters in the USA and a global footprint. We specialize in business IT solutions including ICT, AI, BI, data centers, web apps, mobile apps, eCommerce suite, SMS notifications services, digital identifications services, SEO SEM, hosting services cloud service, IT infrastructure, and customized solutions. Given our history and leadership, we are now established and expanding in Pakistan. Our team of international advisers, consultants, engineers and developers in Pakistan brings decades of experience. We aim to provide unsurpassed customer support while developing standard and customized solutions to meet your needs.',
};

export const OFFICES = [
  {
    region: 'Pakistan',
    lines: ['263 H1 Johar Town', 'Lahore, PK'],
    phone: '+92 3 111 119 120',
    tel: '+923111119120',
  },
  {
    region: 'United States',
    lines: ['1806 State Route 35, Suite 304', 'Oakhurst, NJ 07755, USA'],
    phone: '+1 (646) 505-7083',
    tel: '+16465057083',
  },
];

export const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/symteratech' },
  { name: 'Facebook', href: 'https://facebook.com/symteraTECH' },
  { name: 'X (Twitter)', href: 'https://twitter.com/SymteraTech' },
  { name: 'Instagram', href: 'https://www.instagram.com/symteratech/' },
];

export const VALUES = [
  'Commitment',
  'Excellence',
  'Partnership',
  'Teamwork',
  'Integrity',
  'Communication',
  'Diversity',
];

export const PROCESS = [
  { n: '01', title: 'Consultation', copy: 'We begin by understanding your unique challenges and goals.' },
  { n: '02', title: 'Strategy development', copy: 'Our experts craft a bespoke strategy aligned with your objectives.' },
  { n: '03', title: 'Implementation', copy: 'We integrate solutions into your existing systems with minimal disruption.' },
  { n: '04', title: 'Optimisation', copy: 'Continuous monitoring and iterative improvements guarantee sustained performance.' },
  { n: '05', title: 'Ongoing support', copy: 'Our dedicated team remains available to ensure your success long after deployment.' },
];

export const TESTIMONIAL = {
  quote:
    'I just wanted to say that I really enjoyed my time on Clayhandi.com and it’s all thanks to the hard work put in at Symtera Technologies. Keep it up!',
  author: 'Dan Connolly',
};

export interface Leader {
  id: string;
  name: string;
  role: string;
  location: string;
  linkedin: string | null;
  bio: string[];
}

export const LEADERSHIP: Leader[] = [
  {
    id: 'leader-cheema',
    name: 'Hadier S. Cheema',
    role: 'Co-Founder &amp; Chief Executive Officer',
    location: 'Oakhurst, NJ',
    linkedin: null,
    bio: [
      '<strong style="font-weight:600">Hadier S. Cheema</strong> serves as the Chief Executive Officer and Co-Founder of Symtera Technologies, where he sets the strategic direction and oversees the company’s operations, client relationships, and growth initiatives. With a strong background in business development and technology leadership, Hadier has been instrumental in building Symtera into a trusted IT solutions provider serving clients across the United States and internationally.',
      'Before co-founding Symtera, Hadier developed extensive experience in enterprise IT sales, solution architecture, and business operations across the technology sector. His deep understanding of both the technical and business sides of IT services enables him to bridge the gap between complex technology solutions and real-world business outcomes for Symtera’s clients.',
      'As CEO, Hadier is responsible for cultivating Symtera’s technology partnerships with industry leaders including Fortinet, Sophos, Dell, Cisco, Microsoft, and AWS. He has been particularly focused on expanding the company’s cybersecurity and cloud computing practices, which have become Symtera’s fastest-growing service lines. His vision for the company centers on delivering honest, vendor-neutral technology recommendations that prioritize client success over short-term revenue.',
      'Hadier holds a strong commitment to quality and compliance, having championed Symtera’s dual ISO certification (ISO 9001:2015 and ISO/IEC 27001:2013), which few IT companies of Symtera’s size achieve. He is based at Symtera’s US headquarters in Oakhurst, New Jersey.',
    ],
  },
  {
    id: 'leader-talib',
    name: 'Ch. Kashif Talib',
    role: 'Co-Founder &amp; President',
    location: 'USA · Pakistan',
    linkedin: 'https://www.linkedin.com/in/chkashif/',
    bio: [
      '<strong style="font-weight:600">Ch. Kashif Talib</strong> is the President and Co-Founder of Symtera Technologies, where he leads business development, strategic partnerships, and client engagement. With extensive experience in the IT services industry, Kashif has been the driving force behind many of Symtera’s key technology partnerships and major client acquisitions.',
      'Kashif brings a unique combination of technical knowledge and business acumen to his role. His career spans IT infrastructure consulting, managed services, and technology sales, giving him a comprehensive understanding of how technology investments translate to business value. This dual perspective allows him to work with clients at the strategic level — understanding their business goals first, then designing technology solutions that align with those objectives.',
      'As President, Kashif oversees Symtera’s partnership ecosystem, which includes more than 20 technology vendor relationships across cybersecurity, networking, cloud computing, and infrastructure. He has established and maintained authorized partner status with Fortinet, Sophos, SonicWall, Dell, HP, Lenovo, Cisco, and numerous other industry leaders. These partnerships give Symtera’s clients access to competitive pricing, vendor-direct support escalation, and early access to new technologies.',
      'Kashif is also deeply involved in Symtera’s digital marketing and web development practice, bringing firsthand expertise to clients looking to establish or enhance their online presence. He regularly contributes thought leadership content on cloud computing, business strategy, and technology trends. Kashif divides his time between Symtera’s US and Pakistan offices, ensuring seamless coordination across the company’s dual-continent operations.',
    ],
  },
  {
    id: 'leader-iqbal',
    name: 'Zafar Iqbal',
    role: 'Co-Founder &amp; Chief Technology Officer',
    location: 'Lahore, PK',
    linkedin: 'https://www.linkedin.com/in/ziqbal452/',
    bio: [
      '<strong style="font-weight:600">Zafar Iqbal</strong> serves as the Chief Technology Officer and Co-Founder of Symtera Technologies, where he leads the company’s engineering teams, technical architecture, and innovation initiatives. As the technical backbone of the organization, Zafar is responsible for ensuring every solution Symtera delivers meets the highest standards of performance, security, and reliability.',
      'Zafar brings deep hands-on expertise across the full technology stack, from network infrastructure and cybersecurity to cloud architecture and software development. His technical certifications span multiple vendor ecosystems, and he maintains current expertise in Fortinet, Sophos, Dell, and cloud platforms. This breadth of knowledge allows him to architect complex multi-vendor solutions that integrate seamlessly and deliver measurable performance improvements.',
      'As CTO, Zafar oversees all technical delivery at Symtera, including cybersecurity assessments, firewall deployments, cloud migrations, data center builds, custom software development, and AI/ML projects. He has personally led some of Symtera’s most complex engagements, including multi-site network security overhauls, large-scale cloud migrations, and enterprise application development projects. His approach combines rigorous engineering methodology with a practical focus on business outcomes.',
      'Zafar is also the architect behind Symtera’s internal tooling and processes, having designed the workflows and quality controls that earned the company its ISO/IEC 27001:2013 information security certification. He is passionate about mentoring the next generation of IT professionals and has established internship programs in partnership with Pakistani universities. Zafar is based at Symtera’s development center in Lahore, Pakistan, where he leads a growing team of engineers and technical specialists.',
    ],
  },
];
