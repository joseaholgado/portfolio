import type { HTMLAttributes, MouseEvent } from 'react'

// Tarjeta con un halo de luz que sigue al ratón.
export function SpotlightCard({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div onMouseMove={onMove} className={`group card relative overflow-hidden ${className}`} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgb(129 140 248 / 0.12), transparent 60%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
