import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import { socialLinks } from '../data/social';

const footerIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1117] transition-colors duration-300">
      <Navigation />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </AnimatePresence>

      <footer
        className="py-10 px-6 dark:border-white/[0.06]"
        style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-[980px] mx-auto flex flex-col items-center gap-4">
          <div className="font-display text-sm font-bold text-[#0f172a] dark:text-[#f1f5f9]">
            Ryan<span className="text-primary">.</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((s, i) => {
              const Icon = footerIconMap[s.icon];
              return Icon ? (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-[#f8f9fb] dark:bg-[#161922] flex items-center justify-center text-[#6b7280] dark:text-[#9ca3af] hover:text-primary hover:border-primary/20 transition-all"
                >
                  <Icon size={15} />
                </a>
              ) : null;
            })}
          </div>

          <p className="text-[#9ca3af] text-[12px] flex items-center gap-1">
            &copy; {new Date().getFullYear()} Ryan Tetro. Built with{' '}
            <Heart size={11} className="text-primary" /> React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
