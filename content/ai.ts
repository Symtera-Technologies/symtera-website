// Verbatim content from symteratech.com/ai-services/* — one record per AI sub-page.
// Ported from design_handoff_symtera/ai-pages.js — copy is verbatim; only types were added.
import type { AiPage } from './types';

export const AI_PAGES: AiPage[] = [
  {
    slug: 'process-automation', nav: 'Process Automation', visual: 'flow', icon: 'workflow',
    title: 'AI Process Automation for', accent: 'Smarter Business Operations',
    intro: ['Manual processes slow teams down, create inconsistencies and make it difficult to scale.',
      '<b>Symtera Technologies</b> designs <b>AI process automation solutions</b> that combine artificial intelligence, workflow automation, business rules, APIs and system integrations to help organizations reduce repetitive work and improve operational efficiency.',
      'We work with businesses to identify where AI can add value, redesign the workflow, connect existing systems and automate defined tasks while keeping people in control where human judgment or approval is required.'],
    cta: ['Discover What You Can Automate', 'Discuss Your Current Process'],
    sections: [
      { kind: 'text', title: 'What Is AI Process Automation?', body: ['AI process automation uses artificial intelligence together with workflow automation to handle tasks that require more than simple rule-based execution.', 'Traditional automation works well when every step follows a fixed rule. AI-powered automation can also help with tasks involving text, documents, classification, information retrieval, summarization, validation and contextual decision support.', 'Examples include:'], chips: ['Understanding incoming emails', 'Extracting information from documents', 'Classifying requests', 'Checking information against business systems', 'Generating responses', 'Routing work', 'Creating tasks', 'Updating CRM or ERP records', 'Escalating exceptions', 'Preparing reports'], after: 'AI process automation is most useful when a workflow contains repetitive manual steps, high information volume or frequent delays.' },
      { kind: 'cards', title: 'What Business Processes Can Be Automated with AI?', items: [
        ['Customer Service Automation', 'AI can classify customer requests, retrieve relevant knowledge, draft responses, create support tickets, update customer records and escalate complex cases to employees.', 'headset'],
        ['Sales Operations', 'AI can help capture leads, qualify enquiries, enrich records, create CRM activities, prepare follow-up communication and notify sales teams.', 'trend'],
        ['Email Processing', 'Incoming emails can be categorized, analyzed and routed automatically. AI can identify intent, extract important details, retrieve relevant information and prepare responses for review.', 'mail'],
        ['Document Workflows', 'Documents can be classified, analyzed, validated and routed into the appropriate business workflow.', 'doc'],
        ['HR Processes', 'AI assistants can help answer policy questions, route requests, organize employee documentation and support repetitive HR workflows.', 'users'],
        ['Finance & Administration', 'AI can support invoice processing, information extraction, approval routing, reconciliation preparation and operational reporting.', 'calc'],
        ['Management Reporting', 'Business data can be collected, summarized and converted into structured reports for review.', 'chart']] },
      { kind: 'steps', title: 'How Symtera Builds AI-Powered Workflows', steps: [
        ['Process Discovery', 'We map the current process, users, systems, decision points, delays and manual activities.'],
        ['Automation Assessment', 'We identify which steps can be automated and which should remain under human control.'],
        ['Workflow Design', 'We design the target workflow, AI components, integrations, controls and exception handling.'],
        ['Development & Integration', 'We develop the automation and connect it to approved business applications, APIs, databases and information sources.'],
        ['Testing & Deployment', 'We validate the process with real scenarios before deployment.'],
        ['Optimization', 'We improve the workflow based on operational performance and user feedback.']] },
      { kind: 'text', title: 'Human-in-the-Loop AI Automation', body: ['Not every business decision should be fully automated.', 'Symtera can design <b>human-in-the-loop workflows</b> where AI prepares, analyzes or recommends an action, while an authorized employee reviews or approves the final step.', 'This is particularly useful for financial approvals, exceptions, sensitive customer actions, compliance-sensitive processes, high-value transactions and decisions requiring business judgment.'] },
      { kind: 'text', title: 'Integrate AI with Your Existing Systems', body: ['AI automation can be designed around existing technology rather than requiring a complete system replacement.', 'Potential integration targets include CRM systems, ERP platforms, databases, email systems, internal portals, websites, mobile applications, document repositories, accounting systems and third-party APIs.'] },
      { kind: 'text', title: 'Benefits of AI Process Automation', body: ['A well-designed automation initiative can help organizations reduce repetitive manual work, shorten processing time, improve workflow consistency, reduce handoff delays, create better operational visibility, connect disconnected systems and scale processes more efficiently.'] },
      { kind: 'text', title: 'When Is a Process a Good Candidate for AI Automation?', body: ['A process may be suitable when it is repetitive, high-volume, document-heavy, email-heavy, dependent on information lookup, prone to delays, spread across multiple systems, manually routed or difficult to scale.'] }],
    faq: [['What is the difference between workflow automation and AI process automation?', 'Workflow automation follows predefined rules. AI process automation can add capabilities such as language understanding, document analysis, classification, extraction and contextual recommendations.'],
      ['Can AI process automation integrate with our ERP or CRM?', 'Yes. Where suitable APIs, databases or integration methods are available, AI workflows can be connected to existing systems.'],
      ['Can AI automate an entire business process?', 'Sometimes, but full automation is not always the best approach. Many workflows benefit from a combination of automated steps and human approval.'],
      ['Do we need to replace our existing software?', 'Not necessarily. AI can often be integrated with existing systems.'],
      ['How do we start?', 'Start with one repetitive or time-consuming process. Document how it works today, which systems are involved and where delays occur.']]
  },
  {
    slug: 'ai-chatbots', nav: 'AI Chatbots', visual: 'chat', icon: 'chat',
    title: 'AI Chatbots &amp; Virtual Assistants', accent: 'for Business',
    intro: ['Move beyond basic scripted chatbots.', '<b>Symtera Technologies</b> develops <b>AI chatbots and virtual assistants</b> that can understand natural language, retrieve information from approved knowledge sources and integrate with business systems.', 'Our conversational AI solutions can be designed for customer support, employee assistance, knowledge access, lead qualification, service guidance and internal operations.'],
    cta: ['Build an AI Assistant', 'Discuss Your Project'],
    sections: [
      { kind: 'text', title: 'What Can an AI Chatbot Do?', body: ['An AI chatbot can be designed to answer customer questions, retrieve company information, guide users through services, qualify enquiries, create support requests, access approved knowledge bases, collect structured information, assist employees, provide product or service guidance and escalate conversations to human teams.'] },
      { kind: 'cards', title: 'Where AI Assistants Work', items: [
        ['Customer-Facing AI Chatbots', 'Customer-facing assistants can provide faster access to information while reducing repetitive support workload. Potential use cases include customer service, website assistance, sales enquiries, product guidance, appointment or request intake, service information, onboarding support and FAQ automation.', 'headset'],
        ['Internal AI Assistants', 'Organizations can also deploy AI assistants for employees. Examples include HR policy assistants, IT helpdesk assistants, operations knowledge assistants, sales enablement assistants, research assistants and internal documentation assistants. Instead of searching across files and portals, employees can ask questions in natural language and retrieve relevant information from approved sources.', 'users'],
        ['AI Chatbots Connected to Company Knowledge', 'A chatbot becomes more useful when it understands the organization’s information. Symtera can build assistants connected to policies, manuals, reports, product documentation, knowledge bases, internal FAQs, approved databases and business applications. Retrieval-Augmented Generation (RAG) can be used where appropriate to ground answers in approved information sources.', 'book']] },
      { kind: 'text', title: 'AI Chatbot Integration', body: ['Chatbots can be integrated with websites, customer portals, mobile applications, CRM systems, ticketing systems, databases, APIs and internal applications.'] },
      { kind: 'text', title: 'AI Chatbot vs AI Agent', body: ['An AI chatbot primarily interacts through conversation. An AI agent may go further by using approved tools and systems to complete defined tasks such as creating records, retrieving data, updating workflows or initiating actions.', 'Some business solutions combine both approaches: a conversational interface for the user and controlled agent functionality behind it.'] },
      { kind: 'text', title: 'Building Reliable Business Chatbots', body: ['Business chatbots should be designed around approved information sources, user permissions, fallback behavior, human escalation, conversation logging where appropriate, privacy requirements, access control, system integration and testing against realistic questions.'] }],
    faq: [['Can you build a chatbot using our company documents?', 'Yes. A private knowledge assistant can retrieve information from approved company content and generate grounded answers.'], ['Can a chatbot connect to our CRM?', 'Yes, depending on the available API or integration method.'], ['Can we use the chatbot internally?', 'Yes. Internal assistants are useful for HR, operations, IT support, research and knowledge management.'], ['Is an AI chatbot the same as ChatGPT?', 'No. A business chatbot can use large language models, but it is designed around specific company data, workflows, permissions and interfaces.'], ['Can a chatbot transfer a user to a human?', 'Yes. Human escalation can be built into the workflow where appropriate.']]
  },
  {
    slug: 'ai-agents', nav: 'AI Agents', visual: 'agent', icon: 'bot',
    title: 'AI Agents for', accent: 'Business Operations',
    intro: ['AI agents can do more than answer questions.', '<b>Symtera Technologies</b> develops <b>AI agents for business</b> that can understand instructions, retrieve information, use approved tools, interact with connected systems and complete defined workflow steps.', 'AI agents can support research, operations, customer service, sales, document handling, reporting and other knowledge-intensive business tasks.'],
    cta: ['Explore AI Agent Use Cases', 'Discuss Your Project'],
    sections: [
      { kind: 'text', title: 'What Is an AI Agent?', body: ['An AI agent is a software system that can use AI models together with tools, data sources and business logic to complete a defined task.', 'Depending on the design, an agent may receive an instruction, gather information, search approved sources, evaluate context, choose from allowed actions, call an API, update a system, prepare an output, request human approval and continue to the next workflow step.', 'The level of autonomy should be designed around the risk and business impact of the task.'] },
      { kind: 'cards', title: 'Types of AI Agents We Can Build', items: [
        ['Research Agents', 'Search approved information sources, organize findings, summarize information and prepare structured research outputs.', 'search'],
        ['Customer Support Agents', 'Retrieve customer information, answer questions, prepare responses, update tickets and escalate cases.', 'headset'],
        ['Sales Support Agents', 'Research accounts, organize lead information, prepare follow-up material and update approved CRM workflows.', 'trend'],
        ['Document Agents', 'Read, classify, extract and summarize information from documents.', 'doc'],
        ['Operations Agents', 'Assist with repetitive operational workflows, system updates, notifications and exception handling.', 'gear'],
        ['Reporting Agents', 'Collect information from approved sources, summarize results and prepare management reports.', 'chart'],
        ['Knowledge Agents', 'Help employees retrieve information from company documents, policies, reports and internal systems.', 'book']] },
      { kind: 'text', title: 'Agentic AI with Human Control', body: ['AI agents should not automatically receive unlimited access to business systems.', 'Symtera can design controlled agent workflows using role-based permissions, approved tools, restricted actions, validation rules, human approval, logging, exception handling and defined escalation paths.'] },
      { kind: 'text', title: 'AI Agents vs Traditional Automation', body: ['Traditional automation follows predetermined rules. AI agents can support workflows that require language understanding, information retrieval, context evaluation or dynamic task execution.', 'The strongest solutions often combine deterministic workflow rules, AI reasoning, APIs, data validation and human review.'] },
      { kind: 'text', title: 'AI Agents Connected to Enterprise Systems', body: ['Potential integrations include CRM, ERP, databases, document repositories, ticketing systems, web applications, internal APIs, knowledge bases and email systems.'] }],
    faq: [['What can an AI agent do for a business?', 'It can retrieve information, analyze context, use approved tools and perform defined workflow steps.'], ['Are AI agents fully autonomous?', 'They can be, but full autonomy is not appropriate for every task. Business deployments often use permissions and human approval.'], ['What is the difference between an AI agent and a chatbot?', 'A chatbot focuses on conversation. An agent can use tools and perform tasks beyond conversation.'], ['Can AI agents access our internal systems?', 'Yes, where approved integrations and permissions are available.'], ['Can one agent perform multiple tasks?', 'Yes, but the scope should be carefully designed and tested.']]
  },
  {
    slug: 'document-intelligence', nav: 'Document Intelligence', visual: 'docs', icon: 'doc',
    title: 'AI Document Intelligence &amp;', accent: 'Intelligent Document Processing',
    intro: ['Business information is often trapped inside PDFs, forms, reports, invoices, contracts and other documents.', '<b>Symtera Technologies</b> builds <b>AI document intelligence</b> solutions that help organizations extract, organize, validate, summarize and route information from documents into business workflows.'],
    cta: ['Automate Document Workflows', 'Contact Us'],
    sections: [
      { kind: 'text', title: 'What Is Document Intelligence?', body: ['Document intelligence uses AI and automation to convert unstructured or semi-structured documents into useful business information.', 'A document intelligence workflow may identify the document type, extract key fields, detect relevant sections, classify content, summarize information, compare values, validate information, send data to another system or route the document for review.'] },
      { kind: 'cards', title: 'Document Processing Use Cases', items: [
        ['Forms', 'Extract structured information and route it to the appropriate workflow.', 'form'],
        ['Invoices', 'Capture invoice details and prepare records for verification or approval.', 'calc'],
        ['Reports', 'Identify sections, summarize findings and extract structured information.', 'chart'],
        ['Contracts', 'Retrieve clauses or fields for review and comparison.', 'doc'],
        ['Policies & Manuals', 'Make content searchable through knowledge systems.', 'book'],
        ['Research Documents', 'Organize, extract and summarize information from large collections.', 'search'],
        ['Operational Records', 'Convert recurring documents into structured workflow inputs.', 'gear']] },
      { kind: 'pipeline', title: 'Document Extraction, Validation & Workflow Automation', body: ['Document AI becomes more valuable when it connects to business workflows.'], steps: ['Document received', 'Document classified', 'Data extracted', 'Fields validated', 'Exception checked', 'Business system updated', 'Reviewer notified'] },
      { kind: 'text', title: 'Human Review Where Needed', body: ['For critical workflows, document automation can include confidence thresholds, validation rules, exception queues, manual review, approval checkpoints and audit trails.'] },
      { kind: 'text', title: 'Integrating Document Intelligence', body: ['Document processing solutions can connect with ERP, CRM, document management systems, databases, cloud storage, internal applications, APIs and reporting platforms.'] }],
    faq: [['What types of documents can AI process?', 'Common examples include PDFs, forms, invoices, reports, policies, contracts and structured business documents.'], ['Can AI extract data from scanned documents?', 'Depending on image quality and format, OCR and AI extraction can be combined.'], ['Can extracted information be sent to our ERP?', 'Yes, if the ERP supports a suitable integration method.'], ['Can users verify extracted data?', 'Yes. Human review interfaces can be added.'], ['Can document intelligence summarize documents?', 'Yes. Summarization can be included where appropriate.']]
  },
  {
    slug: 'knowledge-rag', nav: 'Knowledge & RAG', visual: 'rag', icon: 'book',
    title: 'AI Knowledge Systems &amp;', accent: 'RAG Solutions',
    intro: ['Your organization already has valuable knowledge. The challenge is finding it when people need it.', '<b>Symtera Technologies</b> builds <b>AI knowledge systems and Retrieval-Augmented Generation (RAG) solutions</b> that allow authorized users to ask questions across company documents, reports, policies and approved information sources using natural language.'],
    cta: ['Build a Knowledge System', 'Contact Us'],
    sections: [
      { kind: 'text', title: 'What Is a RAG System?', body: ['Retrieval-Augmented Generation combines information retrieval with generative AI.', 'Instead of relying only on a model’s general knowledge, a RAG system searches approved information sources, retrieves relevant material and uses that context to generate a more grounded answer.', 'This approach is commonly used for internal knowledge assistants, document search, research platforms, policy assistants, technical support systems, report libraries and enterprise knowledge portals.'] },
      { kind: 'text', title: 'What Can an Enterprise Knowledge Assistant Do?', body: ['Users can ask questions such as:'], chips: ['What does our policy say about this issue?', 'Where is this requirement documented?', 'Compare these reports.', 'Summarize this topic across multiple files.', 'Show the relevant source.', 'Find information about a product, process or project.'], after: 'Capabilities may include semantic search, source-grounded answers, source references, document filtering, user permissions, conversation history, metadata search and structured output.' },
      { kind: 'text', title: 'Private Company Knowledge', body: ['A business knowledge system can be designed around approved sources rather than public internet data.', 'Potential sources include internal reports, policies, manuals, research documents, technical documentation, product data, approved databases and internal portals.', 'Access controls should reflect organizational permissions.'] },
      { kind: 'text', title: 'RAG vs Standard Chatbot', body: ['A standard chatbot may answer from general model knowledge. A RAG-based assistant retrieves relevant information from connected knowledge sources before producing an answer.', 'For organizational use, this can make answers more relevant to company-specific information and easier to verify.'] },
      { kind: 'pipeline', title: 'RAG System Architecture', body: ['Depending on requirements, a solution may include:'], steps: ['Document ingestion', 'Parsing', 'Chunking', 'Embeddings', 'Vector or hybrid search', 'Metadata filters', 'Retrieval', 'LLM generation', 'Citations', 'Access control', 'Monitoring'] }],
    faq: [['What is RAG?', 'RAG stands for Retrieval-Augmented Generation. It combines search/retrieval with generative AI.'], ['Can a RAG system use private company documents?', 'Yes. Private organizational data is a common use case.'], ['Can answers include sources?', 'Yes. Source references can be designed into the system.'], ['Can access be restricted by department?', 'Yes, depending on the data architecture and permission model.'], ['Is RAG the same as fine-tuning?', 'No. RAG retrieves external information at query time, while fine-tuning modifies model behavior using training data.']]
  },
  {
    slug: 'integration', nav: 'Integration', visual: 'hub', icon: 'plug',
    title: 'AI Workflow &amp; System', accent: 'Integration Services',
    intro: ['AI creates more business value when it works with the systems your teams already use.', '<b>Symtera Technologies</b> provides <b>AI integration services</b> that connect intelligent automation, AI agents, chatbots and document systems with CRM, ERP, databases, internal applications and third-party APIs.'],
    cta: ['Integrate AI with Your Systems', 'Contact Us'],
    sections: [
      { kind: 'text', title: 'Connect AI to Existing Business Applications', body: ['Potential integration targets include CRM systems, ERP platforms, databases, websites, web applications, mobile applications, email systems, document repositories, internal tools, cloud platforms and third-party APIs.'] },
      { kind: 'text', title: 'What Can AI Integration Enable?', chips: ['A chatbot retrieves customer information from CRM', 'An AI agent creates or updates a business record', 'A document system sends extracted data to ERP', 'A workflow triggers an approval', 'An AI assistant searches internal knowledge', 'A system event launches an automated process', 'A reporting service combines information across multiple applications'] },
      { kind: 'text', title: 'API-Led AI Integration', body: ['Where APIs are available, Symtera can use them to create controlled connections between AI applications and existing systems.', 'Integration design should consider authentication, permissions, data validation, rate limits, logging, error handling, security and fallback workflows.'] },
      { kind: 'text', title: 'AI Integration Without Replacing Core Systems', body: ['Organizations do not always need a new ERP or CRM to benefit from AI. A targeted integration layer can add AI functionality around existing technology while preserving established systems and processes.'] },
      { kind: 'text', title: 'Integration with Human Approval', body: ['For sensitive actions, workflows can require human approval before data is changed or an external action is completed.'] }],
    faq: [['Can AI integrate with our existing ERP?', 'Possibly, depending on the ERP’s APIs or supported integration methods.'], ['Can AI integrate with custom software?', 'Yes, where the application can expose appropriate interfaces or database access.'], ['What if our system has no API?', 'Alternative integration methods may be possible, but suitability should be assessed case by case.'], ['Can integrations be secured?', 'Yes. Authentication, authorization, validation and logging should be part of the architecture.'], ['Can AI trigger actions in another system?', 'Yes, where the integration and permissions allow it.']]
  },
  {
    slug: 'predictive-ai', nav: 'Predictive AI', visual: 'forecast', icon: 'trend',
    title: 'Predictive AI &amp;', accent: 'Intelligent Data Analytics',
    intro: ['Business data can reveal patterns that are difficult to identify manually.', '<b>Symtera Technologies</b> develops <b>predictive AI and data analytics solutions</b> that help organizations analyze information, detect trends, identify anomalies, forecast outcomes and support data-driven decisions.'],
    cta: ['Discuss Your Data Use Case', 'Contact Us'],
    sections: [
      { kind: 'text', title: 'What Is Predictive AI?', body: ['Predictive AI uses historical and current data to identify patterns and estimate possible future outcomes.', 'Potential applications include demand forecasting, trend analysis, anomaly detection, classification, risk indicators, operational forecasting, customer behavior analysis, predictive maintenance scenarios and resource planning.', 'Results should be interpreted within the context and quality of the underlying data.'] },
      { kind: 'text', title: 'AI-Powered Business Analytics', body: ['AI analytics can help teams combine information, identify patterns, summarize trends, detect unusual behavior, categorize records, create intelligent reports and support management decisions.'] },
      { kind: 'steps', title: 'Predictive Models Built Around Business Objectives', body: ['A useful predictive model begins with a clearly defined business question. Symtera’s process can include:'], steps: [['Define the decision or outcome', ''], ['Assess available data', ''], ['Clean and prepare the dataset', ''], ['Evaluate appropriate techniques', ''], ['Train and validate models', ''], ['Integrate outputs into business workflows', ''], ['Monitor ongoing performance', '']] },
      { kind: 'text', title: 'Data Quality Matters', body: ['Before model development, organizations should evaluate completeness, accuracy, consistency, historical coverage, bias, relevance and update frequency.'] },
      { kind: 'pipeline', title: 'From Prediction to Workflow', body: ['Predictions create more value when they are connected to action.'], steps: ['Data updated', 'Model analyzes', 'Threshold reached', 'Alert generated', 'Task created', 'Manager reviews', 'Workflow continues'] }],
    faq: [['What is predictive analytics?', 'Predictive analytics uses data and statistical or machine learning techniques to estimate future outcomes or identify likely patterns.'], ['What data do we need?', 'The answer depends on the use case. Relevant, sufficiently complete historical data is often important.'], ['Can predictive AI guarantee outcomes?', 'No. Predictions are probabilistic and depend on data quality, model design and external factors.'], ['Can predictive models connect to dashboards?', 'Yes. Model outputs can be integrated with reporting and operational applications.'], ['Can anomaly detection be automated?', 'Yes. Systems can flag unusual patterns for investigation.']]
  },
  {
    slug: 'custom-ai', nav: 'Custom AI', visual: 'custom', icon: 'spark',
    title: 'Custom AI Application Development', accent: 'for Business',
    intro: ['Off-the-shelf AI tools do not fit every business process.', '<b>Symtera Technologies</b> provides <b>custom AI development services</b> for organizations that need purpose-built applications, automation workflows, AI agents, knowledge systems, analytics or integrations designed around their specific requirements.'],
    cta: ['Discuss Your AI Application', 'Contact Us'],
    sections: [
      { kind: 'text', title: 'What Is Custom AI Development?', body: ['Custom AI development combines artificial intelligence with software engineering to create an application designed around a specific workflow, data environment, user group or business problem.', 'A custom AI application may include generative AI, large language models, AI agents, workflow automation, RAG, document intelligence, predictive models, APIs, dashboards, web or mobile interfaces, databases and access control.'] },
      { kind: 'cards', title: 'Custom AI Solutions We Can Build', items: [
        ['AI Knowledge Platforms', 'Search and interact with large collections of approved business information.', 'book'],
        ['AI Automation Applications', 'Automate multi-step workflows across systems and users.', 'workflow'],
        ['AI Agent Applications', 'Create controlled agents for specific business roles and processes.', 'bot'],
        ['Document Intelligence Platforms', 'Extract and organize information from document collections.', 'doc'],
        ['AI Customer Applications', 'Build customer-facing assistants, portals and intelligent digital experiences.', 'headset'],
        ['AI Analytics Applications', 'Combine AI analysis with reporting, forecasting and operational dashboards.', 'chart']] },
      { kind: 'steps', title: 'From Idea to Production', steps: [
        ['Discovery', 'Understand the business problem, users, workflow and required outcomes.'],
        ['Architecture', 'Select the appropriate AI models, data architecture, integrations, hosting and controls.'],
        ['Prototype', 'Validate the solution concept with realistic use cases.'],
        ['Development', 'Build the production application and required integrations.'],
        ['Testing', 'Evaluate functionality, security, quality and edge cases.'],
        ['Deployment', 'Deploy to the required environment.'],
        ['Improvement', 'Monitor usage and improve based on real-world feedback.']] },
      { kind: 'text', title: 'Cloud or On-Premises AI', body: ['Depending on selected technologies and infrastructure, custom AI applications can be designed for public cloud, private cloud, on-premises environments or hybrid environments.', 'Deployment decisions should consider security, performance, integration, model availability and operational requirements.'] },
      { kind: 'text', title: 'Build AI Around Existing Systems', body: ['Custom AI applications can integrate with CRM, ERP, databases, APIs, internal portals, document repositories, web applications, mobile applications and third-party platforms.'] }],
    faq: [['When should we build a custom AI application?', 'When an off-the-shelf tool does not match the workflow, data requirements, integrations, permissions or user experience you need.'], ['Can you build an AI solution using our existing systems?', 'Yes, where suitable integration methods are available.'], ['Can a custom application use multiple AI models?', 'Yes. Model selection should depend on the use case.'], ['Can custom AI be deployed on-premises?', 'In many cases, yes, depending on architecture and model requirements.'], ['Do you develop the complete application or only the AI component?', 'Symtera can combine AI engineering with application development and integration based on project scope.']]
  }
];
