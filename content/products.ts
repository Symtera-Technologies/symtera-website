// Verbatim content from symteratech.com Product pages.
import type { ServicePage } from './types';

export const PRODUCT_PAGES: ServicePage[] = [
  {
    slug: 'symscan', nav: 'SymScan', visual: 'biometric', icon: 'fingerprint',
    title: 'SymScan', accent: 'Cloud Based HR Software', kicker: 'Upgrade your HR system',
    intro: ['Cloud based HR software consists of determining the identity of a person. The aim is to capture an item of biometric data from this person. It can be a photo of their face, a record of their voice, or an image of their fingerprint.'],
    cta: ['Free Quote', 'Contact Us'],
    sections: [
      { kind: 'cards', title: 'Core Modules', items: [
        ['Access Control', 'State of the art online attendance management and access control system.', 'lock'],
        ['Attendance Timesheet', 'Timesheet attendance management system for in/out tracking information.', 'clock'],
        ['Impression Registration', 'User registration & recognition via thumb impression/image from database.', 'fingerprint'],
        ['HR portal', 'Multiple schedules per day and complete HR reporting portal to manage.', 'users']] },
      { kind: 'text', title: 'Features', body: ['Manage all functions of HR with cloud based human resource management system. This system helps businesses in the management of online biometric attendance with face, thumb, and voice recognition. Businesses can also manage schedules, timesheets, payrolls for employees. Its exceptional feature of custom reporting makes your monitoring system efficient and suitable for all businesses. Following are the key features of cloud-based HR software:'], list: ['Biometric attendance and payroll management system', 'User registration and identification via thumb impression/image', 'Peripheral testing panel to test devices i.e., Thumb scanner, camera and RFID reader', 'Tracking information about employees and company info', 'Overall company’s total employees record', 'HR reporting tool for reports on Employee active and deactivated statuses (covering all employees).', 'Track Employee’s timesheet attendance', 'Attendance monitoring reports daily, weekly and monthly', 'Customized dashboards for each user', 'Notification to leader about his team daily attendance. It could be via message or can be viewed on supervisor dashboard', 'Attendance reports generated according to departmentally or specific individual record', 'Graphical web presentation e.g., Charts', 'Roles and privileges to make modification in or to view employee data', 'Reports can be exported to Excel, PDF and Printed forms', 'Setup page to set functionalities according to company policies. It may include employee ID pattern, annual leaves, government legislation, privileges and approvals process etc.', 'Create schedules for 1 or multiple employees', 'Create schedules by departments, location, and jobs', 'Multiple schedules per day', 'Create multiple day shifts up to 72 hours', 'Add company locations to individual shifts', 'Create daily, weekly or monthly recurring schedules', 'Ability to create schedules up to 1 year', 'Flexibility to add pay rules to a shift', 'Add premium pay to shift', 'Easily edit one or multiple schedules at a time', 'Leave calendar view and highlights gazette holidays', 'Defining type of annual leaves', 'HR portal to manage leaves and holidays', 'Reports on Employee leaves balance', 'Reports on shifts allotted to employee', 'Alerts on gazette and sudden holidays', 'List of employees whose are given relaxation hours by company', 'Report on calculation of hours worked by employee', 'Leave balance calculation', 'Calculate Government legislation, net pay other total deduction', 'Shift wise calculation, scenarios for employees with relaxation hours or daily waged employee', 'Detail report on payroll overall employees', 'Notification at end of month regarding deductions', 'Employee ID will be generated in barcode', 'All notifications are made via sms', 'First 10,000 sms are free with the purchase of applications'] }],
    faq: []
  },
  {
    slug: 'job-management-system', nav: 'Job Management System', visual: 'kanban', icon: 'kanban',
    title: 'Job Management', accent: 'System', kicker: 'JMS',
    intro: ['With the job management system (JMS), enterprises can schedule jobs and projects to teams in the office or in the field. Create a new job or task list, schedule dates, and milestones. Furthermore, set up alerts so everyone knows what to do and when to do it. Manage your projects by assigning specific tasks to particular employees based on your hierarchy.'],
    cta: ['Request a Demo', 'Contact Us'],
    images: ['/services/project-8.webp'],
    sections: [
      { kind: 'cards', title: 'What JMS Manages', items: [
        ['Inventory', 'Get the stock report with replacement and without replacement. Equipment inventory tracking system provides checkout equipment reports the list of models, sub-models, product types and, price dealing.', 'box'],
        ['Reports', 'Site and Service problem report, Record of principals, contact person, and principal bank details.', 'chart'],
        ['Customized Portals', 'On project management software with a client portal, you can categorize users into teams e.g., supervisor, group leaders, engineers and, subordinates, etc. Group leaders create teams and teams are assigned jobs.', 'users'],
        ['Jobs Pool', 'Jobs pool for employees to manage and update progress status on assigned projects or tasks.', 'kanban'],
        ['Hierarchy & Task management', 'Define different offices and departmental hierarchy with enterprise task management system. Approval requests system for upper management. Control of user privileges.', 'network'],
        ['Project management', 'Launching a startup or a project with limited capital? no problem. Keep a close eye on managing your startups with agile project management solutions to track the time and progress of the individual tasks.', 'clock']] },
      { kind: 'feature', title: 'Product Overview', img: 0, body: ['Schedule jobs and projects to teams in the office or in the field, and track progress from a single portal.'] }],
    faq: []
  },
  {
    slug: 'patient-management-system', nav: 'Patient Management System', visual: 'health', icon: 'heart',
    title: 'Patient Management', accent: 'System', kicker: 'PMS',
    intro: ['PMS is an efficient cloud-based patient management system with an automated biometric system to manage doctors’ & patients’ databases, diagnoses, prescriptions, clinic records, lab testing dispensary, and inventory. Furthermore, its exceptional key features and reports make it a state-of-the-art patient management solution suitable for every clinic and hospital.'],
    cta: ['Request a Demo', 'Contact Us'],
    images: ['/services/Patient-Management-System.webp'],
    sections: [
      { kind: 'text', title: 'Key Features', list: ['Track clinical records for patients and doctors', 'Biometric recognition system', 'Token system', 'Archive of medicines', 'Medicine inventory management system', 'General inventory', 'Room allocation for patients', 'Patient test reports maintenance', 'Medicines, diet and advices are prescribed', 'Patient History'] },
      { kind: 'text', title: 'Reports Include', list: ['Daily attendance of doctors', 'Clinic Performance', 'Tokens history', 'Registered patients’ history', 'Medicine Checkout report', 'Expiry reports of medicines', 'Medicine reorder report', 'Doctor cards issued to patients', 'Patient reports about diagnosis, medicines, advices, tests and disease description', 'Each and every report can be exported in print and excel format'] },
      { kind: 'feature', title: 'Product Overview', img: 0, body: ['A cloud-based system for clinics and hospitals: doctors, patients, diagnoses, prescriptions, lab, dispensary and inventory in one place.'] }],
    faq: []
  },
  {
    slug: 'assets-management-system', nav: 'Assets Management System', visual: 'building', icon: 'building',
    title: 'Assets Management', accent: 'System', kicker: 'AMS',
    intro: ['AMS is a cloud-based property management platform that enables businesses to manage commercial, residential and High-rise properties and take complete control of every aspect of their business to sell, lease and its maintenance.'],
    cta: ['Request a Demo', 'Contact Us'],
    images: ['/services/enterprise-it-asset-management-1.webp'],
    sections: [
      { kind: 'feature', title: 'Product Overview', img: 0, body: ['Sell, lease and maintain commercial, residential and high-rise properties from a single cloud platform.'] },
      { kind: 'text', title: 'Features', list: ['Tracking records regarding assets and categorized records into basements, floors with its units details', 'Owner and Tenant profiles with customization', 'Unit can be booked against the tenant that’s being registered', 'Payments about cash deposits can be managed and cash collections are automated based on both cash and checks received from tenant', 'Pending cheques can be added, clear as per cash received and notify', 'Payment terms can be done in down payment, installment and rent', 'Payments history i.e. advance payment, due payments, outstanding balance are maintained', 'Full general ledger accounting', 'Ledger transaction reversal', 'Reports: weekly, monthly, annual and total revenue', 'List of defaulters and property status reports are included', 'Dynamically create roles and customize portal as per user’s privileges', 'Notify reminders and alerts on delayed payments'] }],
    faq: []
  }
];
