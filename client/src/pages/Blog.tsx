import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Getting Started with React and TypeScript',
      date: 'March 1, 2024',
      excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
      category: 'Development'
    },
    {
      title: 'Building Scalable Web Applications',
      date: 'February 15, 2024',
      excerpt: 'Explore strategies and patterns for building web applications that can handle growth.',
      category: 'Architecture'
    },
    {
      title: 'The Future of Web Development',
      date: 'February 1, 2024',
      excerpt: 'A look at emerging trends and technologies shaping the future of web development.',
      category: 'Trends'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog; 