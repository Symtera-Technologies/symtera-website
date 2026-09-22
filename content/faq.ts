// Verbatim from the FAQ page on symteratech.com, captured September 2026.
// 24 questions across 8 categories.

export interface FaqCategory {
  /** Anchor id, used for the in-page contents list. */
  id: string;
  title: string;
  items: [question: string, answer: string][];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'general-questions',
    title: 'General Questions',
    items: [
      ['What does Symtera Technologies do?',
        'Symtera Technologies is a full-service IT solutions company specializing in AI and intelligent automation, cloud services, cybersecurity, custom software development, web and mobile applications, e-commerce solutions, digital marketing, and IT infrastructure management. We serve businesses across the United States and internationally from our offices in Oakhurst, New Jersey (USA) and Lahore, Pakistan.'],
      ['Where are your offices located?',
        'US headquarters: 1806 State Route 35, Suite 304, Oakhurst, NJ 07755, USA. Pakistan office: 263 H1, Johar Town, Lahore, Punjab, Pakistan. Phone (US): +1 (646) 505-7083. Email: info@symteratech.com'],
      ['What industries do you serve?',
        'We work with clients across multiple industries including healthcare, retail and e-commerce, financial services, education, manufacturing, logistics, government, and professional services. Our solutions are customized to meet the specific compliance requirements and operational needs of each sector.'],
      ['Is Symtera Technologies certified?',
        'Yes. We hold ISO 9001:2015 (Quality Management Systems) and ISO/IEC 27001:2013 (Information Security Management) certifications, demonstrating our commitment to quality processes and data security. Learn more on our Certifications page.'],
      ['How do I request a proposal or consultation?',
        'Visit our Request a Solution page and fill out the form with your project details. We typically respond within 24 business hours with an initial consultation — at no cost and no obligation.'],
    ],
  },
  {
    id: 'ai-intelligent-automation',
    title: 'AI & Intelligent Automation',
    items: [
      ['What AI services does Symtera offer?',
        'We offer eight core AI service areas: AI Process Automation, AI Chatbots & Virtual Assistants, AI Agents for Business, Document Intelligence, Knowledge & RAG Systems, Workflow & System Integration, Data Analytics & Predictive AI, and Custom AI Application Development.'],
      ['Can you integrate AI into our existing systems?',
        'Absolutely. Our Workflow & System Integration service specializes in connecting AI capabilities with your existing CRMs, ERPs, databases, and business applications. We work with REST APIs, middleware, and enterprise integration platforms to ensure seamless connectivity without disrupting your current operations.'],
      ['How long does it take to implement an AI solution?',
        'Timelines vary based on complexity. A focused AI chatbot or document processing solution can be deployed in 4–8 weeks. Larger enterprise AI implementations involving custom models, multi-system integration, and training typically take 3–6 months. We provide detailed timelines during the proposal phase.'],
      ['Do you use third-party AI platforms or build custom solutions?',
        'Both. We leverage established platforms like AWS AI/ML services, Azure Cognitive Services, and OpenAI for rapid deployment where appropriate. For unique business requirements, we build custom AI models and applications tailored to your specific data and workflows. Our approach is always guided by what delivers the best ROI for your use case.'],
    ],
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    items: [
      ['Which cloud platforms do you work with?',
        'We are experienced across all three major cloud platforms: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We also design and manage hybrid cloud and multi-cloud architectures. Visit our Cloud Services page for more details.'],
      ['Can you help us migrate from on-premises to the cloud?',
        'Yes — cloud migration is one of our core competencies. We handle the full lifecycle: assessment and planning, architecture design, data migration, application re-platforming, testing, and post-migration optimization. We’ve helped businesses migrate everything from simple websites to complex multi-server enterprise environments.'],
      ['Do you offer managed cloud hosting?',
        'Yes. We offer Cloud Enterprise Server hosting, Linux hosting, Windows hosting, and Enterprise Email solutions — all with 24/7 monitoring, automated backups, and technical support.'],
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    items: [
      ['What cybersecurity services do you provide?',
        'We offer comprehensive cybersecurity solutions including firewall deployment and management (Fortinet, Sophos, SonicWall), endpoint protection (Bitdefender, Kaspersky), network security assessments, vulnerability scanning, managed detection and response (MDR), and security compliance consulting (HIPAA, PCI-DSS, SOC 2). See our Network Security Partners for the technologies we deploy.'],
      ['Can you help with compliance requirements?',
        'Yes. We help businesses achieve and maintain compliance with major frameworks including HIPAA (healthcare), PCI-DSS (payment processing), SOC 2, ISO 27001, and GDPR. This includes gap assessments, policy development, technical controls implementation, and audit preparation.'],
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    items: [
      ['What types of software do you develop?',
        'We build custom web applications, mobile apps (iOS and Android), desktop software, e-commerce platforms, patient management systems, job management systems, asset management systems, and enterprise portals. We work with technologies including .NET, PHP, Python, React, Angular, and Node.js. See our Software Development and Solutions pages.'],
      ['Do you offer ongoing maintenance and support?',
        'Yes. We provide managed IT service plans starting at $129.99/month that include help desk support, system monitoring, patching, backups, and proactive maintenance. Custom support arrangements are also available for specific applications.'],
    ],
  },
  {
    id: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    items: [
      ['What digital marketing services do you offer?',
        'We provide Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, and Social Media Marketing. Our approach combines technical optimization, content strategy, and data-driven campaign management to drive measurable results.'],
      ['How long does it take to see SEO results?',
        'SEO is a long-term investment. Most businesses start seeing measurable improvements in organic traffic within 3–6 months, with significant results building over 6–12 months. We provide monthly reporting so you can track progress from day one. Our SEO plans are structured for sustainable, compounding growth.'],
    ],
  },
  {
    id: 'hosting-email',
    title: 'Hosting & Email',
    items: [
      ['What hosting plans do you offer?',
        'We offer Linux Hosting (starting at $4.99/month), Windows Hosting with Plesk, Shared Hosting with Enterprise Email, and Cloud Enterprise Server plans. All plans include free SSL certificates, daily backups, and 24/7 technical support.'],
      ['Do you offer enterprise email solutions?',
        'Yes. Our Enterprise Email Solutions start at $1.99/month per mailbox and include professional business email, webmail access, spam filtering, and mobile sync. We also offer Microsoft 365 and Google Workspace deployment and migration services.'],
    ],
  },
  {
    id: 'working-with-symtera',
    title: 'Working with Symtera',
    items: [
      ['What is your typical project process?',
        'Our process follows five stages: 1) Assess — We analyze your current systems, challenges, and goals. 2) Design — We architect a solution tailored to your needs. 3) Build — We develop, configure, and test the solution. 4) Deploy — We implement with minimal disruption. 5) Optimize — We monitor, refine, and provide ongoing support.'],
      ['Do you work with small businesses or only enterprises?',
        'We serve businesses of all sizes — from startups and SMBs to mid-market companies and enterprise clients. Our solutions are scalable and our pricing is structured to accommodate different budgets. Many of our hosting and digital marketing services are specifically designed for small businesses.'],
      ['Can you work with our existing IT team?',
        'Absolutely. We frequently collaborate with in-house IT teams, either augmenting their capabilities for specific projects or providing specialized expertise they don’t have internally. We’re flexible — we can lead, co-manage, or advise depending on what works best for your organization.'],
      ['What are your payment terms?',
        'Payment terms vary by service type. Managed services and hosting are billed monthly. Project work typically follows a milestone-based payment schedule (e.g., 30% upfront, 40% at midpoint, 30% on delivery). We’re flexible and happy to discuss arrangements that work for both parties.'],
    ],
  },
];

/** Flat list, used for the FAQPage structured data. */
export const FAQ_ALL: [question: string, answer: string][] = FAQ_CATEGORIES.flatMap((c) => c.items);
