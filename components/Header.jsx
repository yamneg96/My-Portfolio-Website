import React from 'react';

export default function Header() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-gray-800">
      <h1 className="text-2xl font-bold">Yamlak Negash</h1>
      <div className="flex gap-4">
        <a href="/resume.pdf" className="text-teal-400 hover:underline" download>Download Résumé</a>
        <button onClick={toggleTheme} className="bg-gray-700 text-white px-4 py-2 rounded-lg">Toggle Theme</button>
      </div>
    </header>
  );
}