import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { experience } from '../data/experience';

// #9 — Company favicons/logos instead of generic Building2 icon
const companyLogos: Record<string, { favicon?: string; color: string; letter: string }> = {
  'PostGame AI': { favicon: 'https://www.getpostgame.ai/apple-touch-icon.png', color: '#2563eb', letter: 'P' },
  'Soar (AI Technology Startup)': { color: '#0f172a', letter: 'S' },
  'Utah Innovation Fund': { color: '#16a34a', letter: 'U' },
  'Brandless (Healthcare Technology)': { color: '#7c3aed', letter: 'B' },
};

const CompanyIcon: React.FC<{ company: string; isCurrent: boolean }> = ({ company, isCurrent }) => {
  const logo = companyLogos[company];
  const [imgErr, setImgErr] = useState(false);

  if (logo?.favicon && !imgErr) {
    return (
      <div className={`w-[35px] h-[35px] rounded-xl flex items-center justify-center z-10 overflow-hidden border ${
        isCurrent ? 'border-primary/30 ring-2 ring-primary/20' : 'border-black/[0.08] dark:border-white/[0.08]'
      }`}>
        <img
          src={logo.favicon}
          alt=""
          width={22}
          height={22}
          className="rounded object-contain"
          onError={() => setImgErr(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-[35px] h-[35px] rounded-xl flex items-center justify-center z-10 text-white text-xs font-bold ${
        isCurrent ? 'ring-2 ring-primary/20' : ''
      }`}
      style={{ background: logo?.color || '#6b7280' }}
    >
      {logo?.letter || company.charAt(0)}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">02 &mdash; Experience</div>
          <h2 className="section-title dark:text-[#f1f5f9]">Where I've worked</h2>
          <p className="section-sub dark:text-[#9ca3af]">
            From founding startups to engineering AI platforms and analyzing investments.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-4 bottom-4 w-px bg-black/[0.08] dark:bg-white/[0.08] hidden md:block" />

          <div className="flex flex-col gap-0">
            {experience.map((exp, index) => {
              const isCurrent = index === 0 || (index === 1 && exp.duration.includes('Present'));
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="relative flex gap-6 md:gap-8 pb-8 last:pb-0">
                    {/* Timeline dot / company icon */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <CompanyIcon company={exp.company} isCurrent={index === 0} />
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 rule-card dark:bg-[#161922] dark:border-white/[0.06] ${index === 0 ? 'ring-1 ring-primary/10' : ''}`}>
                      <div className="flex items-center gap-3 mb-2">
                        {/* Mobile company icon */}
                        <div className="md:hidden flex-shrink-0">
                          <CompanyIcon company={exp.company} isCurrent={index === 0} />
                        </div>
                        <div>
                          <div className="font-mono text-[11px] text-primary font-medium uppercase tracking-wider">
                            {exp.duration}
                          </div>
                          {isCurrent && (
                            <span className="badge text-[9px] py-0.5 px-2 mt-1 inline-flex">Current</span>
                          )}
                        </div>
                      </div>
                      <h3 className="font-display text-base font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-1">
                        {exp.position}
                      </h3>
                      <div className="text-[#6b7280] dark:text-[#9ca3af] text-sm mb-3">{exp.company}</div>
                      <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {exp.achievements.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
                          {exp.achievements.map((a, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-[#6b7280] dark:text-[#9ca3af]">{a}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((t, i) => (
                          <span key={i} className="tag text-[11px] dark:bg-[#1e2130] dark:border-white/[0.06] dark:text-[#9ca3af]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
