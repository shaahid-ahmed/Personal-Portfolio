import Card from './Card';

export default function HackathonCard({ hackathon }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean"
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
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </span>
          <div>
            <h3 className="font-display text-lg font-bold leading-snug text-crisp transition-colors group-hover:text-ocean">
              {hackathon.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-ocean">with {hackathon.partner}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-pill border border-ocean/15 bg-surface-alt px-3 py-1 font-mono text-xs text-muted">
          {hackathon.date}
        </span>
      </div>

      <p className="mb-6 flex-grow font-body text-sm leading-relaxed text-cool">{hackathon.metrics}</p>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-ocean/10 pt-4">
        {hackathon.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-pill bg-seafoam/10 px-2.5 py-1 font-mono text-[11px] text-deep"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
}
