// Verbatim content from symteratech.com Cloud pages.
import type { ServicePage } from './types';

export const CLOUD_PAGES: ServicePage[] = [
  {
    slug: 'enterprise-email-solutions', nav: 'Enterprise Email Solutions', visual: 'mail', icon: 'mail',
    title: 'Enterprise Email', accent: 'Solutions', kicker: 'Build trustworthy relationships with a professional email address',
    intro: ['Host your corporate email in dedicated servers with our secure cloud-based enterprise email solutions to match your business domain. Email address with your business name helps to present professionalism and strengthen your relationships with customers and business partners. Enterprise-level security ensures the protection of your inboxes from external viruses, spamming, and phishing attacks. Our team of hosting experts is readily available for 24/7 support and promises accurate deliverability of business emails. Our enterprise email hosting plans start from $1.99 per mailbox per month, choose a plan and start building trustworthy relationships.'],
    cta: ['Get Started', 'Contact Us'],
    sections: [{ kind: 'cards', title: 'Features', items: [
      ['Webmail Powered', 'Control panel with graphical interface and automation tools designed to simplify the process of hosting a website.', 'globe'],
      ['24/7 Live Support', 'Need help? Our dedicated team of hosting experts is standing by, ready to help you with the hosting issues.', 'headset'],
      ['ActiveSync®', 'Sync your mailboxes, calendars and address books from all across your devices.', 'sync'],
      ['AntiVirus, AntiSpam', 'Filter your all incoming emails with spam filter and antivirus functions.', 'shield'],
      ['File Storage', 'Storage your important data to cloud and share with your contacts.', 'box']] }],
    plans: { title: 'Enterprise Email Hosting Plans', items: [
      { name: 'STM5', price: '$1.99', per: 'Monthly Package of Per Mailbox', items: ['5 GB Email Storage', 'AntiVirus', 'AntiSpam', 'File Storage'] },
      { name: 'STM10', price: '$2.49', per: 'Monthly Package of Per Mailbox', items: ['10 GB Email Storage', 'AntiVirus', 'AntiSpam', 'File Storage'] },
      { name: 'STM20', price: '$2.99', per: 'Monthly Package of Per Mailbox', items: ['20 GB Email Storage', 'AntiVirus', 'AntiSpam', 'File Storage'] },
      { name: 'STM50', price: '$3.49', per: 'Monthly Package of Per Mailbox', items: ['50 GB Email Storage', 'AntiVirus', 'AntiSpam', 'File Storage'] },
      { name: 'STM5 PLUS', price: '$2.49', per: 'Monthly Package of Per Mailbox', items: ['5 GB Email Storage', 'ActiveSync®', 'AntiVirus', 'AntiSpam', 'File Storage'] },
      { name: 'STM10 PLUS', price: '$2.99', per: 'Monthly Package of Per Mailbox', items: ['10 GB Email Storage', 'ActiveSync®', 'AntiVirus', 'AntiSpam', 'File Storage'], hot: true },
      { name: 'STM20 PLUS', price: '$3.49', per: 'Monthly Package of Per Mailbox', items: ['20 GB Email Storage', 'ActiveSync®', 'AntiVirus', 'AntiSpam', 'File Storage'] },
      { name: 'STM50 PLUS', price: '$3.99', per: 'Monthly Package of Per Mailbox', items: ['50 GB Email Storage', 'ActiveSync®', 'AntiVirus', 'AntiSpam', 'File Storage'] }] },
    faq: [['Why corporate email is important?', 'Email is one of those rare means of communication that remains relevant even in these modern times. It is an important tool of communication for businesses big and small around the world. Let us try to understand what enterprise email hosting is to understand its importance for a business.'], ['What is enterprise email hosting?', 'Enterprise email hosting is a service that equips businesses with email servers for reliable and secure email solutions. Dedicated email servers take over the email duty and decrease the load on a company\'s hosting server. Hence improves the operational productivity as well as the website’s performance.'], ['How is it different from a regular email service?', 'Email hosting offers a more customized experience as businesses can select the services that would satisfy their requirements. It also offers a more personalized email experience, giving more credibility to a business. Though email hosting is markedly different from web hosting, most web hosting providers also offer email hosting. Any reputable hosting provider usually offers a reliable email hosting service as an add-on service. A personalized email address that uses email hosting services instantly gives more credibility to your intended communication. Many small and medium businesses use email hosting services for their emailing needs.'], ['Does email host cost money?', 'Email hosting providers offer their services for free but with some conditions attached. Several corporate email service providers offer paid email hosting at really reasonable prices. Symtera technologies’ corporate email services offer a 360-degree synchronization coupled with 99.9 percent uptime. Get a personalized email to match your domain name and secure it with your digital certificate for branded security.'], ['Why are enterprise email solutions better than personal email solutions?', 'Because enterprise email solutions offer dedicated cloud-based email servers to secure your business from phishing attacks, these solutions also ensure the accurate deliverability of corporate emails to the right person at the right time.'], ['Can I use my business email on smartphones?', 'Yes, the ActiveSync feature allows you to send and receive a business email, and sync calendars and address books across all devices.'], ['Does Symtera Technology’s business email include a spam filter?', 'Yes, our advanced system track and stop spam to keep your inbox clean. Our state-of-the-art enterprise-level spam and anti-virus filters protect your inbox from unwanted, potentially dangerous, and spam emails.'], ['What are the best features of our enterprise email solutions?', 'The team of experts at Symtera Technologies offers dedicated email servers to ensure security and accurate deliverability. Enterprise email hosting solutions provides a user-friendly interface, work on several devices including mobile, tablets, desktops, and laptops, and allow users to communicate anywhere anytime.']]
  },
  {
    slug: 'cloud-enterprise-server', nav: 'Cloud Enterprise Server', visual: 'server', icon: 'server',
    title: 'Every business needs a', accent: 'versatile hosting service', kicker: 'Cloud Enterprise Server',
    intro: ['Cloud hosting is very scalable, reliable and flexible in nature. We can provide cloud hosting services on public cloud and Symtera Technologies Private Cloud <b>(Oracle-Linux base)</b>.'],
    cta: ['Choose a Plan', 'Contact Us'],
    images: ['/services/banner-cloud-services.webp'],
    sections: [{ kind: 'cards', title: 'Introduce Best Services for Business', items: [
      ['Domain Registration', 'Symtera Technologies can arrange Top Level Domain (TLD) on very ecumenical rates. We can assist you to search and register your required domains in Pakistan.', 'globe'],
      ['SSL Certificates', 'SSL are third party secure certificates which enable your web portal more secure. We are offering all major third party SSL certificates on cheap prices with configuration and support services.', 'shield']] }],
    plans: { title: 'Cloud Server Plans', items: [
      { name: 'STC-I', price: '$98.99', per: 'Monthly Package', items: ['2 CPU', '4 GB RAM', '50 GB Storage', '50 GB Bandwidth', '1 Dedicated IP'] },
      { name: 'STC-II', price: '$148.99', per: 'Monthly Package', items: ['4 CPU', '8 GB RAM', '100 GB Storage', '100 GB Bandwidth', '1 Dedicated IP'] },
      { name: 'STC-III', price: '$198.99', per: 'Monthly Package', items: ['4 CPU', '16 GB RAM', '200 GB Storage', '200 GB Bandwidth', '1 Dedicated IP'], hot: true },
      { name: 'STC-IV', price: '$298.99', per: 'Monthly Package', items: ['8 CPU', '32 GB RAM', '500 GB Storage', '500 GB Bandwidth', '1 Dedicated IP'] },
      { name: 'STC-V', price: '$498.99', per: 'Monthly Package', items: ['12 CPU', '64 GB RAM', '1000 GB Storage', '1000 GB Bandwidth', '2 Dedicated IP'] },
      { name: 'STC-CUSTOM', price: 'Get Quote', per: 'Monthly Package', items: ['Configurable CPU', 'Configurable RAM', 'Configurable Storage', 'Configurable Bandwidth', 'Configurable IP'] }] },
    faq: []
  },
  {
    slug: 'linux-hosting', nav: 'cPanel Hosting', visual: 'host', icon: 'globe',
    title: 'Linux', accent: 'Hosting', kicker: 'Choose your plan',
    intro: ['cPanel-powered Linux hosting with free SSL, zero interruption and 24/7 support.'],
    cta: ['Choose a Plan', 'Contact Us'],
    sections: [{ kind: 'cards', title: 'Features', items: [
      ['cPanel Powered', 'Control panel with graphical interface and automation tools designed to simplify the process of hosting a website.', 'globe'],
      ['24/7 Live Support', 'Need help? Our dedicated team of hosting experts is standing by, ready to help you with the hosting issues.', 'headset'],
      ['Free SSL Certificates', 'All cPanel Hosting plans come with automatically set up free certificates for one year.', 'shield'],
      ['Zero Interruption', 'We are always online, regardless of planned or unplanned maintenance.', 'sync'],
      ['Secure', 'our security team is on the job 24/7 to monitor and deflect vulnerable attacks.', 'lock']] }],
    plans: { title: 'Linux Hosting Plans', items: [
      { name: 'Lite Plan', price: '$4.99', per: 'Per Monthly Fee (Yearly Package)', items: ['5 GB Storage', '10 Email Accounts', 'Unmetered bandwidth'] },
      { name: 'Mild Plan', price: '$9.99', per: 'Per Monthly Fee (Yearly Package)', items: ['10 GB Storage', '20 Email Accounts', 'Unmetered bandwidth'], hot: true },
      { name: 'Hot Plan', price: '$19.99', per: 'Per Monthly Fee (Yearly Package)', items: ['25 GB Storage', '50 Email Accounts', 'Unmetered bandwidth'] },
      { name: 'Wild Plan', price: '$29.99', per: 'Per Monthly Fee (Yearly Package)', items: ['50 GB Storage', '100 Email Accounts', 'Unmetered bandwidth'] }] },
    faq: []
  },
  {
    slug: 'windows-hosting', nav: 'Windows Hosting', visual: 'host', icon: 'grid',
    title: 'Windows', accent: 'Hosting', kicker: 'Choose your plan',
    intro: ['Plesk-powered Windows hosting with free SSL, zero interruption and 24/7 support.'],
    cta: ['Choose a Plan', 'Contact Us'],
    sections: [{ kind: 'cards', title: 'Features', items: [
      ['Plesk Powered', 'Plesk is a web hosting and server data center automation software with a control panel developed for Linux and Windows-based retail hosting service providers.', 'grid'],
      ['24/7 Live Support', 'Need help? Our dedicated team of hosting experts is standing by, ready to help you with the hosting issues.', 'headset'],
      ['Free SSL Certificates', 'All Plesk Hosting plans come with automatically set up free certificates for one year.', 'shield'],
      ['Zero Interruption', 'We are always online, regardless of planned or unplanned maintenance.', 'sync'],
      ['Secure', 'our security team is on the job 24/7 to monitor and deflect vulnerable attacks.', 'lock']] }],
    plans: { title: 'Windows Hosting Plans', items: [
      { name: 'Lite Plan', price: '$4.99', per: 'Per Monthly Fee (Yearly Package)', items: ['Plesk Powered', 'Free SSL Certificate', 'Unmetered bandwidth'] },
      { name: 'Mild Plan', price: '$9.99', per: 'Per Monthly Fee (Yearly Package)', items: ['10 GB Storage', '20 Email Accounts', 'Unmetered bandwidth'], hot: true },
      { name: 'Hot Plan', price: '$19.99', per: 'Per Monthly Fee (Yearly Package)', items: ['Plesk Powered', 'Free SSL Certificate', 'Unmetered bandwidth'] },
      { name: 'Wild Plan', price: '$29.99', per: 'Per Monthly Fee (Yearly Package)', items: ['Plesk Powered', 'Free SSL Certificate', 'Unmetered bandwidth'] }] },
    faq: []
  },
  {
    slug: 'shared-hosting-plus', nav: 'Shared Hosting Plus', visual: 'host', icon: 'layers',
    title: 'Shared Hosting with', accent: 'Enterprise Email', kicker: 'Choose your plan',
    intro: ['cPanel shared hosting bundled with enterprise email: ActiveSync, antivirus and antispam, and cloud file storage.'],
    cta: ['Choose a Plan', 'Contact Us'],
    sections: [{ kind: 'cards', title: 'Features', items: [
      ['cPanel Powered', 'Control panel with graphical interface and automation tools designed to simplify the process of hosting a website.', 'globe'],
      ['24/7 Live Support', 'Need help? Our dedicated team of hosting experts is standing by, ready to help you with the hosting issues.', 'headset'],
      ['ActiveSync', 'Sync your mailboxes, calendars and address books from all across your devices.', 'sync'],
      ['AntiVirus, AntiSpam', 'Filter your all incoming emails with spam filter and antivirus functions.', 'shield'],
      ['File Storage', 'Storage your important data to cloud and share with your contacts.', 'box']] }],
    plans: { title: 'Shared Hosting with Enterprise Email Plans', items: [
      { name: 'Lite Plan', price: '$9.69', per: 'Per Monthly Fee (Yearly Package)', items: ['5 GB Storage', '10 Email Accounts', 'Unmetered bandwidth'] },
      { name: 'Mild Plan', price: '$19.69', per: 'Per Monthly Fee (Yearly Package)', items: ['10 GB Storage', '20 Email Accounts', 'Unmetered bandwidth'], hot: true },
      { name: 'Hot Plan', price: '$29.69', per: 'Per Monthly Fee (Yearly Package)', items: ['25 GB Storage', '30 Email Accounts', 'Unmetered bandwidth'] },
      { name: 'Wild Plan', price: '$39.69', per: 'Per Monthly Fee (Yearly Package)', items: ['50 GB Storage', '50 Email Accounts', 'Unmetered bandwidth'] }] },
    faq: []
  }
];
