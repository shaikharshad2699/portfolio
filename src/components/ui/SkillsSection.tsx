import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python'],
    color: 'primary',
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Node.js', 'Express.js', 'React.js', 'Mongoose', 'Hono.js'],
    color: 'accent',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQL'],
    color: 'primary',
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Bitbucket', 'Jira', 'Postman', 'Jest'],
    color: 'accent',
  },
  {
    title: 'Authentication & Security',
    skills: ['JWT', 'Firebase Auth', 'Better Auth', 'RBAC'],
    color: 'primary',
  },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8">
            <span className="text-primary font-mono text-sm mb-4 block">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I've mastered to build performant, scalable backend systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all duration-300 ${category.color === 'primary'
                          ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                          : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20'
                        }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Beyond Code</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Agile Methodology', 'Code Review', 'API Documentation'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}