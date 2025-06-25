'use client';

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import type { BlogPost } from '../../utils/interfaces';

type Props = {
  post: BlogPost;
  contentComponent: React.ReactNode;
};

const BlogCard = ({ post, contentComponent }: Props) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev);
    setLikes(prev => prev + (liked ? -1 : 1));
  };

  return (
    <>
      <div className="relative border border-gray-700 dark:border-gray-300 rounded-xl p-4 hover:shadow-md transition bg-light-background dark:bg-dark-background">
        <button
          onClick={toggleLike}
          className="absolute right-4 top-4 text-xl flex items-center gap-1"
          aria-label="Toggle Like"
        >
          <FaHeart className={`${liked ? 'text-red-500' : 'text-gray-400'} transition`} />
          <span className="text-sm">{likes}</span>
        </button>

        <div onClick={() => setOpen(true)} className="cursor-pointer">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
            <img src="/light-avatar.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          <h2 className="text-xl font-semibold mb-1 text-light-text dark:text-dark-text">{post.title}</h2>
          <p className="text-gray-500 text-sm">{post.description}</p>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-[1000] flex justify-center items-center">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-black rounded shadow-lg overflow-y-auto p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-4 text-3xl font-bold text-white dark:text-gray-300"
            >
              &times;
            </button>
            {contentComponent}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
