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
} from '@/lib/contactForm';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const formspreeEnabled = isFormspreeEnabled();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot filled — silently pretend success (bot trap)
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
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Open to Werkstudent and internship opportunities in backend, full-stack, or data engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed">
                Send a message through the form — it delivers directly to my inbox. I typically respond
                within 1–2 business days.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold mb-1">Email</div>
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
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1.5" />
                        Copy email
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
                  <div className="font-semibold mb-1">LinkedIn</div>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="text-gray-400">{siteConfig.location}</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-sm text-gray-400">
                5th semester at HAW Hamburg. Available for part-time roles up to 20 hours/week during
                the semester.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot — hidden from users, traps bots */}
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
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                  required
                />
              </div>

              {status === 'sent' && (
                <p className="text-sm text-green-400" role="status">
                  {formspreeEnabled
                    ? 'Message sent — thank you! I will get back to you soon.'
                    : 'Your email app should open with a pre-filled message. Send it from there to reach me.'}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage || 'Something went wrong.'} Please email me at {siteConfig.email}.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === 'sending'
                  ? 'Sending...'
                  : formspreeEnabled
                    ? 'Send Message'
                    : 'Open in Email App'}
              </Button>

              {!formspreeEnabled && (
                <p className="text-xs text-gray-500 text-center">
                  Formspree not configured — add <code className="text-gray-400">VITE_FORMSPREE_FORM_ID</code>{' '}
                  to <code className="text-gray-400">.env</code> for direct delivery.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
