import { useState } from 'react'

// Renders `src` if it loads successfully. If the image is missing (which it
// will be until you drop your own photos into public/images/...), it falls
// back to a labeled placeholder block instead of a broken-image icon — so
// the layout always looks intentional while you're still filling in content.
export default function PlaceholderImage({ src, alt, label }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-2 border border-dashed border-panel-line bg-panel">
        <span className="font-mono text-xs text-ink-muted">[ image placeholder ]</span>
        {label && <span className="px-6 text-center font-mono text-xs text-amber">{label}</span>}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  )
}
