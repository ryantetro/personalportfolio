import React from 'react';
import { Clock, Package, Trophy, GraduationCap, MapPin, Rocket } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { profile } from '../data/profile';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Building', value: '5+', icon: Clock },
    { label: 'Products Shipped', value: '14+', icon: Package },
    { label: 'National Titles', value: '5', icon: Trophy },
  ];

  return (
    <section id="about" className="py-16 px-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">01 &mdash; About</div>
          <h2 className="section-title">Who I am</h2>
          <p className="section-sub">
            Engineer, founder, and BYU soccer national champion. I build AI products and startups.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-sm text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/[0.06] mb-3">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-[#0f172a] mb-1">{s.value}</div>
                  <div className="text-[#6b7280] text-[13px]">{s.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15}>
        <div className="card">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#1a1d27] leading-relaxed mb-4">
                {profile.bio}
              </p>
              <p className="text-[#6b7280] leading-relaxed">
                Currently pursuing an <strong className="text-[#0f172a] font-semibold">M.S. in Information Systems</strong> at{' '}
                <strong className="text-[#0f172a] font-semibold">BYU Marriott School of Business</strong> and a recipient of the{' '}
                <strong className="text-[#0f172a] font-semibold">Sandbox Fellowship</strong> startup incubator program.
              </p>
            </div>
            <div className="space-y-4">
              <div className="card-sm">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={14} className="text-primary" />
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Education</div>
                </div>
                <div className="text-[#1a1d27] text-sm font-medium">M.S. Information Systems &mdash; BYU (2026)</div>
                <div className="text-[#6b7280] text-sm mt-1">B.S. Information Systems &mdash; BYU (2025)</div>
                <div className="text-[#6b7280] text-sm mt-1">Sandbox Fellowship &mdash; BYU Startup Incubator</div>
              </div>
              <div className="card-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-primary" />
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Location</div>
                </div>
                <div className="text-[#1a1d27] text-sm font-medium">{profile.location}</div>
              </div>
              <div className="card-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket size={14} className="text-primary" />
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Current Focus</div>
                </div>
                <div className="text-[#1a1d27] text-sm font-medium">PostGame AI, Soar, Utah Innovation Fund</div>
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
