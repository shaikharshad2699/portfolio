import { motion } from 'framer-motion';
import { Github, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Mail, href: 'mailto:arshad2699@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            Built with <Heart className="w-4 h-4 text-accent inline" /> by{' '}
            <span className="text-primary font-medium">Shaikh Arshad</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm font-mono"
          >
            © 2024
          </motion.p>
        </div>
      </div>
    </footer>
  );
}