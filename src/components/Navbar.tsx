import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <nav className="hidden md:flex md:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium ${
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/create-post"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium ${
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              CreateBlog
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium ${
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              AllBlogs
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;