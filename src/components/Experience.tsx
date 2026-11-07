import { motion } from 'motion/react'
import { Briefcase, GraduationCap } from 'lucide-react'
import { TIMELINE } from '../data'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Trayectoria" title="Experiencia y formación" />

      <div className="relative ml-5">
        <div aria-hidden className="absolute top-0 bottom-0 left-0 w-px bg-line" />
        <div aria-hidden className="absolute top-0 left-0 h-40 w-px bg-gradient-to-b from-brand-2 to-transparent" />

        <ol>
          {TIMELINE.map((item, i) => {
            const Icon = item.kind === 'work' ? Briefcase : GraduationCap
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className="relative pb-10 pl-10 last:pb-0"
              >
                <span
                  className={`absolute top-0 -left-5 grid size-10 place-items-center rounded-full border border-line bg-surface ${
                    item.kind === 'work' ? 'text-brand-2' : 'text-brand'
                  }`}
                >
                  <Icon className="size-4" aria-hidden />
                </span>
                <div className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    {item.date && <span className="font-mono text-sm text-muted">{item.date}</span>}
                  </div>
                  <p className="mt-1 text-white/80">{item.org}</p>
                  <p className="mt-3 text-muted">{item.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.techs.map((tech) => (
                      <li key={tech} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-xs text-white/70">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
