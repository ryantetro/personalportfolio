import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { renderMarkdown } from '../utils/renderMarkdown';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[680px] mx-auto px-6 pt-28 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold mb-3">
          {post.category}
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9] leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-[13px] text-[#9ca3af] mb-10">
          <span className="font-mono">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="w-px h-4 bg-black/[0.08] dark:bg-white/[0.08]" />
          <span className="flex items-center gap-1.5 font-mono">
            <Clock size={12} />
            {post.readingTime}
          </span>
        </div>

        <article className="prose-custom">
          {renderMarkdown(post.content)}
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <Link
            to="/"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;
