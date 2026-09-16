import PlaceholderImage from './PlaceholderImage'

// One full-viewport "block" for a single project — image on one side,
// write-up + spec sheet on the other. Alternates side on even/odd index
// so the page doesn't feel like a repeated template as you scroll.
export default function ProjectBlock({ project, index }) {
  const reversed = index % 2 === 1

  return (
    <section className="snap-section flex items-center border-b border-panel-line px-6 py-24">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center ${
          reversed ? 'md:[direction:rtl]' : ''
        }`}
      >
        <div className={`aspect-[4/3] ${reversed ? 'md:[direction:ltr]' : ''}`}>
          <PlaceholderImage
            src={project.image}
            alt={project.title}
            label={`drop a photo at ${project.image}`}
          />
        </div>

        <div className={reversed ? 'md:[direction:ltr]' : ''}>
          <p className="font-mono text-xs uppercase tracking-wide text-amber">{project.dates}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            {project.title}
          </h2>
          <p className="mt-1 text-ink-muted">{project.role}</p>

          <p className="mt-6 max-w-prose text-ink-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-panel-line bg-panel px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-panel-line pt-6">
            {project.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="font-mono text-[11px] text-ink-muted">{spec.label}</dt>
                <dd className="font-mono text-sm text-amber">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
