import React from 'react';
// import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hey, I’m Yamlak 👋</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I’m a software engineering trainee based in Addis Ababa, turning ideas into clean, interactive digital experiences.
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Currently shaping my full-stack and data science skills, from Reinforcement Learning to real-world UI design.
        </p>
        <a href="#projects" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-2xl text-lg shadow-lg transition-all duration-300">See My Work</a>
      </motion.div>
    </section>
  );
}