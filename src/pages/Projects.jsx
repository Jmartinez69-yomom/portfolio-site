import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectBlock from '../components/ProjectBlock'
import projects from '../data/projects'

export default function Projects() {
  const { hash } = useLocation()

  // If arriving from a Home-page link like /projects#gtri, scroll that
  // project's block into view once the page has rendered.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <div className="snap-container">
      <section className="snap-section flex flex-col justify-center px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-amber">projects</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink md:text-5xl">
            Five projects. Scroll for the full spec sheet on each.
          </h1>
        </div>
      </section>

      {projects.map((project, index) => (
        <div id={project.id} key={project.id}>
          <ProjectBlock project={project} index={index} />
        </div>
      ))}
    </div>
  )
}
