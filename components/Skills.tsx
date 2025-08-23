'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Terminal,
  Layers,
  Zap,
  Shield,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: Code2, experience: 'Expert' },
        { name: 'Next.js', icon: Layers, experience: 'Advanced' },
        { name: 'TypeScript', icon: Code2, experience: 'Advanced' },
        { name: 'Tailwind CSS', icon: Globe, experience: 'Expert' },
        { name: 'Vue.js', icon: Code2, experience: 'Intermediate' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: Server, experience: 'Expert' },
        { name: 'Python', icon: Terminal, experience: 'Advanced' },
        { name: 'PostgreSQL', icon: Database, experience: 'Advanced' },
        { name: 'MongoDB', icon: Database, experience: 'Advanced' },
        { name: 'GraphQL', icon: Zap, experience: 'Intermediate' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Docker', icon: Layers, experience: 'Advanced' },
        { name: 'AWS', icon: Cloud, experience: 'Advanced' },
        { name: 'Git', icon: GitBranch, experience: 'Expert' },
        { name: 'CI/CD', icon: Zap, experience: 'Advanced' },
        { name: 'Kubernetes', icon: Cpu, experience: 'Intermediate' },
      ],
    },
  ];

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Expert':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
              >
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4 flex-1">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                        }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <SkillIcon className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="text-gray-800 font-medium">{skill.name}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getExperienceColor(skill.experience)}`}>
                          {skill.experience}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Redux', 'Jest', 
              'Cypress', 'Webpack', 'Vite', 'Firebase', 'Supabase', 
              'Prisma', 'tRPC', 'Zustand', 'Framer Motion'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                className="px-3 py-2 sm:px-4 bg-white border border-gray-200 rounded-full text-sm sm:text-base text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 cursor-default hover:shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}