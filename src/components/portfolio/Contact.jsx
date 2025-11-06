import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to email client with pre-filled data
    const subject = encodeURIComponent('Portfolio Contact from ' + formData.name);
    const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:yartsun.m@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Looking for part-time or Werkstudent opportunities in software development. Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm actively seeking part-time or Werkstudent positions in software development or data-related roles. 
                With strong technical skills and adaptability in international environments, I'm ready to contribute to your team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:yartsun.m@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    yartsun.m@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="text-gray-400">
                    Hamburg, Germany
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-sm text-gray-400">
                Currently in 5th semester at HAW Hamburg. Available for part-time positions (up to 20 hours/week during semester).
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about the opportunity..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}