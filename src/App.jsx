import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <div>
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}
