import { motion } from 'motion/react'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { PROFILE, STATS, TECH } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import photo from '../assets/jose.webp'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

const FLOATING = [
  { tech: TECH.python, className: 'left-3 top-8 sm:-left-10 sm:top-10' },
  { tech: TECH.sql, className: 'right-3 top-1/3 sm:-right-8' },
  { tech: TECH.react, className: 'left-3 bottom-24 sm:-left-8 sm:bottom-16' },
]

export function Hero() {
  const role = useTypewriter(PROFILE.roles)

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Fondo: rejilla con máscara y halos de color */}
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <div aria-hidden className="absolute top-40 -right-40 size-[28rem] rounded-full bg-brand-2/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-white/80"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Abierto a nuevas oportunidades
          </motion.p>

          <motion.h1 {...fadeUp(0.1)} className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Hola, soy <br className="hidden sm:block" />
            <span className="text-gradient">{PROFILE.shortName}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-5 h-9 font-display text-2xl text-white/90 sm:text-3xl">
            <span className="sr-only">{PROFILE.roles.join(', ')}</span>
            <span aria-hidden>
              {role}
              <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-brand-2 align-middle">&nbsp;</span>
            </span>
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {PROFILE.pitch}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 font-medium text-ink shadow-lg shadow-brand/25 transition hover:shadow-brand/40"
            >
              Ver proyectos
              <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href={PROFILE.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 font-medium transition hover:bg-white/[0.08]"
            >
              <Download className="size-4" />
              Descargar CV
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {[
                { href: PROFILE.github, label: 'GitHub', Icon: SiGithub },
                { href: PROFILE.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
                { href: `mailto:${PROFILE.email}`, label: 'Email', Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full p-3 text-muted transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div aria-hidden className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/40 to-brand-2/30 blur-2xl" />
          <div className="gradient-border relative overflow-hidden rounded-[2rem] p-1.5">
            <img
              src={photo}
              alt="Jose Antonio Holgado"
              width={900}
              height={1350}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
            />
            <div className="absolute inset-x-1.5 bottom-1.5 rounded-b-[1.6rem] bg-gradient-to-t from-ink/90 to-transparent p-5 pt-16">
              <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
              <p className="flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="size-3.5" /> {PROFILE.location}
              </p>
            </div>
          </div>

          {FLOATING.map(({ tech, className }, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className={`absolute ${className}`}
            >
              <div
                className="animate-float flex items-center gap-2 rounded-2xl border border-line bg-surface-2/90 px-3 py-2 text-sm shadow-xl backdrop-blur"
                style={{ animationDelay: `${i * 1.2}s` }}
              >
                <tech.icon className="size-4 text-brand-2" aria-hidden />
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.6)} className="relative mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label} className="bg-ink p-6 text-center">
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
