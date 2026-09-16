import PlaceholderImage from '../components/PlaceholderImage'

// TODO: this whole page is a starting draft — rewrite the copy in your own
// voice. The structure (intro, education, skills grid) is meant to stay,
// but the sentences are placeholders pulled from what you've told me.
export default function About() {
  return (
    <div className="snap-container">
      <section className="snap-section flex items-center px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div className="aspect-square">
            <PlaceholderImage
              src="/images/misc/about.jpg"
              alt="Javier Martinez working in the shop"
              label="drop a shop/lab photo at /images/misc/about.jpg"
            />
          </div>
          <div>
            <p className="font-mono text-sm text-amber">about</p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
              I like it when a design decision gets tested by a machine, not just a
              simulation.
            </h1>
            <p className="mt-6 max-w-prose text-ink-muted">
              {/* TODO: replace with your own bio — a paragraph or two on how you
              got into mechanical engineering, what draws you to robotics
              specifically, and what kind of engineer you want to be. */}
              I'm a mechanical engineering student at Georgia Tech, focused on
              robotics. I've spent the last few years moving between class
              projects, a research assistantship, an industrial internship, and
              a competitive robotics team — and the thing that ties it together
              is wanting to see designs actually built and tested, not just
              modeled.
            </p>

            <div className="mt-10 border-t border-panel-line pt-6">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                education
              </p>
              <p className="mt-2 text-ink">
                B.S. Mechanical Engineering — Georgia Institute of Technology
              </p>
              <p className="font-mono text-sm text-ink-muted">
                June 2024 – May 2028 (Expected)
              </p>
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                skills
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'SolidWorks',
                  'Inventor',
                  'Fusion 360',
                  'Revit',
                  'OnShape',
                  '3D Printing',
                  'Lathe',
                  'Milling',
                  'Waterjet',
                  'CNC Mill',
                  'MATLAB',
                  'Arduino',
                  'C++',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-panel-line bg-panel px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
