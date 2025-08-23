'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          <AudioPlayer />
          <Hero />
          <About />
          <Skills />

          <Resume />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}