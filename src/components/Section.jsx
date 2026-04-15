export default function Section({ id, title, children }) {
  return (
    <section id={id} className="w-full pt-20 mt-[-20px]">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-display text-3xl font-bold text-crisp whitespace-nowrap">{title}</h2>
        <div className="h-[1px] w-full bg-ocean/20"></div>
      </div>
      {children}
    </section>
  );
}