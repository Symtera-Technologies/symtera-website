# JSON-LD Structured Data: Implementation Guide

**Date:** September 30, 2026 **Site:** symteratech.com **Existing schemas:** Organization + WebSite (already on all pages) **New schemas in this document:** FAQPage, BreadcrumbList, Service (×14), ProfessionalService

---

## How to Add These Schemas

Each schema below should be added as a `<script type="application/ld+json">` tag in the `<head>` of the relevant page. You can either:

1. **Add to the existing **`@graph`** array** — append these schemas to the existing `@graph` that already contains Organization and WebSite
2. **Add as separate **`<script>`** tags** — simpler to maintain, Google handles multiple JSON-LD blocks per page

Option 2 is recommended for easier maintenance.

---

## 1. FAQPage Schema — `/faq`

**Impact:** Enables FAQ rich snippets in Google search results (expandable Q&A directly in SERPs)

Add this to the `/faq` page:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Symtera Technologies do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Symtera Technologies is a full-service IT solutions company specializing in AI and intelligent automation, cloud services, cybersecurity, custom software development, web and mobile applications, e-commerce solutions, digital marketing, and IT infrastructure management. We serve businesses across the United States and internationally from our offices in Oakhurst, New Jersey (USA) and Lahore, Pakistan."
      }
    },
    {
      "@type": "Question",
      "name": "Where are your offices located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "US headquarters: 1806 State Route 35, Suite 304, Oakhurst, NJ 07755, USA. Pakistan office: 263 H1, Johar Town, Lahore, Punjab, Pakistan. Phone (US): +1 (646) 505-7083. Email: info@symteratech.com"
      }
    },
    {
      "@type": "Question",
      "name": "What industries do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with clients across multiple industries including healthcare, retail and e-commerce, financial services, education, manufacturing, logistics, government, and professional services. Our solutions are customized to meet the specific compliance requirements and operational needs of each sector."
      }
    },
    {
      "@type": "Question",
      "name": "Is Symtera Technologies certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We hold ISO 9001:2015 (Quality Management Systems) and ISO/IEC 27001:2013 (Information Security Management) certifications, demonstrating our commitment to quality processes and data security."
      }
    },
    {
      "@type": "Question",
      "name": "How do I request a proposal or consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit our Request a Solution page and fill out the form with your project details. We typically respond within 24 business hours with an initial consultation \u2014 at no cost and no obligation."
      }
    },
    {
      "@type": "Question",
      "name": "What AI services does Symtera offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer eight core AI service areas: AI Process Automation, AI Chatbots & Virtual Assistants, AI Agents for Business, Document Intelligence, Knowledge & RAG Systems, Workflow & System Integration, Data Analytics & Predictive AI, and Custom AI Application Development."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate AI into our existing systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Workflow & System Integration service specializes in connecting AI capabilities with your existing CRMs, ERPs, databases, and business applications. We work with REST APIs, middleware, and enterprise integration platforms to ensure seamless connectivity without disrupting your current operations."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to implement an AI solution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary based on complexity. A focused AI chatbot or document processing solution can be deployed in 4\u20138 weeks. Larger enterprise AI implementations involving custom models, multi-system integration, and training typically take 3\u20136 months. We provide detailed timelines during the proposal phase."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use third-party AI platforms or build custom solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. We leverage established platforms like AWS AI/ML services, Azure Cognitive Services, and OpenAI for rapid deployment where appropriate. For unique business requirements, we build custom AI models and applications tailored to your specific data and workflows."
      }
    },
    {
      "@type": "Question",
      "name": "Which cloud platforms do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are experienced across all three major cloud platforms: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We also design and manage hybrid cloud and multi-cloud architectures."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us migrate from on-premises to the cloud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes \u2014 cloud migration is one of our core competencies. We handle the full lifecycle: assessment and planning, architecture design, data migration, application re-platforming, testing, and post-migration optimization."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer managed cloud hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer Cloud Enterprise Server hosting, Linux hosting, Windows hosting, and Enterprise Email solutions \u2014 all with 24/7 monitoring, automated backups, and technical support."
      }
    },
    {
      "@type": "Question",
      "name": "What cybersecurity services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive cybersecurity solutions including firewall deployment and management (Fortinet, Sophos, SonicWall), endpoint protection (Bitdefender, Kaspersky), network security assessments, vulnerability scanning, managed detection and response (MDR), and security compliance consulting (HIPAA, PCI-DSS, SOC 2)."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with compliance requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help businesses achieve and maintain compliance with major frameworks including HIPAA (healthcare), PCI-DSS (payment processing), SOC 2, ISO 27001, and GDPR. This includes gap assessments, policy development, technical controls implementation, and audit preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What types of software do you develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build custom web applications, mobile apps (iOS and Android), desktop software, e-commerce platforms, patient management systems, job management systems, asset management systems, and enterprise portals. We work with technologies including .NET, PHP, Python, React, Angular, and Node.js."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing maintenance and support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide managed IT service plans starting at $129.99/month that include help desk support, system monitoring, patching, backups, and proactive maintenance. Custom support arrangements are also available for specific applications."
      }
    },
    {
      "@type": "Question",
      "name": "What digital marketing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, and Social Media Marketing. Our approach combines technical optimization, content strategy, and data-driven campaign management to drive measurable results."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see SEO results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO is a long-term investment. Most businesses start seeing measurable improvements in organic traffic within 3\u20136 months, with significant results building over 6\u201312 months. We provide monthly reporting so you can track progress from day one."
      }
    },
    {
      "@type": "Question",
      "name": "What hosting plans do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Linux Hosting (starting at $4.99/month), Windows Hosting with Plesk, Shared Hosting with Enterprise Email, and Cloud Enterprise Server plans. All plans include free SSL certificates, daily backups, and 24/7 technical support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer enterprise email solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Enterprise Email Solutions start at $1.99/month per mailbox and include professional business email, webmail access, spam filtering, and mobile sync. We also offer Microsoft 365 and Google Workspace deployment and migration services."
      }
    },
    {
      "@type": "Question",
      "name": "What is your typical project process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our process follows five stages: 1) Assess \u2014 We analyze your current systems, challenges, and goals. 2) Design \u2014 We architect a solution tailored to your needs. 3) Build \u2014 We develop, configure, and test the solution. 4) Deploy \u2014 We implement with minimal disruption. 5) Optimize \u2014 We monitor, refine, and provide ongoing support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with small businesses or only enterprises?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve businesses of all sizes \u2014 from startups and SMBs to mid-market companies and enterprise clients. Our solutions are scalable and our pricing is structured to accommodate different budgets."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing IT team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We frequently collaborate with in-house IT teams, either augmenting their capabilities for specific projects or providing specialized expertise they don't have internally."
      }
    },
    {
      "@type": "Question",
      "name": "What are your payment terms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Payment terms vary by service type. Managed services and hosting are billed monthly. Project work typically follows a milestone-based payment schedule (e.g., 30% upfront, 40% at midpoint, 30% on delivery). We're flexible and happy to discuss arrangements that work for both parties."
      }
    }
  ]
}

