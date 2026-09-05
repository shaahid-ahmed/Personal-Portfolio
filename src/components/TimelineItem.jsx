function monogram(name = '') {
  return name
    .replace(/\(.*?\)/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function TimelineItem({ item, isLast = false }) {
  const org = item.institution || item.company;

  return (
    <div className={`group relative pl-10 ${isLast ? '' : 'pb-10'}`}>
      {/* Rail + node */}
      <span
        aria-hidden="true"
        className={`absolute left-[7px] top-3 h-full w-px bg-gradient-to-b from-ocean/35 via-ocean/15 to-transparent ${
          isLast ? 'hidden' : ''
        }`}
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-ocean/30 bg-surface transition-all duration-300 group-hover:border-ocean group-hover:shadow-glow"
      >
        <span className="h-[6px] w-[6px] rounded-full bg-ocean transition-transform duration-300 group-hover:scale-125" />
      </span>

      <div className="card-shell p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean/10 font-mono text-sm font-medium text-ocean sm:flex"
            >
              {monogram(org)}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold leading-snug text-crisp">{item.role}</h3>
              <p className="mt-1 font-mono text-sm text-ocean">{org}</p>
              {item.location && (
                <p className="mt-1 flex items-center gap-1.5 font-body text-xs text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {item.location}
                </p>
              )}
            </div>
          </div>

          <span className="shrink-0 self-start rounded-pill border border-ocean/15 bg-surface-alt px-3 py-1 font-mono text-xs text-muted">
            {item.date}
          </span>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-ocean/10 pt-5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start font-body text-sm leading-relaxed text-cool">
              <span aria-hidden="true" className="mr-3 mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ocean/50" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
