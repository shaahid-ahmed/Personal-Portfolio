export default function SkillBadge({ skill }) {
  return (
    <div className="font-mono text-sm text-crisp bg-surface border border-ocean/20 px-4 py-2 hover:border-ocean hover:text-seafoam transition-colors cursor-default">
      {skill}
    </div>
  );
}