```

> **24 questions** across 8 categories. Google may display 2–4 of these as rich snippets.

---

## 2. ProfessionalService Schema — `/contact`

**Impact:** Enables knowledge panel and local business features in search results

Add this to the `/contact` page:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://symteratech.com/#localbusiness",
  "name": "Symtera Technologies",
  "legalName": "Symtera Technologies LLC",
  "url": "https://symteratech.com",
  "logo": "https://symteratech.com/symtera-logo.png",
  "image": "https://symteratech.com/og",
  "description": "Full-service IT solutions company specializing in AI, cloud services, cybersecurity, custom software development, and digital marketing.",
  "telephone": "+1-646-505-7083",
  "email": "sales@symteratech.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "1806 State Route 35, Suite 304",
      "addressLocality": "Oakhurst",
      "addressRegion": "NJ",
      "postalCode": "07755",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "263 H1, Johar Town",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.2598,
    "longitude": -74.0226
  },
  "sameAs": [
    "https://www.linkedin.com/company/symteratech",
    "https://facebook.com/symteraTECH",
    "https://twitter.com/SymteraTech",
    "https://www.instagram.com/symteratech/"
  ],
  "priceRange": "$$",
  "foundingDate": "2019",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & Intelligent Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cybersecurity"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing & SEO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IT Infrastructure"
        }
      }
    ]
  }
}

```

