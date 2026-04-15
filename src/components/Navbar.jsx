"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: 'Education',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      )
    },
    {
      name: 'Experience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      name: 'Research',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 2v2.71c0 .59-.2 1.14-.56 1.58l-5.6 6.8c-.5.6-.78 1.34-.78 2.12v2.79C2 19.1 2.9 20 4 20h16c1.1 0 2-.9 2-2v-2.79c0-.78-.28-1.52-.78-2.12l-5.6-6.8c-.36-.44-.56-.99-.56-1.58V2"/>
          <path d="M9 2h6"/><path d="M9 16h6"/><path d="M14 2v6.5"/>
        </svg>
      )
    },
    {
      name: 'Teaching',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      name: 'Projects',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      name: 'Publications',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        </svg>
      )
    },
    {
      name: 'Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3 6 6 .5-4.5 4.5 1 6-5.5-3-5.5 3 1-6L3 8.5l6-.5z"/>
        </svg>
      )
    }
  ];
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-ocean/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl tracking-tight text-crisp hover:text-ocean transition-colors">SAN.</a>
        
        {/* Desktop Links (Hidden on mobile) */}
        <div className="hidden md:flex gap-4">
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={`#${item.name.toLowerCase()}`} 
              className="group flex items-center gap-1.5 font-mono text-[13px] text-cool hover:text-ocean transition-colors"
            >
              <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cool hover:text-crisp focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> 
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> 
            )}
          </svg>
        </button>
        
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-lg border-b border-ocean/10 shadow-lg absolute w-full left-0 top-16">
          <div className="px-6 pt-4 pb-8 flex flex-col gap-6">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={`#${item.name.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                className="flex items-center gap-3 font-mono text-[15px] text-cool hover:text-ocean transition-colors"
              >
                <span className="text-ocean">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
