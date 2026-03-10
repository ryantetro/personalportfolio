import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .slide-in-left, .slide-in-right, .stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5, .stagger-6'
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};