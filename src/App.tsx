import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import CreatePostPage from './pages/CreatePostPage';
import type { BlogPost } from './components/BlogPostCard';

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Getting Started with React',
      author: 'Rajvi Jariwala',
      content: 'This is the very first post on our brand new blog platform. We are excited to share amazing content with you.'
    },
     {
      id: '2',
      title: 'A Guide to Tailwind CSS',
      author: 'John Doe',
      content: 'Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design.'
    }
  ]);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: new Date().getTime().toString(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const deletePost = (idToDelete: string) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== idToDelete));
  };


  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/blog" 
            // --- PASS THE deletePost FUNCTION AS A PROP ---
            element={<BlogListPage posts={posts} onDeletePost={deletePost} />} 
          />
          <Route 
            path="/create-post" 
            element={<CreatePostPage onAddPost={addPost} />} 
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;