import { Fragment } from 'react'
import { PIPELINE, SKILL_GROUPS } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SpotlightCard } from './SpotlightCard'
import { TechChip } from './TechChip'

// Diagrama del flujo de datos con un punto de luz que recorre cada tramo.
function Pipeline() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
      {PIPELINE.map((stage, i) => (
        <Fragment key={stage.step}>
          <div className="flex-1 rounded-2xl border border-line bg-white/[0.02] p-4">
            <p className="font-mono text-xs text-brand-2">0{i + 1}</p>
            <p className="mt-1 font-display font-semibold">{stage.step}</p>
            <p className="text-sm text-muted">{stage.detail}</p>
          </div>
          {i < PIPELINE.length - 1 && (
            <div aria-hidden className="relative hidden w-8 shrink-0 self-center sm:block">
              <div className="h-px w-full bg-line" />
              <span
                className="animate-flow absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-2 shadow-[0_0_10px_2px] shadow-brand-2/60"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Habilidades"
        title="Lo que hago y con qué lo hago"
        description="Datos, IA y frontend: el recorrido completo, desde la fuente hasta la pantalla."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={0.05 * i} className={group.featured ? 'md:col-span-2' : ''}>
            <SpotlightCard className="h-full p-7">
              {group.featured && (
                <span className="mb-4 inline-block rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
                  Especialidad principal
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
              <p className="mt-2 text-muted">{group.description}</p>
              {group.featured && <Pipeline />}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <TechChip key={tech.name} tech={tech} />
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
