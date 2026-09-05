/**
 * The single card shell every section reuses, so Education, Projects,
 * Hackathons and Publications share one border, radius, shadow and hover.
 */
export default function Card({ as: Tag = 'div', accent = false, className = '', children, ...rest }) {
  return (
    <Tag
      className={`group card-shell overflow-hidden p-6 ${
        accent ? 'bg-gradient-to-br from-surface to-surface-alt ring-1 ring-inset ring-ocean/10' : ''
      } ${className}`}
      {...rest}
    >
      {accent && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-ocean via-seafoam to-ocean/0"
        />
      )}
      {children}
    </Tag>
  );
}
