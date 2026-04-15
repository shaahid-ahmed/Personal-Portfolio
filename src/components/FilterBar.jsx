export default function FilterBar({ categories, activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveFilter(cat)}
          className={`font-mono text-sm px-4 py-1 border transition-colors ${
            activeFilter === cat 
              ? 'bg-ocean/20 border-ocean text-seafoam' 
              : 'border-ocean/20 text-cool hover:border-ocean hover:text-crisp'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}