// components/ScrollToTop.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 z-50 ${
        showButton ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
      }`}
    >
      <i className="ri-arrow-up-s-line text-white"></i>
    </button>
  );
}