import BlogCard from './BlogCard';
import FallbackPost from './FirstPost/FallbackPost';
import type { BlogPost } from '../../utils/interfaces';

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
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="space-y-6">
        <BlogCard post={fallbackPost} contentComponent={<FallbackPost />} />
      </div>
    </section>
  );
};

export default BlogLayout;
