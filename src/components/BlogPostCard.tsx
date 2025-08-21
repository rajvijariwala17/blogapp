import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  onDelete: (id: string) => void; // --- ADD THIS PROP ---
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onDelete }) => {
  return (
  
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
     
      <button
        onClick={() => onDelete(post.id)}
        className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-500 transition-colors"
        aria-label="Delete post"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>

      <div className="h-40 bg-indigo-200"></div>

      <div className="p-6">
        <p className="text-sm font-semibold text-indigo-600 mb-2">
          By {post.author}
        </p>
        <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {post.content.substring(0, 120)}...
        </p>
        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;