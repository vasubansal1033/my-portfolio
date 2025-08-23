'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      
      // Handle audio loading errors
      audioRef.current.addEventListener('error', () => {
        setAudioError(true);
        console.log('Audio file not found, audio player will be hidden');
      });
      
      // Handle successful loading and attempt autoplay
      audioRef.current.addEventListener('canplaythrough', () => {
        setAudioError(false);
        // Attempt autoplay once audio is ready
        attemptAutoplay();
      });
    }
  }, []);

  const attemptAutoplay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
        console.log('Autoplay started successfully');
      } catch (error) {
        // Autoplay was prevented by browser
        console.log('Autoplay prevented by browser. User interaction required.');
        setIsPlaying(false);
        setAutoplayBlocked(true);
        
        // Clear the autoplay blocked indicator after 5 seconds
        setTimeout(() => {
          setAutoplayBlocked(false);
        }, 5000);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        }).catch((error) => {
          console.error('Play failed:', error);
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Don't render if audio file has an error
  if (audioError) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-4 right-4 z-40 flex flex-col items-end gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {/* Autoplay blocked notification */}
      {autoplayBlocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-amber-500/90 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg shadow-lg"
        >
          Click to enable audio
        </motion.div>
      )}
      
      <div className="flex gap-3">
        <button
          onClick={togglePlay}
          className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 group flex items-center justify-center ${
            autoplayBlocked ? 'animate-pulse border-amber-400' : ''
          }`}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
        {isPlaying ? (
          <div className="w-4 h-4 flex gap-1 items-center justify-center">
            <div className="w-1.5 h-4 bg-white rounded group-hover:bg-blue-300 transition-colors"></div>
            <div className="w-1.5 h-4 bg-white rounded group-hover:bg-blue-300 transition-colors"></div>
          </div>
        ) : (
          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5 group-hover:border-l-blue-300 transition-colors"></div>
        )}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? 
            <VolumeX className="w-4 h-4 text-white group-hover:text-blue-300 transition-colors" /> : 
            <Volume2 className="w-4 h-4 text-white group-hover:text-blue-300 transition-colors" />
          }
        </button>
      </div>
      
      <audio
        ref={audioRef}
        preload="auto"
        autoPlay
        muted={false}
      >
        {/* Primary audio source - your local file */}
        <source src="/audio/littleroot_town.m4a" type="audio/mp4" />
        {/* Fallback for when local file is not available */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </motion.div>
  );
}