
import { Code2, Database, GraduationCap, Brain } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Python, Java, C#, C++, FastAPI, .NET',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'PostgreSQL, MySQL, Database Design, SQL',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'PyTorch, TensorFlow, NumPy, Pandas, MATLAB',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Software Engineering',
      description: 'OOP, Design Patterns, System Architecture, Git',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm a software developer studying Information Engineering at HAW Hamburg (5th semester). 
            I focus on backend development, database systems, and AI - building robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-0.5 mb-4`}>
                <div className="w-full h-full bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">Information Engineering (B.Sc.)</div>
                <div className="text-blue-400">HAW Hamburg</div>
                <div className="text-sm text-gray-400">2023 - Present | 5th Semester</div>
                <div className="text-sm text-gray-400 mt-1">Specialization: Software and Information Technology</div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="font-semibold">Software Engineering (B.Sc.)</div>
                <div className="text-purple-400">Kyiv Polytechnic Institute</div>
                <div className="text-sm text-gray-400">2021 - 2022</div>
              </div>
            </div>
          </div>

          {/* Languages & Info */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Languages & Additional Info</h3>
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
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm text-gray-400">
                  Open to part-time or Werkstudent positions in software development or data-related roles. 
                  Strong teamwork and communication skills in international environments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
