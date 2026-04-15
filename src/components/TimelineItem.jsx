export default function TimelineItem({ item }) {
  return (
    <div className="relative pl-8 pb-10 border-l border-ocean/20 last:pb-0 group">
      <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ocean group-hover:animate-pulse group-hover:shadow-[0_0_8px_rgba(13,148,136,0.6)] transition-all"></div>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
        <h3 className="font-display font-bold text-xl text-crisp">
          {item.role} <span className="text-ocean">@ {item.institution || item.company}</span>
        </h3>
        <span className="font-mono text-sm text-cool mt-1 md:mt-0">{item.date}</span>
      </div>
      <ul className="list-none space-y-2">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="font-body text-cool text-sm leading-relaxed flex items-start before:content-['▹'] before:text-ocean before:mr-3 before:font-mono">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}