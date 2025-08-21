import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import type { BlogPost } from '../components/BlogPostCard';

interface CreatePostPageProps {
  onAddPost: (post: Omit<BlogPost, 'id'>) => void;
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handleCreatePost = (data: Omit<BlogPost, 'id'>) => {
    onAddPost(data);
    navigate('/blog');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Create Blog</h1>
      <BlogForm onFormSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostPage;