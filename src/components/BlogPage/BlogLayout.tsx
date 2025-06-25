import BlogCard from './BlogCard';
import PostPopup from './PostPopup';
import type { BlogPost } from '../../utils/interfaces';
import { motion } from 'framer-motion';

const fallbackPost: BlogPost = {
  id: 'fallback',
  title: 'My First Post',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde deleniti minima.',
  content: '/blog/fallback', // ignored for now, rendered as React component
  likes: 5,
  created_at: new Date().toISOString(),
};

const BlogLayout = () => {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 py-10"
    >
      <div className="space-y-6">
        <BlogCard post={fallbackPost} contentComponent={<PostPopup />} />
      </div>
    </motion.section>
  );
};

export default BlogLayout;
