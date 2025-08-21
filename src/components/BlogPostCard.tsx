import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  onDelete: (id: string) => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
      <div className="h-40 bg-indigo-200"></div>
      <div className="p-6 relative">
        {/* Icons for Edit and Delete */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/edit-post/${post.id}`} className="p-2 rounded-full text-gray-400 hover:bg-blue-100 hover:text-blue-500">
            <PencilIcon className="h-5 w-5" />
          </Link>
          <button
            onClick={() => onDelete(post.id)}
            className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-500"
            aria-label="Delete post"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>

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