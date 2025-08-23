'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vasu Bansal
            </span>
          </h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A passionate Backend Engineer with expertise in developing scalable and efficient backend systems and strong focus on writing clean, maintainable code.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="https://github.com/vasubansal1033"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/vasu-bansal-673030147/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300" />
            </a>
            <a
              href="mailto:vasubansal1998@gmail.com"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300" />
            </a>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}