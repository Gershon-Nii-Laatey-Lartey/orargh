import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopPicks from '../components/TopPicks';
import Footer from '../components/Footer';
import BrandMarquee from '../components/BrandMarquee';
import Features from '../components/Features';
import Essentials from '../components/Essentials';

import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <BrandMarquee />
        <TopPicks />
        <Essentials />
        <Features />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
