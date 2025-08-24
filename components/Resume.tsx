'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'MTS-3',
      company: 'Nutanix',
      period: 'May 2025 - Present',
      description: [
        'Member of the NDB R&D team',
        'Part of the security and the SQL Server team',
        'Primary tech stack is Java/Springboot, PostgreSQL'
      ].join('. '),
    },
    {
      title: 'SDE-2',
      company: 'GoTo Financials(Gojek)',
      period: 'June 2022 - May 2025',
      description: [
        'Member of the OneKYC team',
        'Primary tech stack was Java/Springboot, Golang, Ruby on Rails, PostgreSQL, Kafka, Redis, Docker, Kubernetes',
        'Promoted from SDE-1 to SDE-2 in June 2024'
      ].join('. '),
    },
    {
      title: 'Analyst',
      company: 'Deloitte',
      period: 'June 2021 - June 2022',
      description: [
        'Member of the CogSpend team',
        'Primary tech stack was Java/Springboot and Python'
      ].join('. '),
    },
  ];

  const education = [
    {
      degree: 'Mechanical Engineering',
      school: 'Indian Institute of Technology Kanpur',
      period: '2016 - 2021',
      description: [
        'B.Tech in Mechanical Engineering and 2nd major in Aerospace Engineering',
        'Graduated with a CGPA of 7.8/10',
        'I was part of IITK Motorsports',
        'Resident of Hall-3'
      ].join('. '),
    },
  ];

  const certifications = [
    'Deep Learning Specialization by Andrew Ng on Coursera',
    'Git and Github Master Course',
    'The Complete Foundation Stock Trading Course'
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            <i>If you are a recruiter, please read. If you are a friend, please consider a referral. If you are a foe, you can still read and feel jealous.</i>
          </p>
          
          <motion.a
            href="/my-portfolio/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                  <div className="text-blue-600 font-semibold mb-2">{job.company}</div>
                  <div className="text-gray-500 text-sm mb-4">{job.period}</div>
                  <p className="text-gray-600">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Education */}
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="text-blue-600 font-semibold mb-2">{edu.school}</div>
                  <div className="text-gray-500 text-sm mb-4">{edu.period}</div>
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={cert} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}