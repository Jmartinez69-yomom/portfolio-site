// TODO: drop your resume PDF at public/resume/Javier_Martinez_Resume.pdf
// The download button below already points at that path — nothing else to
// wire up once the file is in place.
export default function Resume() {
  return (
    <div className="snap-container">
      <section className="snap-section flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm text-amber">resume</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink md:text-5xl">
          Full resume, one click away
        </h1>
        <p className="mt-4 max-w-prose text-ink-muted">
          The embedded preview below reads directly from your PDF — replace the
          file at <code className="font-mono text-amber">public/resume/Javier_Martinez_Resume.pdf</code>{' '}
          and this page updates automatically.
        </p>

        <a
          href="/resume/Javier_Martinez_Resume.pdf"
          download
          className="mt-8 border border-amber px-6 py-3 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-graphite"
        >
          download resume (pdf)
        </a>

        <div className="mt-12 h-[70vh] w-full max-w-3xl border border-panel-line bg-panel">
          <object
            data="/resume/Javier_Martinez_Resume.pdf"
            type="application/pdf"
            className="h-full w-full"
          >
            <p className="flex h-full items-center justify-center font-mono text-sm text-ink-muted">
              [ resume preview — add your PDF at public/resume/ to see it here ]
            </p>
          </object>
        </div>
      </section>
    </div>
  )
}
