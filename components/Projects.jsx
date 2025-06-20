import React from 'react';

export default function Projects() {
  const data = [
    {
      title: 'GreenLeaf: My Personal Herbarium',
      desc: 'Flutter app using Jetpack Compose with plant records & field observations.',
    },
    {
      title: 'Album List App',
      desc: 'Flutter MVVM app using BLoC, Retrofit, and GoRouter to fetch album data.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {data.map((proj, idx) => (
            <div key={idx} className="bg-gray-700 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.desc}</p>
              <a href="#" className="text-teal-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}