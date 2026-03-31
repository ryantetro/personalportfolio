import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/social';
import MagneticButton from '../components/MagneticButton';

const HeroScene = lazy(() => import('../components/HeroScene'));

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const availability = profile.availability;

  return (
    <section className="relative overflow-hidden pt-14 border-b border-black/[0.06] dark:border-white/[0.06] min-h-[calc(100vh-56px)] flex flex-col">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div
        className="absolute -top-[60px] -right-[80px] w-[480px] h-[480px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-[980px] mx-auto px-6 py-[72px] pb-14 relative z-10 flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
            <div className="flex-1">
              {/* Availability badge */}
              {availability && (
                <div className="badge mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {availability.message}
                </div>
              )}

              <h1 className="mb-4 dark:text-[#f1f5f9]">
                Software engineer &<br />
                <span className="text-primary">startup founder.</span>
              </h1>

              <p className="max-w-[520px] text-[#6b7280] dark:text-[#9ca3af] text-base leading-relaxed mb-8">
                Software engineer, startup founder, collegiate athlete, and national champion shipping AI-powered products from zero to one. Currently building PostGame AI and winner of an entrepreneur pitch award.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <MagneticButton>
                  <a href="#showcase" className="btn-primary inline-flex items-center gap-2">
                    See my work <ArrowRight size={14} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#contact" className="btn-ghost dark:text-[#f1f5f9] dark:border-white/[0.12] dark:hover:bg-[#161922]">
                    Contact me
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="/Ryan%20Tetro%20Resume.docx"
                    download="Ryan Tetro Resume.docx"
                    className="btn-ghost inline-flex items-center gap-2 dark:text-[#f1f5f9] dark:border-white/[0.12] dark:hover:bg-[#161922]"
                  >
                    <Download size={14} /> Resume
                  </a>
                </MagneticButton>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-5 mb-8">
                {socialLinks.map((s, i) => {
                  const Icon = socialIconMap[s.icon];
                  return Icon ? (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-[#9ca3af] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ) : null;
                })}
                <span className="w-px h-4 bg-black/[0.08] dark:bg-white/[0.08]" />
                <a
                  href="mailto:ryantetro@gmail.com"
                  className="font-mono text-[11px] text-[#9ca3af] hover:text-primary transition-colors tracking-wide"
                >
                  ryantetro@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.tags?.map((tag, i) => (
                  <span key={i} className="tag dark:bg-[#1e2130] dark:border-white/[0.06] dark:text-[#9ca3af]">{tag}</span>
                ))}
              </div>
            </div>

            {/* Avatar with gradient ring + slight tilt */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg rotate-1 ring-2 ring-primary/20 dark:ring-primary/30">
                  <img
                    src={profile.avatar || '/avatar.png'}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* #5 — Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-6"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#9ca3af] dark:text-[#6b7280] hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
