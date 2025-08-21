import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import type { BlogPost } from '../components/BlogPostCard';

interface EditPostPageProps {
  posts: BlogPost[];
  onUpdatePost: (post: BlogPost) => void;
}

const EditPostPage: React.FC<EditPostPageProps> = ({ posts, onUpdatePost }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const postToEdit = posts.find(post => post.id === id);

  if (!postToEdit) {
    return <div className="text-center text-red-500">Post not found!</div>;
  }

  const handleUpdatePost = (data: Omit<BlogPost, 'id'>) => {
    onUpdatePost({ ...data, id: postToEdit.id });
    navigate('/blog');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Edit Blog Post</h1>
      
      <BlogForm onFormSubmit={handleUpdatePost} initialData={postToEdit} />
    </div>
  );
};

export default EditPostPage;