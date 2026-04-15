"use client"; // This tells Next.js we are using React hooks here

import { useState, useEffect } from 'react';

export default function Hero({ data }) {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = `${data.name}.`;

  useEffect(() => {
    let i = 0;
    // Clears the name when the component loads
    setDisplayedName(''); 
    
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Speed: 100 milliseconds per letter

    return () => clearInterval(typingInterval);
  }, [fullName]);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden">
      
{/* Background & Overlay */}
      <div className="absolute inset-0 bg-[url('/beach.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]"></div>
      
      {/* Changed max-w-5xl to max-w-7xl so your name aligns with Hackathons */}
      <div className="z-10 max-w-7xl mx-auto px-6 w-full mt-16 flex flex-col md:flex-row items-start md:items-center gap-12">
        
        {/* Text Content */}
        <div>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-slate-900 tracking-tight mb-4 drop-shadow-sm min-h-[1.2em]">
            {displayedName}
            <span className="animate-pulse text-ocean">_</span> {/* Blinking cursor */}
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-slate-800 font-bold max-w-2xl mb-8 leading-relaxed drop-shadow-md">
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap gap-8 font-mono text-sm font-bold">
            <a href={data.github} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-teal-900 hover:text-teal-700 transition-colors duration-300 drop-shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform duration-300">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.04 5.04 0 0 0 19 5.92a5.9 5.9 0 0 0-.2-3.1s-1.5-.5-5 1.8a15.2 15.2 0 0 0-5.6 0c-3.5-2.3-5-1.8-5-1.8a5.9 5.9 0 0 0-.2 3.1 5.04 5.04 0 0 0-1.7 1.8c0 5.77 3.34 6.79 6.5 7.17A4.8 4.8 0 0 0 3 18v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-teal-900 hover:text-teal-700 transition-colors duration-300 drop-shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform duration-300">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href={`mailto:${data.email}`} className="group flex items-center gap-2 text-teal-900 hover:text-teal-700 transition-colors duration-300 drop-shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform duration-300">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}