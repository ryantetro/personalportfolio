import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const location = useLocation();
  const navigate = useNavigate();
  const { dark, toggle } = useThemeStore();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // #1 — Active section highlighting via IntersectionObserver
  const sectionIds = ['about', 'experience', 'projects', 'showcase', 'skills', 'writing', 'contact'];

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length > 0) {
      setActiveSection(visible[0].target.id);
    }
  }, []);

  useEffect(() => {
    if (!isHome) { setActiveSection(''); return; }
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome, handleIntersect]);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'skills', label: 'Skills' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    setMobileOpen(false);
  };

  const goHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/92 dark:bg-[#0f1117]/92 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between h-14">
          <button
            onClick={goHome}
            className="font-display text-[17px] font-extrabold text-[#0f172a] dark:text-[#f1f5f9] tracking-tight hover:opacity-70 transition-opacity"
          >
            Ryan<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-[13px] font-medium px-3 py-1.5 rounded-lg transition-colors relative ${
                  activeSection === l.id
                    ? 'text-primary bg-primary/[0.06]'
                    : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-[#f8f9fb] dark:hover:bg-[#161922]'
                }`}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6b7280] dark:text-[#9ca3af] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] hover:bg-[#f8f9fb] dark:hover:bg-[#161922] transition-colors ml-1"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary ml-2 text-[13px] px-4 py-1.5"
            >
              Get in touch
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f8f9fb] dark:hover:bg-[#161922] transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#0f172a] dark:text-[#f1f5f9] p-1"
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
        />
      </nav>

      {/* #6 — Animated mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-xl pt-16 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1 mt-4">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => scrollTo(l.id)}
                  className={`text-left text-base font-medium py-3 px-4 rounded-lg transition-colors border-b border-black/[0.04] dark:border-white/[0.04] ${
                    activeSection === l.id
                      ? 'text-primary bg-primary/[0.06]'
                      : 'text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f8f9fb] dark:hover:bg-[#161922] hover:text-[#0f172a] dark:hover:text-[#f1f5f9]'
                  }`}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollTo('contact')}
                className="btn-primary mt-4 w-full py-3"
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
