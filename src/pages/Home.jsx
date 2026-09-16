import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import projects from '../data/projects'

export default function Home() {
  return (
    <div className="snap-container">
      {/* Block 1 — Hero */}
      <section className="snap-section flex items-center px-6">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-sm text-amber">mechanical engineering / robotics</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-ink md:text-6xl">
              Javier Martinez
            </h1>
            <p className="mt-6 max-w-prose text-lg text-ink-muted">
              I design, fabricate, and troubleshoot the systems that make robots move —
              from poultry-house automation at GTRI to competition robots for
              RoboJackets BattleBots. B.S. Mechanical Engineering, Georgia Tech,
              expected May 2028.
            </p>
            <div className="mt-8 flex gap-4 font-mono text-sm">
              <Link
                to="/projects"
                className="border border-amber px-5 py-3 text-amber transition-colors hover:bg-amber hover:text-graphite"
              >
                view projects
              </Link>
              <Link
                to="/contact"
                className="border border-panel-line px-5 py-3 text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
              >
                get in touch
              </Link>
            </div>
          </div>

          {/* TODO: replace with a portrait or an action shot of you working on a robot */}
          <div className="aspect-[3/4]">
            <PlaceholderImage
              src="/images/misc/portrait.jpg"
              alt="Javier Martinez"
              label="drop a portrait at /images/misc/portrait.jpg"
            />
          </div>
        </div>
      </section>

      {/* Block 2 — Featured project strip */}
      <section className="snap-section flex flex-col justify-center border-t border-panel-line px-6">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-sm text-amber">selected work</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            Five projects, one common thread: things that had to actually work.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                to={`/projects#${project.id}`}
                className="group border border-panel-line bg-panel p-6 transition-colors hover:border-amber"
              >
                <p className="font-mono text-xs text-ink-muted">{project.dates}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink group-hover:text-amber">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-ink-muted">{project.description}</p>
              </Link>
            ))}
          </div>

          <Link
            to="/projects"
            className="mt-8 inline-block font-mono text-sm text-amber hover:underline"
          >
            see all projects →
          </Link>
        </div>
      </section>
    </div>
  )
}
