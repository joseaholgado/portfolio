import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { PROFILE, PROJECTS, type ProjectCategory } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const FILTERS: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'data', label: 'Datos e IA' },
  { id: 'web', label: 'Desarrollo web' },
]

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all')
  const visible = PROJECTS.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Proyectos"
        title="Cosas que he construido"
        description="Pipelines de datos, agentes de IA y aplicaciones web. Todo el código está en GitHub."
      />

      <Reveal className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
              filter === f.id ? 'text-ink' : 'border border-line text-muted hover:text-white'
            }`}
          >
            {filter === f.id && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative font-medium">{f.label}</span>
          </button>
        ))}
      </Reveal>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-brand/10"
              >
                <div className="relative aspect-video overflow-hidden bg-surface-2">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs text-white/80 backdrop-blur">
                    {project.category === 'data' ? 'Datos e IA' : 'Web'}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-2"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <li key={tech} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-xs text-white/70">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <Reveal className="mt-10 text-center">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:bg-white/[0.06]"
        >
          <SiGithub className="size-4" aria-hidden />
          Ver más en GitHub
        </a>
      </Reveal>
    </section>
  )
}
