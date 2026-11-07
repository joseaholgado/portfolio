import { Code2, Users, Workflow } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const VALUES = [
  {
    icon: Workflow,
    title: 'Datos de principio a fin',
    text: 'Desde la extracción hasta el dashboard: entiendo todo el recorrido del dato.',
  },
  {
    icon: Code2,
    title: 'Código que se mantiene',
    text: 'Vengo del desarrollo de software: tests, buenas prácticas y automatización.',
  },
  {
    icon: Users,
    title: 'Más allá del código',
    text: 'He coordinado equipos bajo presión. Comunico con claridad y cuido el detalle.',
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Sobre mí" title="Del desarrollo web a la ingeniería de datos" />
          <Reveal delay={0.1} className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Empecé construyendo aplicaciones web con JavaScript, React y Angular. Después me especialicé
              oficialmente en <span className="text-white">Inteligencia Artificial y Big Data</span>, y hoy
              trabajo creando agentes de IA y automatizaciones en Viewnext.
            </p>
            <p>
              Esa mezcla es mi punto fuerte: sé mover, limpiar y modelar los datos, y también sé construir la
              interfaz con la que la gente los usa. Además, completé un bootcamp de ciberseguridad, así que
              tengo la seguridad presente desde el principio.
            </p>
          </Reveal>
        </div>

        <div className="grid content-center gap-4">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.1 * i} className="card flex gap-4 p-6">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand-2">
                <Icon className="size-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
