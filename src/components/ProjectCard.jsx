import Card from './Card';

export default function ProjectCard({ project }) {
  return (
    <Card accent={project.featured} className="flex h-full flex-col">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold leading-snug text-crisp transition-colors group-hover:text-ocean">
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-pill bg-ocean/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ocean">
            Featured
          </span>
        )}
      </div>

      {project.date && (
        <p className="mb-4 font-mono text-xs text-muted">{project.date}</p>
      )}

      <p className="mb-6 flex-grow font-body text-sm leading-relaxed text-cool">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-pill bg-seafoam/10 px-2.5 py-1 font-mono text-[11px] text-deep"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-5 border-t border-ocean/10 pt-4 font-mono text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-cool transition-colors hover:text-ocean"
          >
            GitHub
            <span aria-hidden="true" className="transition-transform duration-300 hover:translate-x-0.5">↗</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-cool transition-colors hover:text-ocean"
          >
            Live Demo <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.stars !== undefined && (
          <span className="ml-auto inline-flex items-center gap-1 text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3 6.5 7 .9-5 4.8 1.2 7-6.2-3.4L5.8 21 7 14.2 2 9.4l7-.9z" />
            </svg>
            {project.stars}
          </span>
        )}
      </div>
    </Card>
  );
}
