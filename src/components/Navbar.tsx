import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const LINKS = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
]
// 'inicio' y 'contacto' se observan para que ningún enlace quede marcado en esas zonas.
const IDS = ['inicio', ...LINKS.map((l) => l.id), 'contacto']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand to-brand-2"
        style={{ scaleX: progress }}
      />
      <nav
        aria-label="Principal"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled || open ? 'border-line bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight" aria-label="Inicio">
          JA<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-white/90 md:inline-block"
        >
          Contacto
        </a>

        <button
          type="button"
          className="rounded-full p-2 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="card mx-auto mt-2 max-w-5xl space-y-1 bg-ink/95 p-3 md:hidden"
          >
            {[...LINKS, { id: 'contacto', label: 'Contacto' }].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-white/90 hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
