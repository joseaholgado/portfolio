import type { Tech } from '../data'

export function TechChip({ tech }: { tech: Tech }) {
  const Icon = tech.icon
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-sm text-white/80">
      <Icon aria-hidden className="size-3.5" />
      {tech.name}
    </span>
  )
}
