import { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { siteConfig } from '@/data/portfolio';
import {
  isFormspreeEnabled,
  openMailtoFallback,
  submitToFormspree,
  type ContactFormData,
} from '@/lib/contactForm';
import { useTranslation } from '@/i18n/useTranslation';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'bg-[#0a1628]/80 border-dashed border-cyan-500/30 text-white placeholder:text-slate-600 rounded-sm font-mono focus-visible:ring-cyan-400/50';

export default function Contact() {
  const { t, locale } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const formspreeEnabled = isFormspreeEnabled();
  const location = siteConfig.location[locale];
  const contactHighlight = t.contact.title.includes(' ')
    ? t.contact.title.split(' ').slice(1).join(' ')
    : t.contact.title;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      if (formspreeEnabled) {
        await submitToFormspree(formData, honeypot);
      } else {
        openMailtoFallback(formData, siteConfig.email);
      }
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <section className="py-24 px-6 relative" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          id="contact-heading"
          title={t.contact.title}
          highlight={contactHighlight}
          subtitle={t.contact.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="blueprint-panel">
              <span className="blueprint-badge mb-4 inline-block">COMM · 01</span>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{t.contact.getInTouch}</h3>
              <p className="text-slate-400 leading-relaxed">{t.contact.intro}</p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  title: t.contact.email,
                  content: (
                    <>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-slate-400 hover:text-cyan-400 transition-colors break-all font-mono text-sm"
                      >
                        {siteConfig.email}
                      </a>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={copyEmail}
                        className="mt-2 h-8 text-slate-500 hover:text-cyan-400 px-2 font-mono text-xs"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                            {t.contact.copied}
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 mr-1.5" />
                            {t.contact.copyEmail}
                          </>
                        )}
                      </Button>
                    </>
                  ),
                },
                {
                  icon: Linkedin,
                  title: t.contact.linkedin,
                  content: (
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm"
                    >
                      {t.contact.connectLinkedin}
                    </a>
                  ),
                },
                {
                  icon: MapPin,
                  title: t.contact.location,
                  content: <span className="text-slate-400 font-mono text-sm">{location}</span>,
                },
              ].map(({ icon: Icon, title, content }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 border border-dashed border-cyan-500/20 bg-[#0d1f3c]/40"
                >
                  <div className="p-2 border border-dashed border-cyan-500/30 shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-sm font-mono uppercase tracking-wide text-slate-300">
                      {title}
                    </div>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            <div className="blueprint-panel">
              <h4 className="font-semibold mb-2 text-cyan-400 font-mono text-sm uppercase">
                {t.contact.availability}
              </h4>
              <p className="text-sm text-slate-400">{t.contact.availabilityText}</p>
            </div>
          </div>

          <div className="blueprint-panel">
            <span className="blueprint-badge mb-4 inline-block">FORM · 02</span>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">
                  {t.contact.email}
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wide text-slate-400 mb-2">
                  {t.contact.message}
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {status === 'sent' && (
                <p className="text-sm text-emerald-400 font-mono" role="status">
                  {formspreeEnabled ? t.contact.sentApi : t.contact.sentMailto}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 font-mono" role="alert">
                  {errorMessage || t.contact.errorPrefix} {t.contact.errorSuffix} {siteConfig.email}.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full blueprint-btn-primary py-6 font-mono uppercase tracking-wide"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === 'sending'
                  ? t.contact.sending
                  : formspreeEnabled
                    ? t.contact.sendMessage
                    : t.contact.openEmailApp}
              </Button>

              {!formspreeEnabled && (
                <p className="text-xs text-slate-600 text-center font-mono">{t.contact.formspreeHint}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
