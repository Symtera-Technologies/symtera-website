'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';

import { MONO } from '@/lib/tokens';
import { contactSchema, type ContactInput } from '@/lib/contact-schema';
import {
  SERVICE_OPTIONS,
  FEATURE_MAP,
  REQUIREMENT_TYPES,
  EXISTING_SYSTEM_OPTIONS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
} from '@/content/site';
import { ContentIcon, ArrowUpRight, ShieldCheck, Check } from '@/components/ui/Icons';

const label: React.CSSProperties = {
  display: 'block',
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: '#4E5D6C',
  marginBottom: 8,
};

const field: React.CSSProperties = {
  height: 52,
  padding: '0 16px 0 44px',
  border: '1px solid #DCE3EA',
  borderRadius: 14,
  background: '#F8FAFC',
  fontSize: 15,
  color: '#101C2B',
  width: '100%',
  boxSizing: 'border-box',
};

const selectField: React.CSSProperties = {
  ...field,
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234E5D6C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
};

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  left: 15,
  top: 18,
  color: '#8A96A3',
  pointerEvents: 'none',
};

const chip: React.CSSProperties = {
  display: 'inline-flex',
  flex: '0 0 auto',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  gap: 8,
  fontSize: 13.5,
  border: '1px solid #DCE3EA',
  background: '#F8FAFC',
  borderRadius: 999,
  padding: '9px 14px',
  cursor: 'pointer',
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span style={{ display: 'block', marginTop: 6, fontSize: 13, color: '#D93025' }} role="alert">
      {message}
    </span>
  );
}

function StepHeader({ n, title, hint }: { n: string; title: string; hint: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 14, alignItems: 'start' }}>
      <span
        style={{
          display: 'inline-grid',
          placeItems: 'center',
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: '#0B1420',
          color: '#8CC63F',
          fontFamily: MONO,
          fontSize: 11,
          boxShadow: '0 0 0 6px #F4F7FA',
        }}
      >
        {n}
      </span>
      <div>
        <h3 style={{ fontWeight: 500, fontSize: 19, letterSpacing: '-.02em', margin: '6px 0 4px' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 14, color: '#8A96A3' }}>{hint}</p>
      </div>
    </div>
  );
}

const SERVICE_LABELS = SERVICE_OPTIONS.map(([l]) => l);

