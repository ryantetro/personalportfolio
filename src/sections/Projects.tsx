import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-16 px-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-[980px] mx-auto">
        <div className="section-label">03 &mdash; Projects</div>
        <h2 className="section-title">What I've built</h2>
        <p className="section-sub">
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
              className={`card group relative transition-all duration-200 hover:border-primary/30 ${
                project.status === 'in-progress'
                  ? 'border-primary/20 bg-gradient-to-br from-[#f8f9fb] to-[rgba(29,78,216,0.03)]'
                  : ''
              }`}
            >
              {project.status === 'in-progress' && (
                <div className="badge mb-4 text-[10px]">In Progress</div>
              )}

              <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-2 font-medium">
                {project.category}
              </div>

              <h3 className="font-display text-lg font-bold text-[#0f172a] mb-2">
                {project.title}
              </h3>

              <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((t, i) => (
                  <span key={i} className="tag text-[11px]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
