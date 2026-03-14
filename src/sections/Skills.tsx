import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Brain, BarChart3, Terminal, Zap, Rocket, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { skills } from '../data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  "Frontend & UI": Code2,
  "Backend & Cloud": Server,
  "AI & Intelligent Systems": Brain,
  "Data & Analytics": BarChart3,
  "DevOps & Tools": Terminal,
  "Automation & Systems": Zap,
  "Product & Startups": Rocket,
};

const Skills: React.FC = () => {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const categories = Object.entries(skills);

  const toggle = (category: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  return (
    <section id="skills" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">04 &mdash; Skills</div>
          <h2 className="section-title dark:text-[#f1f5f9]">My toolkit</h2>
          <p className="section-sub dark:text-[#9ca3af]">
            The technical founder skill map — from AI systems to product and startups.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-2">
          {categories.map(([category, skillList], index) => {
            const Icon = categoryIcons[category];
            const isOpen = open.has(category);
            return (
              <ScrollReveal key={category} delay={index * 0.04}>
                <div className="rule-card dark:bg-[#161922] dark:border-white/[0.06] overflow-hidden">
                  <button
                    onClick={() => toggle(category)}
                    className="w-full grid grid-cols-[36px_1fr_72px_24px] items-center gap-4 text-left py-1 -my-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon size={15} className="text-primary" />}
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] text-primary font-medium uppercase tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-display text-[15px] font-bold text-[#0f172a] dark:text-[#f1f5f9] leading-tight truncate">
                        {category}
                      </h3>
                    </div>
                    <span className="text-[#9ca3af] text-xs font-medium text-right">
                      {skillList.length} skills
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#9ca3af] w-5 flex justify-end"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-2 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap gap-1.5">
                          {skillList.map((skill, i) => (
                            <span key={i} className="tag text-[11px] dark:bg-[#1e2130] dark:border-white/[0.06] dark:text-[#9ca3af]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
