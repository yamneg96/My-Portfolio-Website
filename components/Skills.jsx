import React from 'react';

export default function Skills() {
  const skills = ['Dart', 'Java', 'Flutter', 'GoRouter', 'Retrofit', 'Tailwind CSS', 'AI & RL', 'XAI'];
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-700 px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}