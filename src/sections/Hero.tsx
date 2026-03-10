import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/social';

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative overflow-hidden pt-14" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div
        className="absolute -top-[60px] -right-[80px] w-[480px] h-[480px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-[980px] mx-auto px-6 py-[72px] pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
            <div className="flex-1">
              <div className="badge mb-6">Available for work</div>

              <h1 className="mb-4">
                Software engineer &<br />
                <span className="text-primary">startup founder.</span>
              </h1>

              <p className="max-w-[520px] text-[#6b7280] text-base leading-relaxed mb-8">
                {profile.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                  See my work <ArrowRight size={14} />
                </a>
                <a href="#contact" className="btn-ghost">
                  Contact me
                </a>
                <a
                  href="/Ryan_Tetro_Resume.pdf"
                  download
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <Download size={14} /> Resume
                </a>
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
                      className="text-[#9ca3af] hover:text-[#0f172a] transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ) : null;
                })}
                <span className="w-px h-4 bg-black/[0.08]" />
                <a
                  href={`mailto:${profile.name.toLowerCase().replace(' ', '')}@gmail.com`}
                  className="font-mono text-[11px] text-[#9ca3af] hover:text-primary transition-colors tracking-wide"
                >
                  ryantetro@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.tags?.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-black/[0.06] shadow-sm">
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
    </section>
  );
};

export default Hero;
