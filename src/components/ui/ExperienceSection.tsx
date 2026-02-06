import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';





export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-10 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8">
            <span className="text-primary font-mono text-sm mb-4 block">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              My <span className="text-gradient">Experience</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                MERN Stack Developer — Broadstairs IT Solutions
              </h3>
              <p className="text-muted-foreground mb-6">
                📍 Pune | 🗓 June 2024 – Present
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                MERN Stack Developer with 1.7+ years of hands-on experience building scalable full-stack web applications. Successfully delivered 10+ real-world projects involving modern frontend, backend, database design, and deployment workflows.
              </p>

              <h4 className="text-lg font-semibold text-primary mb-4">Role & Responsibilities</h4>

              <div className="mb-6">
                <h5 className="text-base font-semibold text-foreground mb-3">Frontend Development</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Built responsive and user-friendly UI using React.js, Next.js, JavaScript and TypeScript
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Managed application state using Redux and Zustand
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Integrated backend APIs using React Query and Axios
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Styled modern UI using Tailwind CSS, Bootstrap, HTML and CSS
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-base font-semibold text-foreground mb-3">Backend Development</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Developed RESTful APIs using Node.js and Express.js
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Implemented secure authentication using JWT and Firebase Auth
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Designed and optimized MongoDB database schemas and queries
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Handled API validation, error handling and role-based access control
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-base font-semibold text-foreground mb-3">DevOps & Tools</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Used Git and GitHub for version control and team collaboration
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Containerized applications using Docker
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Worked with CI/CD pipelines for automated deployment
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    Tested APIs using Postman and documented using Swagger
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}