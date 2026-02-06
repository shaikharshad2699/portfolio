import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Zap } from 'lucide-react';

const stats = [
  { value: '1.5+', label: 'Years Experience', icon: Zap },
  { value: '25%', label: 'API Optimization', icon: Server },
  { value: '10+', label: 'Projects Delivered', icon: Code2 },
  { value: '100%', label: 'Code Coverage Focus', icon: Database },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-10 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8">

            <span className="text-primary font-mono text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creating Scalable  <span className="text-gradient">MERN Full-Stack Applications</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4">

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">MERN Full Stack Developer</span> with 1.5 years  of experience building scalable web applications.
                I specialize in <span className="text-primary">React.js, Next.js</span> and <span className="text-accent">Node.js, Express.js, MongoDB</span> to create
                secure, performance-focused solutions that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I focus on building <span className="text-primary">RESTful APIs</span>, optimizing <span className="text-accent">database performance</span>,
                and implementing clean architecture that solves real-world problems.
              </p>

              <div className="pt-2">
                <p className="text-sm font-mono mb-3 text-primary font-medium uppercase tracking-wide">Education</p>
                <div className="glass-card p-4 border-l-4 border-primary/40 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                  <p className="font-semibold text-foreground text-lg md:text-xl text-primary">M.Sc Computer Science</p>
                  <p className="text-muted-foreground text-sm">Dr. Babasaheb Ambedkar Marathwada University • 2020</p>
                  <p className="font-semibold text-foreground text-lg md:text-xl text-primary">Certification</p>
                  <p className="text-muted-foreground text-sm">MERN Full Stack Developer-Seven Mentor & Training Pvt.Ltd • 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
                >
                  {(() => {
                    const Icon = stat.icon;
                    return (
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    );
                  })()}
                  <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}