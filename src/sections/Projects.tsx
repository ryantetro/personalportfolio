import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { caseStudies } from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="flex items-end gap-6 mb-2">
            <div>
              <div className="section-label">03 - Case Studies</div>
              <h2 className="section-title dark:text-[#f1f5f9]">How I operate</h2>
            </div>
            <div className="hidden md:block mb-1">
              <span className="font-display text-4xl font-extrabold text-primary">{caseStudies.length}</span>
              <span className="text-[#9ca3af] text-[13px] ml-2 align-middle">personal narratives</span>
            </div>
          </div>
          <p className="section-sub dark:text-[#9ca3af]">
            The stories behind how I compete, build, and use AI to move faster.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card group relative overflow-hidden transition-all duration-200 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/[0.2]"
            >
              <div
                className="absolute inset-x-0 top-0 h-24 opacity-80 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(29,78,216,0.08) 0%, rgba(29,78,216,0) 100%)' }}
              />

              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3 font-semibold">
                  {study.category}
                </div>

                <div className="font-display text-[26px] md:text-[30px] font-extrabold text-[#0f172a] dark:text-[#f1f5f9] leading-none tracking-[-0.04em] mb-3">
                  {study.kicker}
                </div>

                {study.imageSlots?.[0] && (
                  study.imageSlots[0].src ? (
                    <div className="rounded-[14px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] aspect-[16/10] mb-4">
                      <img
                        src={study.imageSlots[0].src}
                        alt={study.imageSlots[0].alt || study.imageSlots[0].title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="rounded-[14px] border border-dashed border-primary/25 bg-gradient-to-br from-primary/[0.08] to-transparent dark:from-primary/[0.12] dark:to-transparent aspect-[16/10] mb-4 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/[0.12] text-primary mb-3">
                          <ImageIcon size={16} />
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1">
                          Planned Visual
                        </div>
                        <div className="text-sm font-semibold text-[#0f172a] dark:text-[#f1f5f9]">
                          {study.imageSlots[0].title}
                        </div>
                      </div>
                    </div>
                  )
                )}

                <h3 className="font-display text-xl font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                <p className="text-[#1a1d27] dark:text-[#cbd5e1] text-sm leading-relaxed mb-2">
                  {study.subtitle}
                </p>

                <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                <div className="card-sm !p-4 mb-4 bg-white/70 dark:bg-[#1b2030] border-black/[0.06] dark:border-white/[0.06]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1">
                    Proof
                  </div>
                  <div className="text-sm font-semibold text-[#0f172a] dark:text-[#f1f5f9]">
                    {study.highlight}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag) => (
                    <span key={tag} className="tag text-[11px] dark:bg-[#1e2130] dark:border-white/[0.06] dark:text-[#9ca3af]">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/case-study/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline"
                >
                  Read story <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
