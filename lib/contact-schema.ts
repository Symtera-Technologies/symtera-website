import { z } from 'zod';
import {
  SERVICE_OPTIONS,
  REQUIREMENT_TYPES,
  EXISTING_SYSTEM_OPTIONS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
} from '@/content/site';

const SERVICES = SERVICE_OPTIONS.map(([label]) => label) as [string, ...string[]];

/** Shared by the form and the route handler, so both validate identically. */
export const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z.string().trim().min(7, 'Please enter a phone or WhatsApp number.'),
  company: z.string().trim().max(200).optional().or(z.literal('')),

  service: z.enum(SERVICES, { message: 'Please select a service.' }),
  requirementType: z.enum(REQUIREMENT_TYPES as [string, ...string[]]).optional().or(z.literal('')),
  features: z.array(z.string()).max(30).optional(),

  existingSystem: z.enum(EXISTING_SYSTEM_OPTIONS as [string, ...string[]]).optional().or(z.literal('')),
  timeline: z.enum(TIMELINE_OPTIONS as [string, ...string[]]).optional().or(z.literal('')),
  budget: z.enum(BUDGET_OPTIONS as [string, ...string[]]).optional().or(z.literal('')),

  message: z.string().trim().min(20, 'Please give us at least a sentence or two (20 characters).').max(5000),

  /**
   * Honeypot. Deliberately unconstrained here so a filled value still parses —
   * the route handler then accepts the request silently instead of returning a
   * validation error that would tell a bot which field gave it away.
   */
  website: z.string().max(500).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
