import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Community Collaborative Application',
    description:
      'A comprehensive app for community members to receive announcements, event updates, and prayer timings with real-time synchronization.',
    highlights: [
      'Built APIs for member enrollment, announcements, and dynamic prayer time updates',
      'Implemented JWT-based user authentication and role-based access control',
      'Designed MongoDB schemas for performance and scalability',
      'Used Hono.js and TypeScript to ensure modular architecture',
    ],
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'Hono.js', 'JWT'],
    featured: true,
  },
  {
    title: 'Coaching Management Portal',
    description:
      'A platform for coaching centers to manage students, courses, attendance, and communication with intuitive dashboards.',
    highlights: [
      'Developed APIs for user registration, course modules, and scheduling',
      'Optimized MongoDB queries for faster dashboard rendering',
      'Ensured modular, reusable API design for future scalability',
    ],
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'Postman'],
    featured: true,
  },
  {
    title: 'A.S Construction Management System',
    description:
      'A web platform to manage construction projects, workers, materials and daily progress.',
    highlights: [
      'A web platform to manage construction projects, workers, materials and daily progress',
      'Implemented project tracking, expense management and report generation',
      'Designed REST APIs and role-based dashboards for admin and staff',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT'],
    featured: true,
  },
  {
    title: 'A.S Car Rental System',
    description:
      'A car rental booking platform with vehicle availability and booking management.',
    highlights: [
      'A car rental booking platform with vehicle availability and booking management',
      'Implemented secure authentication and booking history tracking',
      'Added admin panel for fleet and pricing management',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT'],
    featured: true,
  },
  {
    title: 'Inventory Management System',
    description:
      'Developed a system to manage stock, suppliers, orders and product tracking.',
    highlights: [
      'Developed a system to manage stock, suppliers, orders and product tracking',
      'Implemented real-time stock updates and low stock alerts',
      'Optimized MongoDB queries for fast dashboard performance',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    featured: true,
  },
  {
    title: 'Restaurant Billing Application',
    description:
      'Built a POS billing system for restaurants with order and invoice management.',
    highlights: [
      'Built a POS billing system for restaurants with order and invoice management',
      'Implemented dynamic bill generation and daily sales reports',
      'Designed clean UI for fast cashier operations',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Samsung Refrigeration Service Center',
    description:
      'Service management system for handling customer repair requests.',
    highlights: [
      'Service management system for handling customer repair requests',
      'Implemented ticket tracking, technician assignment and status updates',
      'Built admin dashboard for service analytics and reports',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT'],
    featured: true,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <span className="text-primary font-mono text-sm mb-4 block">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Featured projects that showcase my backend engineering capabilities
            </p>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="glass-card p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Folder className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-primary font-mono text-xs mb-1 block"> Projects</span>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-0.5">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary rounded-lg border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}