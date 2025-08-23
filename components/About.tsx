'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              Backend Engineer with an interest in learning system internals and learning new things.
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am passionate about building scalable and efficient backend systems and strong focus on writing clean, maintainable code in a test-driven manner.
              Also, I am interested in improving developer productivity so keep exploring new tools and technologies to improve my productivity.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I also host a homelab where I am selfhosting services like Adguard, Vaultwarden, qBittorrent, YoutubeDL, Immich, HomeAssistant etc.
              I spend some of my free time, exploring and lurking on <b>r/selfhosted</b> and <b>r/homelab</b> subreddits.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">Mechanical Engineering + Aerospace Engineering (Double Major)</p>
                <p className="text-gray-500 text-sm">Was part of IITK Motorsports, pivoted to Software engineering in my final year.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                <p className="text-gray-600">Backend Development, System Internals, Problem Solving</p>
                <p className="text-gray-500 text-sm">Computer Science, Selfhosting, Anime, System internals</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <Image
                  src="/images/vasu.jpg"
                  alt="Vasu Bansal"
                  className="w-72 h-72 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-gray-200 group-hover:border-blue-400"
                  width={288}
                  height={288}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-6">
                  <p className="text-white text-center text-base font-medium">
                    That&apos;s me!
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <Image
                  src="/images/homelab.jpg"
                  alt="Vasu Bansal's Homelab"
                  className="w-72 h-72 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-gray-200 group-hover:border-blue-400"
                  width={288}
                  height={288}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-6">
                  <p className="text-white text-center text-base font-medium">
                    My homelab setup! There&apos;s a chance that you&apos;ll be getting served this page from the RaspberryPi in the background.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}