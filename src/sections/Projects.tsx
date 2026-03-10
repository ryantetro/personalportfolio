import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        {/* #10 — Break the section header: lead with a stat */}
        <div className="flex items-end gap-6 mb-2">
          <div>
            <div className="section-label">03 &mdash; Projects</div>
            <h2 className="section-title dark:text-[#f1f5f9]">What I've built</h2>
          </div>
          <div className="hidden md:block mb-1">
            <span className="font-display text-4xl font-extrabold text-primary">{featured.length}</span>
            <span className="text-[#9ca3af] text-[13px] ml-2">featured projects</span>
          </div>
        </div>
        <p className="section-sub dark:text-[#9ca3af]">
          AI platforms, startups, and products shipped from zero to production.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`card group relative transition-all duration-200 dark:bg-[#161922] dark:border-white/[0.06] hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/[0.2] ${
                project.status === 'in-progress'
                  ? 'border-primary/20 bg-gradient-to-br from-[#f8f9fb] to-[rgba(29,78,216,0.03)] dark:from-[#161922] dark:to-[rgba(29,78,216,0.06)]'
                  : ''
              }`}
            >
              {project.status === 'in-progress' && (
                <div className="badge mb-4 text-[10px]">In Progress</div>
              )}

              <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-2 font-medium">
                {project.category}
              </div>

              <h3 className="font-display text-lg font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 5).map((t, i) => (
                  <span key={i} className="tag text-[11px] dark:bg-[#1e2130] dark:border-white/[0.06] dark:text-[#9ca3af]">{t}</span>
                ))}
              </div>

              {project.caseStudy && project.slug && (
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline"
                >
                  View Case Study <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
