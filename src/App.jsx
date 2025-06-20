import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
// import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans transition-colors duration-500">
      <Header />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </motion.div>
    </div>
  );
}