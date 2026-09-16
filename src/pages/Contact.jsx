import { useState } from 'react'
import emailjs from '@emailjs/browser'

// -----------------------------------------------------------------------
// EmailJS setup (free tier, no backend needed):
//   1. Create an account at https://www.emailjs.com
//   2. Add an "Email Service" (e.g. connect your Gmail) — copy its Service ID
//   3. Create an Email Template — copy its Template ID
//   4. Find your Public Key under Account > API Keys
//   5. Paste all three below.
// Until you fill these in, the form will just show an error toast — the
// mailto: link underneath the form works immediately with no setup.
// -----------------------------------------------------------------------
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const YOUR_EMAIL = 'martinezjc1205@gmail.com'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('sent')
        e.target.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <div className="snap-container">
      <section className="snap-section flex flex-col justify-center px-6">
        <div className="mx-auto w-full max-w-xl">
          <p className="font-mono text-sm text-amber">contact</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
            Let's talk
          </h1>
          <p className="mt-4 text-ink-muted">
            Open to robotics, mechatronics, and mechanical engineering
            internships. The fastest way to reach me is the form below, or
            email me directly.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="font-mono text-xs text-ink-muted">
                name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                className="mt-1 w-full border border-panel-line bg-panel px-4 py-3 text-ink outline-none focus:border-amber"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs text-ink-muted">
                email
              </label>
              <input
                id="email"
                name="reply_to"
                type="email"
                required
                className="mt-1 w-full border border-panel-line bg-panel px-4 py-3 text-ink outline-none focus:border-amber"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs text-ink-muted">
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full border border-panel-line bg-panel px-4 py-3 text-ink outline-none focus:border-amber"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="border border-amber px-6 py-3 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-graphite disabled:opacity-50"
            >
              {status === 'sending' ? 'sending…' : 'send message'}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-sm text-amber">Message sent — thanks!</p>
            )}
            {status === 'error' && (
              <p className="font-mono text-sm text-ink-muted">
                Form isn't connected yet — email me directly at{' '}
                <a href={`mailto:${YOUR_EMAIL}`} className="text-amber hover:underline">
                  {YOUR_EMAIL}
                </a>{' '}
                instead.
              </p>
            )}
          </form>

          <p className="mt-6 font-mono text-sm text-ink-muted">
            or email directly:{' '}
            <a href={`mailto:${YOUR_EMAIL}`} className="text-amber hover:underline">
              {YOUR_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
