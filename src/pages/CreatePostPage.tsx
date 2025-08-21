import React from 'react';
import BlogForm from '../components/BlogForm';
import type { BlogPost } from '../components/BlogPostCard';

interface CreatePostPageProps {
  onAddPost: (post: Omit<BlogPost, 'id'>) => void;
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ onAddPost }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Create Blog</h1>
      <BlogForm onAddPost={onAddPost} />
    </div>
  );
};

export default CreatePostPage;