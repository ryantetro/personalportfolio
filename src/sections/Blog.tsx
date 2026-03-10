import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blog';

const categoryColors: Record<string, string> = {
  'AI & Product': '#1d4ed8',
  'Engineering': '#16a34a',
  'Startups': '#9333ea',
};

const Blog: React.FC = () => {
  return (
    <section id="writing" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">06 &mdash; Writing</div>
          <h2 className="section-title dark:text-[#f1f5f9]">Thoughts & lessons</h2>
          <p className="section-sub dark:text-[#9ca3af]">
            On building AI products, startup engineering, and lessons learned the hard way.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => {
            const accentColor = categoryColors[post.category] || '#1d4ed8';
            return (
              <ScrollReveal key={post.slug} delay={index * 0.08}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="card group block h-full transition-all duration-200 hover:border-primary/30 dark:bg-[#161922] dark:border-white/[0.06] dark:hover:border-primary/30 relative overflow-hidden"
                >
                  {/* #7 — Color accent bar per category */}
                  <div
                    className="absolute top-0 left-0 w-full h-[3px] rounded-t-[14px]"
                    style={{ background: accentColor }}
                  />

                  <div className="font-mono text-[10px] uppercase tracking-wider font-semibold mb-3" style={{ color: accentColor }}>
                    {post.category}
                  </div>
                  <h3 className="font-display text-[15px] font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6b7280] dark:text-[#9ca3af] text-[13px] leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-[11px] text-[#9ca3af]">
                      <span className="font-mono">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="w-px h-3 bg-black/[0.08] dark:bg-white/[0.08]" />
                      <span className="font-mono">{post.readingTime}</span>
                    </div>
                    <ArrowRight size={13} className="text-[#9ca3af] group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
