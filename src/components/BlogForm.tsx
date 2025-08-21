import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { BlogPost } from './BlogPostCard';


const postSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long." }),
  author: z.string().min(2, { message: "Author name must be at least 2 characters long." }),
  content: z.string().min(10, { message: "Content must be at least 10 characters long." }),
});


type FormData = z.infer<typeof postSchema>;

interface BlogFormProps {
  onFormSubmit: (data: FormData) => void;
  initialData?: BlogPost;
}

const BlogForm: React.FC<BlogFormProps> = ({ onFormSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(postSchema),
    defaultValues: initialData || { title: '', author: '', content: '' },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border">
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            {...register('title')}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="author" className="block text-lg font-medium text-gray-700">
            Author Name
          </label>
          <input
            id="author"
            {...register('author')}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            rows={10}
            {...register('content')}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {initialData ? 'Update Post' : 'Publish Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;