---

## 3. Service Schemas — AI & Service Sub-Pages

**Impact:** Helps Google understand each service offering; may improve rich results for service-related queries

**14 pages** need a Service schema. Each page gets its own:

### `/ai/process-automation`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Process Automation",
  "description": "Automate routine processes and eliminate data silos so teams spend time on judgement, not re-keying. We design intelligent automation that connects your existing systems.",
  "url": "https://symteratech.com/ai/process-automation",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/ai-chatbots`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Chatbots & Virtual Assistants",
  "description": "24/7 support with personalised interactions, embedded in your website, app or CRM, scaling as demand grows. Intelligent chatbots that understand context and deliver accurate responses.",
  "url": "https://symteratech.com/ai/ai-chatbots",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/ai-agents`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Agents for Business",
  "description": "Systems that reason, retrieve and act across your tools to complete multi-step work. Autonomous AI agents that handle complex workflows end-to-end.",
  "url": "https://symteratech.com/ai/ai-agents",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/document-intelligence`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Document Intelligence",
  "description": "Read, classify and extract from documents; automate analysis and report generation. AI-powered document processing that turns unstructured data into actionable insights.",
  "url": "https://symteratech.com/ai/document-intelligence",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/knowledge-rag`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Knowledge & RAG Systems",
  "description": "Retrieval-augmented answers grounded in your own knowledge base, so outputs are accurate and traceable. Enterprise RAG systems that deliver verified, source-cited responses.",
  "url": "https://symteratech.com/ai/knowledge-rag",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/integration`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Workflow & System Integration",
  "description": "CRM and ERP integrations with OTT services for real-time analytics and unified data streams. Connect AI capabilities with your existing business systems.",
  "url": "https://symteratech.com/ai/integration",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/predictive-ai`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Predictive AI & Data Analytics",
  "description": "Predictive analytics on your operational data to forecast demand, risk and behaviour. Turn historical data into forward-looking business intelligence.",
  "url": "https://symteratech.com/ai/predictive-ai",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/ai/custom-ai`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom AI Application Development",
  "description": "Bespoke AI applications when an off-the-shelf model does not fit the problem. End-to-end custom AI development tailored to your specific business requirements.",
  "url": "https://symteratech.com/ai/custom-ai",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/services/software-development`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development",
  "description": "Web applications, mobile apps, desktop software, and enterprise portals built with .NET, PHP, Python, React, Angular, and Node.js.",
  "url": "https://symteratech.com/services/software-development",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/services/e-commerce-development`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Development",
  "description": "WordPress, Shopify, and WooCommerce stores with custom functionality, payment integration, and scalable architecture.",
  "url": "https://symteratech.com/services/e-commerce-development",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/services/seo`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO & Search Engine Marketing",
  "description": "Search Engine Optimization, Pay-Per-Click advertising, and data-driven digital marketing for measurable organic growth.",
  "url": "https://symteratech.com/services/seo",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/services/social-media`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing",
  "description": "Strategic social media management, content creation, and campaign management across major platforms.",
  "url": "https://symteratech.com/services/social-media",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/services/cloud-services`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud Services & Migration",
  "description": "AWS, Azure, and GCP cloud architecture, migration, and managed hosting with 24/7 monitoring and support.",
  "url": "https://symteratech.com/services/cloud-services",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

### `/services/it-infrastructure`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Infrastructure & IoT",
  "description": "End-to-end IT infrastructure design, data centres, IoT automation, and enterprise networking solutions.",
  "url": "https://symteratech.com/services/it-infrastructure",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    }
  ],
  "serviceType": "IT Services"
}

