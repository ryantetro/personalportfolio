import React, { useRef, useEffect, useState } from 'react';
import { Clock, Package, Trophy, GraduationCap, MapPin, Rocket } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { profile } from '../data/profile';

const StatCard: React.FC<{ label: string; value: number; suffix: string; icon: React.ElementType; delay: number; highlight?: boolean }> = ({
  label, value: end, suffix, icon: Icon, delay, highlight,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();
          const start = performance.now();
          const duration = 1800;
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} className={`card-sm text-center dark:bg-[#161922] dark:border-white/[0.06] ${highlight ? 'ring-1 ring-primary/20' : ''}`}>
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${highlight ? 'bg-primary/[0.1]' : 'bg-primary/[0.06]'}`}>
          <Icon size={18} className={highlight ? 'text-primary' : 'text-primary'} />
        </div>
        <div className="font-display text-3xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9] mb-1">
          {value}{suffix}
        </div>
        <div className="text-[#6b7280] dark:text-[#9ca3af] text-[13px]">{label}</div>
      </div>
    </ScrollReveal>
  );
};

const About: React.FC = () => {
  const stats = [
    { label: 'Years Building', value: 5, suffix: '+', icon: Clock },
    { label: 'Products Shipped', value: 14, suffix: '+', icon: Package },
    { label: 'National Titles', value: 5, suffix: '', icon: Trophy, highlight: true },
  ];

  return (
    <section id="about" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">01 &mdash; About</div>
          <h2 className="section-title dark:text-[#f1f5f9]">Who I am</h2>
          <p className="section-sub dark:text-[#9ca3af]">
            Engineer, founder, and BYU soccer national champion. I build AI products and startups.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>

        <ScrollReveal delay={0.15}>
        <div className="card dark:bg-[#161922] dark:border-white/[0.06]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {/* #8 — Differentiated bio text from Hero */}
              <p className="text-[#1a1d27] dark:text-[#e2e8f0] leading-relaxed mb-4">
                I'm drawn to the intersection of AI and real-world problems. Whether it's turning coach audio into athlete insights at PostGame AI, or building semantic search at Soar, I care most about shipping software that makes a measurable difference.
              </p>
              <p className="text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                Currently pursuing an <strong className="text-[#0f172a] dark:text-[#f1f5f9] font-semibold">M.S. in Information Systems</strong> at{' '}
                <strong className="text-[#0f172a] dark:text-[#f1f5f9] font-semibold">BYU Marriott School of Business</strong> and a recipient of the{' '}
                <strong className="text-[#0f172a] dark:text-[#f1f5f9] font-semibold">Sandbox Fellowship</strong> startup incubator program.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-sm dark:bg-[#1e2130] dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={14} className="text-primary" />
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Education</div>
                </div>
                <div className="text-[#1a1d27] dark:text-[#f1f5f9] text-sm font-medium">M.S. Information Systems &mdash; BYU (2026)</div>
                <div className="text-[#6b7280] dark:text-[#9ca3af] text-sm mt-1">B.S. Information Systems &mdash; BYU (2025)</div>
                <div className="text-[#6b7280] dark:text-[#9ca3af] text-sm mt-1">Sandbox Fellowship &mdash; BYU Startup Incubator</div>
              </div>
              <div className="card-sm dark:bg-[#1e2130] dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-primary" />
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Location</div>
                </div>
                <div className="text-[#1a1d27] dark:text-[#f1f5f9] text-sm font-medium">{profile.location}</div>
              </div>
              <div className="card-sm dark:bg-[#1e2130] dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket size={14} className="text-primary" />
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Current Focus</div>
                </div>
                <div className="text-[#1a1d27] dark:text-[#f1f5f9] text-sm font-medium">PostGame AI, Soar, Utah Innovation Fund</div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
