import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Showcase from './sections/Showcase';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { socialLinks } from './data/social';
import './styles/input.css';

const footerIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Showcase />
      <Skills />
      <Contact />

      <footer className="py-10 px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-[980px] mx-auto flex flex-col items-center gap-4">
          <div className="font-display text-sm font-bold text-[#0f172a]">
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
                  className="w-9 h-9 rounded-lg border border-black/[0.06] bg-[#f8f9fb] flex items-center justify-center text-[#6b7280] hover:text-primary hover:border-primary/20 transition-all"
                >
                  <Icon size={15} />
                </a>
              ) : null;
            })}
          </div>

          <p className="text-[#9ca3af] text-[12px] flex items-center gap-1">
            &copy; {new Date().getFullYear()} Ryan Tetro. Built with <Heart size={11} className="text-primary" /> React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
