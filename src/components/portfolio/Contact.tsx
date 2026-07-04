import { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/data/portfolio';
import {
  isFormspreeEnabled,
  openMailtoFallback,
  submitToFormspree,
  type ContactFormData,
} from '@/lib/contactForm';
import { useTranslation } from '@/i18n/useTranslation';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const { t, locale } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const formspreeEnabled = isFormspreeEnabled();
  const location = siteConfig.location[locale];

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
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title.includes(' ') ? (
              <>
                {t.contact.title.split(' ')[0]}{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t.contact.title.split(' ').slice(1).join(' ')}
                </span>
              </>
            ) : (
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            )}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.getInTouch}</h3>
              <p className="text-gray-400 leading-relaxed">{t.contact.intro}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold mb-1">{t.contact.email}</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={copyEmail}
                    className="mt-2 h-8 text-gray-400 hover:text-white px-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1.5 text-green-400" />
                        {t.contact.copied}
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1.5" />
                        {t.contact.copyEmail}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-indigo-500/10">
                  <Linkedin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.linkedin}</div>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t.contact.connectLinkedin}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.location}</div>
                  <div className="text-gray-400">{location}</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <h4 className="font-semibold mb-2">{t.contact.availability}</h4>
              <p className="text-sm text-gray-400">{t.contact.availabilityText}</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
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
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                  required
                />
              </div>

              {status === 'sent' && (
                <p className="text-sm text-green-400" role="status">
                  {formspreeEnabled ? t.contact.sentApi : t.contact.sentMailto}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage || t.contact.errorPrefix} {t.contact.errorSuffix} {siteConfig.email}.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === 'sending'
                  ? t.contact.sending
                  : formspreeEnabled
                    ? t.contact.sendMessage
                    : t.contact.openEmailApp}
              </Button>

              {!formspreeEnabled && (
                <p className="text-xs text-gray-500 text-center">{t.contact.formspreeHint}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
