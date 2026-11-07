import { Reveal } from './Reveal'

type Props = { eyebrow: string; title: string; description?: string }

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm tracking-wider text-brand-2 uppercase">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-pretty text-muted">{description}</p>}
    </Reveal>
  )
}