export default function ContactForm() {
  const params = useSearchParams();
  const requested = params.get('service') ?? '';

  // A product name (e.g. "SymScan") has no matching service option, so it seeds
  // the message instead and the service stays on the default.
  const preselected = SERVICE_LABELS.find((l) => l.toLowerCase() === requested.toLowerCase());
  const productRequest = requested && !preselected ? requested : '';

  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: preselected ?? 'AI Solutions',
      requirementType: '',
      features: [],
      existingSystem: 'Yes',
      timeline: 'Immediately',
      budget: 'Basic',
      message: productRequest ? `I would like to request a demo of ${productRequest}.\n\n` : '',
      website: '',
    },
  });

  const service = watch('service');
  const features = useMemo(() => FEATURE_MAP[service] ?? [], [service]);

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setServerError(data?.error ?? 'Something went wrong. Please email sales@symteratech.com.');
        return;
      }
      setSent(true);
    } catch {
      setServerError('Network error. Please email sales@symteratech.com.');
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{
        display: 'grid',
        gap: 0,
        background: '#fff',
        border: '1px solid #DCE3EA',
        borderRadius: 26,
        boxShadow: '0 40px 80px -50px rgba(11,20,32,.35)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(120deg,#0B1420,#0A70B8)',
          color: '#F4F7FA',
          padding: 'clamp(22px,3vw,32px) clamp(22px,3vw,40px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(244,247,250,.14) 1px,transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'linear-gradient(to right,transparent,#000 60%)',
            WebkitMaskImage: 'linear-gradient(to right,transparent,#000 60%)',
          }}
        />
        <div style={{ position: 'relative' }}>
          <span
            style={{
              display: 'block',
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#8CC63F',
              marginBottom: 8,
            }}
          >
            Request a Solution
          </span>
          <p style={{ margin: 0, fontSize: 15, color: '#B7C3CF', maxWidth: '52ch' }}>
            Three short steps. Tell us who you are, what you need and when. Our team replies with the best-fit solution.
          </p>
        </div>
        <span
          style={{
            position: 'relative',
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: '#F4F7FA',
            border: '1px solid rgba(255,255,255,.25)',
            borderRadius: 999,
            padding: '8px 14px',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,.06)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#8CC63F',
              boxShadow: '0 0 10px #8CC63F',
              animation: 'sym-pulse 2s ease-in-out infinite',
            }}
          />
          Replies within 24h
        </span>
      </div>

      <div style={{ padding: 'clamp(22px,3vw,40px)', display: 'grid', gap: 34, position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 'calc(clamp(22px,3vw,40px) + 17px)',
            top: 60,
            bottom: 120,
            width: 1,
            background: 'linear-gradient(#DCE3EA,#DCE3EA 60%,transparent)',
          }}
        />

        {/* Honeypot — hidden from people, tempting to bots. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
          </label>
        </div>

        <section style={{ display: 'grid', gap: 18, position: 'relative' }}>
          <StepHeader n="01" title="Your details" hint="How we reach you back." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, paddingLeft: 48 }}>
            <label style={{ display: 'block', position: 'relative' }}>
              <span style={label}>Full name *</span>
              <span style={{ position: 'relative', display: 'block' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
                <input
                  data-input="form"
                  placeholder="Your name"
                  aria-invalid={!!errors.fullName}
                  style={field}
                  {...register('fullName')}
                />
              </span>
              <FieldError message={errors.fullName?.message} />
            </label>

            <label style={{ display: 'block', position: 'relative' }}>
              <span style={label}>Email address *</span>
              <span style={{ position: 'relative', display: 'block' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <input
                  data-input="form"
                  type="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  style={field}
                  {...register('email')}
                />
              </span>
              <FieldError message={errors.email?.message} />
            </label>

            <label style={{ display: 'block', position: 'relative' }}>
              <span style={label}>Phone / WhatsApp *</span>
              <span style={{ position: 'relative', display: 'block' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                <input
                  data-input="form"
                  placeholder="+92 …"
                  aria-invalid={!!errors.phone}
                  style={field}
                  {...register('phone')}
                />
              </span>
              <FieldError message={errors.phone?.message} />
            </label>

            <label style={{ display: 'block', position: 'relative' }}>
              <span style={label}>Company / organisation</span>
              <span style={{ position: 'relative', display: 'block' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                  <path d="M3 21h18M5 21V5l7-2v18M12 21V9l7 2v10M8 8h1M8 12h1M8 16h1M15 14h1M15 17h1" />
                </svg>
                <input data-input="form" placeholder="Company" style={field} {...register('company')} />
              </span>
            </label>
          </div>
        </section>

        <section style={{ display: 'grid', gap: 18, position: 'relative' }}>
          <StepHeader n="02" title="What do you need?" hint="Pick a service; feature options update to match." />
          <div style={{ display: 'grid', gap: 18, paddingLeft: 48 }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,170px),1fr))', gap: 10 }}>
                {SERVICE_OPTIONS.map(([optLabel, icon]) => {
                  const on = service === optLabel;
                  return (
                    <button
                      key={optLabel}
                      type="button"
                      data-svcopt
                      aria-pressed={on}
                      onClick={() => {
                        setValue('service', optLabel, { shouldValidate: true });
                        setValue('features', []);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderRadius: 14,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        fontSize: 14,
                        fontWeight: 500,
                        border: `1px solid ${on ? '#0A70B8' : '#DCE3EA'}`,
                        background: on ? 'rgba(10,112,184,.08)' : '#fff',
                        color: '#101C2B',
                        transition: 'all .2s',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-grid',
                          placeItems: 'center',
                          width: 30,
                          height: 30,
                          borderRadius: 9,
                          background: on ? '#0A70B8' : '#F4F7FA',
                          color: on ? '#fff' : '#0A70B8',
                          flex: '0 0 auto',
                        }}
                      >
                        <ContentIcon name={icon} size={16} />
                      </span>
                      {optLabel}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" {...register('service')} />
              <FieldError message={errors.service?.message} />
            </div>

            <div>
              <span style={label}>Requirement type</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {REQUIREMENT_TYPES.map((r) => (
                  <label key={r} data-chip style={chip}>
                    <input type="radio" value={r} style={{ accentColor: '#0A70B8', margin: 0 }} {...register('requirementType')} />
                    {r}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <span style={label}>
                Required features{' '}
                <span style={{ textTransform: 'none', letterSpacing: 0, color: '#8A96A3' }}>— for {service}</span>
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {features.map((f) => (
                  <label key={f} data-chip style={chip}>
                    <input type="checkbox" value={f} style={{ accentColor: '#0A70B8', margin: 0 }} {...register('features')} />
                    {f}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gap: 18, position: 'relative' }}>
          <StepHeader n="03" title="Scope & timing" hint="Helps us size the right proposal." />
          <div style={{ display: 'grid', gap: 14, paddingLeft: 48 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
              <label style={{ display: 'block', position: 'relative' }}>
                <span style={label}>Existing system or provider?</span>
                <span style={{ position: 'relative', display: 'block' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 15h4" />
                  </svg>
                  <select data-input="form" style={selectField} {...register('existingSystem')}>
                    {EXISTING_SYSTEM_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </span>
              </label>

              <label style={{ display: 'block', position: 'relative' }}>
                <span style={label}>Expected timeline</span>
                <span style={{ position: 'relative', display: 'block' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <select data-input="form" style={selectField} {...register('timeline')}>
                    {TIMELINE_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </span>
              </label>

              <label style={{ display: 'block', position: 'relative' }}>
                <span style={label}>Budget range</span>
                <span style={{ position: 'relative', display: 'block' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M14.5 9.5a2.5 2.5 0 0 0-5 0c0 2.5 5 1.5 5 4a2.5 2.5 0 0 1-5 0M12 6v1.5M12 16.5V18" />
                  </svg>
                  <select data-input="form" style={selectField} {...register('budget')}>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </span>
              </label>
            </div>

            <label style={{ display: 'block' }}>
              <span style={label}>Message / requirement details *</span>
              <textarea
                data-input="form"
                placeholder="What should the system do for the business?"
                aria-invalid={!!errors.message}
                style={{
                  minHeight: 140,
                  padding: '14px 16px',
                  border: '1px solid #DCE3EA',
                  borderRadius: 14,
                  background: '#F8FAFC',
                  fontSize: 15,
                  color: '#101C2B',
                  resize: 'vertical',
                  width: '100%',
                  boxSizing: 'border-box',
                  lineHeight: 1.55,
                }}
                {...register('message')}
              />
              <FieldError message={errors.message?.message} />
            </label>
          </div>
        </section>

        <div
          style={{
            display: 'flex',
            gap: 14,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingTop: 22,
            borderTop: '1px solid #DCE3EA',
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: '#8A96A3', display: 'flex', alignItems: 'center', gap: 8 }}>
            <ShieldCheck />
            Your details stay private. ISO/IEC 27001 certified.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {sent && (
              <span
                role="status"
                style={{ fontSize: 14, color: '#39B54A', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Check size={16} stroke="currentColor" />
                Request received. We’ll get back to you shortly.
              </span>
            )}
            {serverError && (
              <span role="alert" style={{ fontSize: 14, color: '#D93025', fontWeight: 500 }}>
                {serverError}
              </span>
            )}
            <button
              data-magnet
              data-btn="primary"
              type="submit"
              disabled={isSubmitting || sent}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#8CC63F',
                color: '#0B1420',
                border: 0,
                cursor: isSubmitting || sent ? 'default' : 'pointer',
                opacity: isSubmitting || sent ? 0.6 : 1,
                fontWeight: 600,
                fontSize: 15,
                padding: '15px 26px',
                borderRadius: 999,
              }}
            >
              {isSubmitting ? 'Sending…' : 'Send request'}
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
