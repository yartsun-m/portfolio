
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a software developer studying Information Engineering at HAW Hamburg (5th semester).
            I build backend APIs, PostgreSQL systems, and AI-powered tools — from a production-style data
            analyst platform to team finance apps and natural-language SQL assistants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">Information Engineering (B.Sc.)</div>
                <div className="text-blue-400">HAW Hamburg</div>
                <div className="text-sm text-gray-400">2023 — Present · 5th Semester</div>
                <div className="text-sm text-gray-400 mt-1">
                  Specialization: Software and Information Technology
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="font-semibold">Software Engineering (B.Sc.)</div>
                <div className="text-purple-400">Kyiv Polytechnic Institute</div>
                <div className="text-sm text-gray-400">2021 — 2022</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Languages & Availability</h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-2">Languages</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ukrainian & Russian</span>
                    <span className="text-blue-400">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">English</span>
                    <span className="text-blue-400">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">German</span>
                    <span className="text-blue-400">Intermediate (B1)</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm text-gray-400 leading-relaxed">
                  Open to Werkstudent and part-time software engineering roles in Hamburg. Available up to
                  20 hours/week during the semester. Strong teamwork and communication in international
                  environments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
