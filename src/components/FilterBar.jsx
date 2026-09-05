export default function FilterBar({ categories, activeFilter, setActiveFilter, counts = {} }) {
  return (
    <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by category">
      {categories.map((cat) => {
        const isActive = activeFilter === cat;
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveFilter(cat)}
            className={`inline-flex items-center gap-2 rounded-pill border px-4 py-1.5 font-mono text-sm transition-all duration-300 ease-smooth ${
              isActive
                ? 'border-ocean bg-ocean text-white shadow-lift'
                : 'border-ocean/20 bg-surface text-cool hover:-translate-y-0.5 hover:border-ocean/50 hover:text-deep'
            }`}
          >
            {cat}
            {counts[cat] !== undefined && (
              <span
                className={`font-mono text-[10px] ${isActive ? 'text-white/70' : 'text-muted'}`}
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
