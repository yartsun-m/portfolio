
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'Vacuum Cleaner Robot System',
      description: 'Designed and implemented app-side control of a distributed robotic system using Java and RMI. Applied object-oriented design principles, UML modeling, and implemented serialization for reliable client-server communication.',
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80',
      tags: ['Java', 'RMI', 'OOP', 'UML', 'Client-Server'],
      date: '04/2025 - 07/2025',
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'Endoscopy Department Database',
      description: 'Designed and implemented a relational PostgreSQL database for patient registration, scheduling, and procedure documentation. Created ER diagrams, applied normalization, and wrote SQL queries for access control and reporting.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['PostgreSQL', 'SQL', 'Database Design', 'ER Diagrams'],
      date: '04/2025 - 06/2025',
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'OOP Graphical App',
      description: 'Interactive simulation in Java demonstrating object-oriented design principles. Implemented modular classes and visual behavior representation with clean architecture.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      tags: ['Java', 'OOP', 'GUI', 'Design Patterns'],
      date: '04/2024 - 07/2024',
      github: 'https://github.com'
    },
    {
      title: 'WordPress Website',
      description: 'Created a WordPress-based informational website with custom layout and structure. Utilized WordPress blocks and responsive theme customization for optimal user experience.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      tags: ['WordPress', 'Web Design', 'Responsive'],
      date: '11/2024 - 12/2024',
      demo: 'https://fastaidtest.wordpress.com'
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic and personal projects showcasing my skills in software development, database design, and system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{project.date}</span>
                </div>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
