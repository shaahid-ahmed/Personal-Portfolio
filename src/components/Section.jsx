import Reveal from './Reveal';

export default function Section({ id, title, index, kicker, children }) {
  return (
    <section id={id} className="w-full">
      <Reveal>
        <div className="mb-8">
          <div className="flex items-baseline gap-4">
            {index != null && (
              <span className="font-mono text-sm font-medium text-ocean/70">
                {String(index).padStart(2, '0')}
              </span>
            )}
            <h2 className="whitespace-nowrap font-display text-3xl font-bold tracking-tight text-crisp md:text-4xl">
              {title}
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-ocean/35 via-ocean/15 to-transparent" />
          </div>
          {kicker && (
            <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-muted md:ml-10">
              {kicker}
            </p>
          )}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
