export default function HackathonCard({ hackathon }) {
  return (
    <div className="bg-surface p-6 border border-ocean/10 hover:border-ocean/40 transition-colors flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-display font-bold text-lg text-crisp">{hackathon.name}</h3>
        <span className="font-mono text-xs text-cool">{hackathon.date}</span>
      </div>
      <p className="text-ocean text-sm mb-4 font-mono">Partner: {hackathon.partner}</p>
      <p className="font-body text-cool text-sm leading-relaxed mb-6 flex-grow">
        {hackathon.metrics}
      </p>
      <div className="flex flex-wrap gap-2">
        {hackathon.techStack.map(tech => (
          <span key={tech} className="font-mono text-xs text-cool bg-navy px-2 py-1 border border-ocean/20">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}