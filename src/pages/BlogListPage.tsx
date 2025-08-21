import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import type { BlogPost } from '../components/BlogPostCard';

interface BlogListPageProps {
  posts: BlogPost[];
  onDeletePost: (id: string) => void; 
}

const BlogListPage: React.FC<BlogListPageProps> = ({ posts, onDeletePost }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">AllBlogs</h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} onDelete={onDeletePost} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blog posts yet. Be the first to create one!</p>
      )}
    </div>
  );
};

export default BlogListPage;