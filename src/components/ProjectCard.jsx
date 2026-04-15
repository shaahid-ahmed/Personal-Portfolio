export default function ProjectCard({ project }) {
  return (
    <div className="bg-surface border-l-2 border-ocean/20 hover:border-ocean p-6 flex flex-col h-full group transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.1)]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-display font-bold text-xl text-crisp group-hover:text-ocean transition-colors">{project.title}</h3>
        {project.featured && <span className="text-[10px] uppercase tracking-wider font-mono bg-ocean/10 text-ocean px-2 py-1 border border-ocean/20">Featured</span>}
      </div>
      <p className="font-body text-cool text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map(tech => (
          <span key={tech} className="font-mono text-xs text-seafoam bg-seafoam/10 px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 font-mono text-sm border-t border-ocean/10 pt-4 mt-auto">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-cool hover:text-ocean transition-colors">GitHub ↗</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-cool hover:text-ocean transition-colors">Live Demo ↗</a>}
        {project.stars !== undefined && <span className="ml-auto text-cool">★ {project.stars}</span>}
      </div>
    </div>
  );
}