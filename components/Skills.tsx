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
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Java/Springboot', icon: Server, experience: '4+ years', comment: 'Primary and preferred stack for me' },
        { name: 'Golang', icon: Terminal, experience: '3 years', comment: 'Mostly used for side projects and used at work' },
        { name: 'PostgreSQL', icon: Database, experience: '4+ years', comment: 'Primary database at work' },
        { name: 'Redis', icon: Database, experience: '3 years', comment: 'Worked and familiar with internals' },
        { name: 'Kafka', icon: Database, experience: '3 years', comment: 'Worked and familiar with internals' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Docker', icon: Layers, experience: '3 years', comment: 'Use daily for development and deployment and familiar with internals' },
        { name: 'Git', icon: GitBranch, experience: '5+ years', comment: 'Used daily for version control and familiar with internals' },
        { name: 'CI/CD', icon: Zap, experience: '2 years', comment: 'Jenkins, CircleCI. Have some idea' },
        { name: 'Kubernetes', icon: Cpu, experience: '3 years', comment: 'Used at work and familiar with architecture and internals' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Tailwind CSS', icon: Code2, experience: 'N/A', comment: 'No professional experience but have used for side projects, using Google search and AI tools.' },
      ],
    }
  ];

  const getExperienceColor = (experience: string) => {
    if (experience.includes('5+')) return 'bg-green-100 text-green-800 border-green-200';
    if (experience.includes('4+')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (experience.includes('3')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (experience.includes('2')) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
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
            Here&apos;s my flex board (pun intended!)
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
                        className="group/skill flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative"
                      >
                        <div className="flex items-center">
                          <SkillIcon className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="text-gray-800 font-medium">{skill.name}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getExperienceColor(skill.experience)}`}>
                          {skill.experience}
                        </span>
                        
                        {/* Tooltip */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-2 transform -translate-y-full opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none z-10">
                          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white text-sm rounded-lg py-2.5 px-4 shadow-xl backdrop-blur-sm border border-gray-700/50">
                            {skill.comment}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-gray-900 border-r border-b border-gray-700/50"></div>
                          </div>
                        </div>
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
              'gRPC', 'bash', 'Javascript', 'SQL', 'Linux', 'Ruby on Rails'
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