export default function SkillBadge({ skill }) {
  return (
    <span className="cursor-default rounded-pill border border-ocean/15 bg-surface px-4 py-2 font-mono text-sm text-cool shadow-card transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-ocean/50 hover:bg-ocean/5 hover:text-deep hover:shadow-lift">
      {skill}
    </span>
  );
}
