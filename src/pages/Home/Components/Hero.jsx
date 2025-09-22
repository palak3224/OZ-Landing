import React, { useEffect, useRef, useState } from 'react';

// Note: You need to make sure you have Swiper installed in your project
// This component assumes you have properly imported Swiper in your project
// If you're testing this in isolation, you might not see the slider until Swiper is properly set up

const HeroSection = () => {
  const [typedText, setTypedText] = useState('Mobile App & Web');
  const services = [
    'Mobile App & Web',
    'AI Solutions',
    'Cloud Computing',
    'UI/UX Design',
    'IoT Development',
    'DevOps Services'
  ];
  const serviceIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingSpeed = useRef(150);

  useEffect(() => {
    const typeWriter = () => {
      const currentService = services[serviceIndex.current];
      
      if (isDeleting.current) {
        // Deleting text
        setTypedText(currentService.substring(0, charIndex.current - 1));
        charIndex.current -= 1;
        typingSpeed.current = 75; // Faster when deleting
      } else {
        // Typing text
        setTypedText(currentService.substring(0, charIndex.current + 1));
        charIndex.current += 1;
        typingSpeed.current = 150; // Normal typing speed
      }
      
      // Change direction or move to next word
      if (!isDeleting.current && charIndex.current === currentService.length) {
        // Wait at full word
        isDeleting.current = true;
        typingSpeed.current = 1500; // Pause at end of word
      } else if (isDeleting.current && charIndex.current === 0) {
        // Move to next word
        isDeleting.current = false;
        serviceIndex.current = (serviceIndex.current + 1) % services.length;
        typingSpeed.current = 500; // Pause before typing next word
      }
      
      setTimeout(typeWriter, typingSpeed.current);
    };
    
    const typingTimer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Next-Gen Solutions For
            <br />
            <span className="text-lime-400">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10">
            We deliver customized IT services designed to elevate your brand and drive
            meaningful results.
          </p>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition duration-300">
            Explore Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Client Logo Slider - Static version that will work without Swiper */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
            <img src="/api/placeholder/150/60" alt="Eatoz" className="max-h-full max-w-full" />
          </div>
          <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
            <img src="/api/placeholder/150/60" alt="Plumbing" className="max-h-full max-w-full" />
          </div>
          <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
            <img src="/api/placeholder/150/60" alt="Tiffex" className="max-h-full max-w-full" />
          </div>
          <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
            <img src="/api/placeholder/150/60" alt="Solargram" className="max-h-full max-w-full" />
          </div>
          <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
            <img src="/api/placeholder/150/60" alt="Divyango" className="max-h-full max-w-full" />
          </div>
          <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
            <img src="/api/placeholder/150/60" alt="Healthgenie" className="max-h-full max-w-full" />
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;