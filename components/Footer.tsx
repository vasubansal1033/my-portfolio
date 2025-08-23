'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/vasubansal1033', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vasu-bansal-673030147/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vasubansal1998@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vasu Bansal
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
              Passionate and greedy backend engineer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 group hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 group-hover:text-blue-300 transition-colors" />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 flex items-center justify-center">
              Crafted with <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" /> by Vasu Bansal and AI.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Vasu Bansal. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}