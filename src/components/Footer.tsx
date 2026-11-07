import { ArrowUp } from 'lucide-react'
import { PROFILE } from '../data'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {YEAR} {PROFILE.name}. Hecho con React, TypeScript y Tailwind.
        </p>
        <a href="#inicio" className="inline-flex items-center gap-1.5 transition hover:text-white">
          Volver arriba <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  )
}
