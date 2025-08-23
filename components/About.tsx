'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Languages & Frameworks', value: '15+' },
    { icon: Coffee, label: 'Projects Built', value: '25+' },
    { icon: Lightbulb, label: 'Technologies Mastered', value: '20+' },
    { icon: Users, label: 'Collaborative Projects', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Creative Full Stack Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate developer who loves turning complex problems into simple, 
              beautiful solutions. With expertise in modern web technologies, I build 
              applications that are not only functional but also provide exceptional user 
              experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My approach combines technical excellence with creative thinking. I believe 
              in writing clean, maintainable code and staying current with the latest 
              industry trends. Whether it's a sleek frontend interface or robust backend 
              architecture, I'm committed to delivering quality solutions.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">Computer Science & Engineering</p>
                <p className="text-gray-500 text-sm">Focus on Software Development & Data Structures</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                <p className="text-gray-600">Full Stack Development, UI/UX Design</p>
                <p className="text-gray-500 text-sm">Open Source Contributions • Problem Solving</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}