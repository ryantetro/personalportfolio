import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects.find(
    (p, i) => i > projectIndex && p.caseStudy
  );

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[780px] mx-auto px-6 pt-28 pb-20">
        {/* Back nav */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold mb-3">
            {project.category}
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9] leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-[#6b7280] dark:text-[#9ca3af] text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-3 mt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-[13px]"
              >
                Visit site <ExternalLink size={13} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 text-[13px]"
              >
                <Github size={14} /> Source code
              </a>
            )}
            {project.status === 'in-progress' && (
              <span className="badge text-[10px]">In Progress</span>
            )}
          </div>
        </div>

        {/* Problem */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-3">
            The Problem
          </h2>
          <p className="text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
            {cs.problem}
          </p>
        </div>

        {/* Approach & Solution */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-3">
            Approach & Solution
          </h2>
          <p className="text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-4">
            {cs.approach}
          </p>
          <p className="text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
            {cs.solution}
          </p>
        </div>

        {/* Tech Decisions */}
        {cs.techDecisions && cs.techDecisions.length > 0 && (
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-4">
              Key Technical Decisions
            </h2>
            <div className="space-y-3">
              {cs.techDecisions.map((decision, i) => (
                <div key={i} className="card-sm">
                  <div className="font-display text-sm font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-1">
                    {decision.title}
                  </div>
                  <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {cs.results && cs.results.length > 0 && (
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-4">
              Results & Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {cs.results.map((result, i) => (
                <div key={i} className="card-sm text-center">
                  <div className="font-display text-2xl font-extrabold text-primary mb-1">
                    {result.metric}
                  </div>
                  <div className="text-[#6b7280] dark:text-[#9ca3af] text-[13px]">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next project nav */}
        <div
          className="mt-16 pt-8 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <Link
            to="/"
            className="btn-ghost inline-flex items-center gap-2 text-[13px]"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              className="btn-ghost inline-flex items-center gap-2 text-[13px]"
            >
              {nextProject.title} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCaseStudy;
