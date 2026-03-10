import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between h-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-[15px] font-extrabold text-[#0f172a] tracking-tight hover:opacity-70"
          >
            Ryan<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-[13px] font-medium text-[#6b7280] px-3 py-1.5 rounded-sm hover:text-[#0f172a] hover:bg-[#f8f9fb] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="#contact"
              className="btn-primary ml-2 text-[13px] px-4 py-1.5"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#0f172a] p-1"
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
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
        />
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-16 px-6 md:hidden">
          <div className="flex flex-col gap-1 mt-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-base font-medium text-[#6b7280] py-3 px-4 rounded-sm hover:bg-[#f8f9fb] hover:text-[#0f172a] transition-colors border-b border-black/[0.04]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary mt-4 w-full py-3"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
