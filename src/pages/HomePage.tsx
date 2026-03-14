import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
// import CaseStudies from '../sections/Projects';
import Showcase from '../sections/Showcase';
import Skills from '../sections/Skills';
// import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      {/* <CaseStudies /> */}
      <Showcase />
      <Skills />
      {/* <Blog /> */}
      <Contact />
    </>
  );
};

export default HomePage;
