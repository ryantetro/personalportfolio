import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { renderMarkdown } from '../utils/renderMarkdown';

const PlaceholderFigure: React.FC<{
  title: string;
  caption: string;
  layout?: 'wide' | 'square';
  src?: string;
  alt?: string;
}> = ({ title, caption, layout = 'wide', src, alt }) => (
  <figure>
    {src ? (
      <div
        className={`rounded-[18px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-[#f8f9fb] dark:bg-[#161922] ${
          layout === 'wide' ? 'aspect-[16/9]' : 'aspect-square'
        }`}
      >
        <img
          src={src}
          alt={alt || title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ) : (
      <div
        className={`rounded-[18px] border border-dashed border-primary/30 bg-gradient-to-br from-primary/[0.08] via-white to-[#f8f9fb] dark:from-primary/[0.12] dark:via-[#161922] dark:to-[#0f1117] flex items-center justify-center ${
          layout === 'wide' ? 'aspect-[16/9]' : 'aspect-square'
        }`}
      >
        <div className="text-center px-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/[0.12] text-primary mb-4">
            <ImageIcon size={20} />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2">
            Placeholder Image
          </div>
          <div className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-2">
            {title}
          </div>
        </div>
      </div>
    )}
    <figcaption className="text-sm leading-7 text-[#6b7280] dark:text-[#9ca3af] mt-3">
      {caption}
    </figcaption>
  </figure>
);

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((item) => item.slug === slug);
  const studyIndex = caseStudies.findIndex((item) => item.slug === slug);
  const nextStudy = caseStudies[studyIndex + 1];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
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
      <div className="max-w-[760px] mx-auto px-6 pt-28 pb-20">
        <Link
          to="/#case-studies"
          className="inline-flex items-center gap-2 text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to case studies
        </Link>

        <div className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold mb-3">
          {study.category}
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9] leading-[1.04] tracking-[-0.05em] mb-4">
          {study.title}
        </h1>

        <p className="text-[21px] leading-[1.7] text-[#1a1d27] dark:text-[#e2e8f0] mb-6">
          {study.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#9ca3af] mb-10">
          <span className="font-mono">{study.kicker}</span>
          <span className="w-px h-4 bg-black/[0.08] dark:bg-white/[0.08]" />
          <span className="flex items-center gap-1.5 font-mono">
            <Clock size={12} />
            {study.readingTime}
          </span>
        </div>

        <div className="rounded-[16px] border border-black/[0.08] dark:border-white/[0.08] bg-[#f8f9fb] dark:bg-[#161922] p-5 md:p-6 mb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2">
            In this story
          </div>
          <div className="text-base font-semibold text-[#0f172a] dark:text-[#f1f5f9] mb-3">
            {study.highlight}
          </div>
          <p className="text-[15px] leading-8 text-[#6b7280] dark:text-[#9ca3af] mb-5">
            {study.summary}
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9ca3af] mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-semibold text-[#0f172a] dark:text-[#f1f5f9]">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {study.imageSlots?.[0] && (
          <div className="mb-12">
            <PlaceholderFigure
              title={study.imageSlots[0].title}
              caption={study.imageSlots[0].caption}
              layout={study.imageSlots[0].layout}
              src={study.imageSlots[0].src}
              alt={study.imageSlots[0].alt}
            />
          </div>
        )}

        {study.callouts && study.callouts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-3 mb-12">
            {study.callouts.map((callout) => (
              <div key={callout.label} className="rule-card dark:bg-[#161922] dark:border-white/[0.06]">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2">
                  {callout.label}
                </div>
                <div className="text-base font-semibold leading-7 text-[#0f172a] dark:text-[#f1f5f9]">
                  {callout.text}
                </div>
              </div>
            ))}
          </div>
        )}

        <article className="prose-custom">
          {renderMarkdown(study.content)}
        </article>

        {study.imageSlots && study.imageSlots.length > 1 && (
          <section className="mt-14">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-3">
              Planned Visuals
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {study.imageSlots.slice(1).map((slot) => (
                <PlaceholderFigure
                  key={slot.title}
                  title={slot.title}
                  caption={slot.caption}
                  layout={slot.layout}
                  src={slot.src}
                  alt={slot.alt}
                />
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 pt-8 border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex flex-wrap gap-2 mb-8">
            {study.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <Link
              to="/#case-studies"
              className="btn-ghost inline-flex items-center gap-2 text-[13px]"
            >
              <ArrowLeft size={14} />
              All case studies
            </Link>
            {nextStudy && (
              <Link
                to={`/case-study/${nextStudy.slug}`}
                className="btn-ghost inline-flex items-center gap-2 text-[13px]"
              >
                Next story <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyPage;
