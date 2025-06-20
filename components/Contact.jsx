import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-8">Have a question, opportunity, or just want to say hello? Fill out the form below and I’ll get back to you soon.</p>
        <form action="#" method="POST" className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" required />
          <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" required></textarea>
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-2xl text-white text-lg shadow-lg transition-all duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
}