import React from 'react';
import { Code2, Server, Brain, BarChart3, Terminal, Briefcase } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { skills } from '../data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  "Frontend & UI": Code2,
  "Backend & Cloud": Server,
  "AI & Agents": Brain,
  "Data & Analytics": BarChart3,
  "DevOps & Tools": Terminal,
  "Business & Strategy": Briefcase,
};

const Skills: React.FC = () => {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-16 px-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">05 &mdash; Skills</div>
          <h2 className="section-title">My toolkit</h2>
          <p className="section-sub">
            The technologies, tools, and skills I use to build and ship products.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([category, skillList], index) => {
            const Icon = categoryIcons[category];
            return (
              <ScrollReveal key={index} delay={index * 0.06}>
              <div className="rule-card">
                <div className="flex items-center gap-3 mb-3">
                  {Icon && (
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-primary" />
                    </div>
                  )}
                  <div>
                    <div className="font-mono text-[10px] text-primary font-medium uppercase tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-[15px] font-bold text-[#0f172a] leading-tight">
                      {category}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillList.map((skill, i) => (
                    <span key={i} className="tag text-[11px]">{skill}</span>
                  ))}
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
