export default function PublicationCard({ pub }) {
  return (
    <a 
      href={pub.url} 
      target="_blank" 
      rel="noreferrer"
      className="block p-6 bg-surface border border-ocean/20 hover:border-ocean transition-all duration-300 group"
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-display font-bold text-lg text-crisp group-hover:text-ocean transition-colors">
            {pub.title}
          </h3>
          <p className="font-mono text-sm text-cool mt-2">
            {pub.venue} • {pub.date}
          </p>
        </div>
        
        {/* Read Article Icon */}
        <div className="shrink-0 text-cool group-hover:text-ocean transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
      </div>
    </a>
  );
}