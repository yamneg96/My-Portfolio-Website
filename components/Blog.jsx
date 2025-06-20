import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: 'Design Meets Logic',
      desc: 'Why design thinking and code structure go hand in hand—and how I applied both in the GreenLeaf project.',
    },
    {
      title: 'Getting Practical with Explainable AI',
      desc: "A beginner's journey through model interpretability and ethical AI design.",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <p className="text-gray-400 mb-12">Thoughts on code, creativity, and solving real-world problems.</p>
        <div className="space-y-8">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-gray-700 p-6 rounded-xl shadow-lg text-left">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-300">{post.desc}</p>
              <a href="#" className="text-teal-400 hover:underline mt-2 inline-block">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

