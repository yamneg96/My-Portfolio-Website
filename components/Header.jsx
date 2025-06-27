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
        <button onClick={toggleTheme} className="bg-gray-700 text-white px-4 py-2 rounded-lg">Toggle Theme</button>
      </div>

      <div>
        Hello there!
        <span className="text-sm text-gray-400">Welcome to my portfolio</span>
      </div>
    </header>
  );
}