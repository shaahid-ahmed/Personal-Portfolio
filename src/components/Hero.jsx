"use client";

import { useState, useEffect } from 'react';

const socials = [
  {
    key: 'github',
    label: 'GitHub',
    href: (d) => d.github,
    external: true,
    path: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.04 5.04 0 0 0 19 5.92a5.9 5.9 0 0 0-.2-3.1s-1.5-.5-5 1.8a15.2 15.2 0 0 0-5.6 0c-3.5-2.3-5-1.8-5-1.8a5.9 5.9 0 0 0-.2 3.1 5.04 5.04 0 0 0-1.7 1.8c0 5.77 3.34 6.79 6.5 7.17A4.8 4.8 0 0 0 3 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    )
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: (d) => d.linkedin,
    external: true,
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    )
  },
  {
    key: 'email',
    label: 'Email',
    href: (d) => `mailto:${d.email}`,
    external: false,
    path: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    )
  }
];

export default function Hero({ data }) {
  const fullName = `${data.name}.`;
  // Starts empty on both server and client so hydration matches; the full name
  // is always present for screen readers and crawlers via the sr-only span.
  const [typed, setTyped] = useState('');
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInstant(true);
      return;
    }

    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      i += 1;
      setTyped(fullName.slice(0, i));
      if (i >= fullName.length) clearInterval(interval);
    }, 55);

    return () => clearInterval(interval);
  }, [fullName]);

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
      {/* Layer 1 - photograph, slowly drifting */}
      <div className="absolute inset-0 scale-110 animate-drift bg-[url('/beach.jpg')] bg-cover bg-center bg-no-repeat" />
      {/* Layer 2 - teal duotone over the photograph */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep/70 via-ocean/40 to-seafoam/25 mix-blend-multiply" />
      {/* Layer 3 - legibility scrim: solid where the text sits, clear where the photo shows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--base))_0%,rgb(var(--base)/0.93)_42%,rgb(var(--base)/0.35)_100%)]" />
      <div className="absolute inset-0 bg-base/45 md:bg-transparent" />
      {/* Layer 4 - accent bloom + vignette + fade into the page below */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgb(var(--seafoam)/0.20),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_0%,transparent_38%,rgb(var(--base))_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />

      <div className="relative z-10 mx-auto mt-16 w-full max-w-5xl px-6">
        {/* Status chip - the first thing a recruiter scans for */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-pill border border-ocean/25 bg-surface/70 px-4 py-1.5 shadow-card backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-seafoam opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ocean" />
          </span>
          <span className="font-mono text-xs font-medium tracking-wide text-deep">{data.status}</span>
        </div>

        <h1 className="mb-6 min-h-[1.15em] font-display text-5xl font-bold tracking-tight text-crisp md:text-7xl">
          <span aria-hidden="true">{instant ? fullName : typed}</span>
          <span aria-hidden="true" className="ml-0.5 animate-blink font-normal text-ocean">
            _
          </span>
          <span className="sr-only">{fullName}</span>
        </h1>

        <p className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-cool md:text-xl">
          {data.tagline}
        </p>

        {data.focus?.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2">
            {data.focus.map((item) => (
              <span
                key={item}
                className="rounded-pill border border-ocean/20 bg-surface/60 px-3 py-1 font-mono text-xs text-cool backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 font-mono text-sm">
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.href(data)}
              {...(social.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group inline-flex items-center gap-2 rounded-pill border border-ocean/25 bg-surface/70 px-5 py-2.5 font-medium text-deep shadow-card backdrop-blur-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-ocean hover:bg-ocean hover:text-white hover:shadow-lift"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {social.path}
              </svg>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#education"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ocean md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <svg
          className="animate-bob"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
