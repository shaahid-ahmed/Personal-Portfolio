"use client";

import { useEffect, useState } from "react";

const icons = {
  Education: (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  Experience: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  Research: (
    <>
      <path d="M9 2v2.71c0 .59-.2 1.14-.56 1.58l-5.6 6.8c-.5.6-.78 1.34-.78 2.12v2.79C2 19.1 2.9 20 4 20h16c1.1 0 2-.9 2-2v-2.79c0-.78-.28-1.52-.78-2.12l-5.6-6.8c-.36-.44-.56-.99-.56-1.58V2" />
      <path d="M9 2h6" />
      <path d="M9 16h6" />
      <path d="M14 2v6.5" />
    </>
  ),
  Teaching: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  Projects: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  Hackathons: (
    <>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </>
  ),
  Publications: <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />,
  Skills: <path d="M12 2l3 6 6 .5-4.5 4.5 1 6-5.5-3-5.5 3 1-6L3 8.5l6-.5z" />,
  Contact: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </>
  )
};

const navItems = Object.keys(icons).map((name) => ({ name, id: name.toLowerCase() }));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');

  // Scroll progress + condensed navbar state.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlighting.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ease-smooth ${
        scrolled
          ? 'border-ocean/15 bg-base/85 shadow-card backdrop-blur-xl'
          : 'border-transparent bg-base/40 backdrop-blur-md'
      }`}
    >
      {/* Reading progress */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-ocean to-seafoam transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight text-crisp transition-colors hover:text-ocean"
        >
          SAN<span className="text-ocean">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.name}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`rounded-pill px-3 py-1.5 font-mono text-[13px] transition-all duration-300 ease-smooth ${
                  isActive
                    ? 'bg-ocean/10 text-ocean'
                    : 'text-cool hover:bg-ocean/5 hover:text-ocean'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-1.5 text-cool transition-colors hover:bg-ocean/5 hover:text-ocean lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-ocean/15 bg-base/95 shadow-card backdrop-blur-xl lg:hidden">
          <div className="grid grid-cols-2 gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 font-mono text-sm transition-colors ${
                  active === item.id ? 'bg-ocean/10 text-ocean' : 'text-cool hover:bg-ocean/5'
                }`}
              >
                <span className="text-ocean">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[item.name]}
                  </svg>
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
