'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Pikachu GIF Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/my-portfolio/pikachu-run.gif"  // Add the basePath manually
            alt="Pikachu running"
            className="w-32 h-32 object-contain"
            animate={{ 
              y: [0, -10, 0],
              filter: progress > 80 ? [
                "brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                "brightness(1.2) drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))",
                "brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))"
              ] : "brightness(1)"
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 0.8, repeat: progress > 80 ? Infinity : 0 }
            }}
          />
        </motion.div>
        
        {/* Name */}
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Vasu Bansal
        </motion.h1>
        
        {/* Title */}
        <motion.p
          className="text-blue-300 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Software Engineer
        </motion.p>
        
        {/* Progress Bar */}
        <motion.div
          className="w-64 h-3 bg-slate-700 rounded-full mx-auto overflow-hidden border border-slate-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 via-blue-500 to-cyan-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          >
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 rounded-full opacity-50"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        
        {/* Loading Text */}
        <motion.p
          className="text-blue-300 mt-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {progress < 100 ? (
            <>Prepare for trouble! {Math.round(progress)}%</>
          ) : (
            <motion.span
              animate={{ color: ["#93c5fd", "#06b6d4", "#93c5fd"] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              Preparing for trouble...
            </motion.span>
          )}
        </motion.p>

        {/* Loading completion text */}
        {progress > 90 && (
          <motion.p
            className="text-yellow-400 text-sm mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Gotta catch &apos;em all!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}