```

---

## 4. BreadcrumbList Schema — All Pages (Site-Wide)

**Impact:** Displays breadcrumb trails in search results instead of raw URLs; improves CTR and site structure signals

### Next.js Helper Function

Instead of hardcoding each breadcrumb, use a dynamic function in your layout component:

```tsx
// lib/breadcrumbs.ts
type BreadcrumbItem = { name: string; url: string };

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Usage in a page component:
// const breadcrumbs = generateBreadcrumbSchema([
//   { name: 'Home', url: 'https://symteratech.com' },
//   { name: 'AI Solutions', url: 'https://symteratech.com/ai' },
//   { name: 'Process Automation', url: 'https://symteratech.com/ai/process-automation' },
// ]);

```

### Breadcrumb Map (All 36 Pages)

| Page | Breadcrumb Trail |
| --- | --- |
| `/` | Home |
| `/about` | Home → About |
| `/about/affiliations` | Home → About → Affiliations |
| `/about/certifications` | Home → About → Certifications |
| `/about/leadership` | Home → About → Leadership |
| `/ai` | Home → AI Solutions |
| `/ai/ai-agents` | Home → AI Solutions → AI Agents |
| `/ai/ai-chatbots` | Home → AI Solutions → AI Chatbots |
| `/ai/custom-ai` | Home → AI Solutions → Custom AI |
| `/ai/document-intelligence` | Home → AI Solutions → Document Intelligence |
| `/ai/integration` | Home → AI Solutions → Integration |
| `/ai/knowledge-rag` | Home → AI Solutions → Knowledge & RAG |
| `/ai/predictive-ai` | Home → AI Solutions → Predictive AI |
| `/ai/process-automation` | Home → AI Solutions → Process Automation |
| `/clients` | Home → Clients |
| `/cloud/cloud-enterprise-server` | Home → Cloud → Cloud Enterprise Server |
| `/cloud/enterprise-email-solutions` | Home → Cloud → Enterprise Email |
| `/cloud/linux-hosting` | Home → Cloud → Linux Hosting |
| `/cloud/shared-hosting-plus` | Home → Cloud → Shared Hosting Plus |
| `/cloud/windows-hosting` | Home → Cloud → Windows Hosting |
| `/contact` | Home → Contact |
| `/faq` | Home → FAQ |
| `/partners` | Home → Partners |
| `/products` | Home → Products |
| `/products/assets-management-system` | Home → Products → Assets Management System |
| `/products/job-management-system` | Home → Products → Job Management System |
| `/products/patient-management-system` | Home → Products → Patient Management System |
| `/products/symscan` | Home → Products → SymScan |
| `/services` | Home → Services |
| `/services/cloud-services` | Home → Services → Cloud Services |
| `/services/e-commerce-development` | Home → Services → E-Commerce Development |
| `/services/it-infrastructure` | Home → Services → IT Infrastructure |
| `/services/seo` | Home → Services → SEO |
| `/services/social-media` | Home → Services → Social Media |
| `/services/software-development` | Home → Services → Software Development |
| `/solutions` | Home → Solutions |

### Example: Full BreadcrumbList for `/ai/process-automation`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://symteratech.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AI Solutions",
      "item": "https://symteratech.com/ai"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Process Automation",
      "item": "https://symteratech.com/ai/process-automation"
    }
  ]
}

```

---

## Implementation Checklist

| Schema | Page(s) | Priority | Rich Result Type |
| --- | --- | --- | --- |
| FAQPage | `/faq` | 🔴 High | FAQ rich snippets (expandable Q&As in SERPs) |
| BreadcrumbList | All 36 pages | 🔴 High | Breadcrumb trail in search results |
| ProfessionalService | `/contact` | 🟡 Medium | Knowledge panel, local business |
| Service (×8) | `/ai/*` sub-pages | 🟡 Medium | Service-related rich results |
| Service (×6) | `/services/*` sub-pages | 🟡 Medium | Service-related rich results |

### Validation

After adding each schema, validate it with:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### Testing Tips

1. Add FAQPage first — it has the highest impact and fastest validation cycle
2. Use Chrome DevTools → Elements → search for `ld+json` to verify schemas are in the DOM
3. After deploying, request re-indexing in Google Search Console for the updated pages

