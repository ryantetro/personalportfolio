import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { experience } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">02 &mdash; Experience</div>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-sub">
            From founding startups to engineering AI platforms and analyzing investments.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-4 bottom-4 w-px bg-black/[0.08] hidden md:block" />

          <div className="flex flex-col gap-0">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="relative flex gap-6 md:gap-8 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className={`w-[35px] h-[35px] rounded-xl flex items-center justify-center z-10 ${
                      index === 0
                        ? 'bg-primary text-white'
                        : 'bg-[#f0f1f5] border border-black/[0.08] text-[#6b7280]'
                    }`}>
                      <Building2 size={14} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rule-card">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-mono text-[11px] text-primary font-medium uppercase tracking-wider">
                        {exp.duration}
                      </div>
                      {index === 0 && (
                        <span className="badge text-[9px] py-0.5 px-2">Current</span>
                      )}
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0f172a] mb-1">
                      {exp.position}
                    </h3>
                    <div className="text-[#6b7280] text-sm mb-3">{exp.company}</div>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.achievements.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
                        {exp.achievements.map((a, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-[#6b7280]">{a}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t, i) => (
                        <span key={i} className="tag text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
