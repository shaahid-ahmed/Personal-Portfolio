import Card from './Card';

export default function PublicationCard({ pub, index }) {
  return (
    <Card as="a" href={pub.url} target="_blank" rel="noreferrer" className="block">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {index != null && (
              <span className="font-mono text-[11px] text-ocean/60">
                [{String(index + 1).padStart(2, '0')}]
              </span>
            )}
            <span className="rounded-pill bg-ocean/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ocean">
              {pub.venue.startsWith('IEEE Access') ? 'Journal' : 'Conference'}
            </span>
            <span className="font-mono text-xs text-muted">{pub.date}</span>
          </div>

          <h3 className="font-display text-lg font-bold leading-snug text-crisp transition-colors group-hover:text-ocean">
            {pub.title}
          </h3>

          <p className="mt-2 font-body text-sm leading-relaxed text-cool">{pub.venue}</p>

          {pub.doi && (
            <p className="mt-3 font-mono text-xs text-muted">
              DOI <span className="text-cool">{pub.doi}</span>
            </p>
          )}
        </div>

        <span
          aria-hidden="true"
          className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ocean"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      </div>
    </Card>
  );
}
