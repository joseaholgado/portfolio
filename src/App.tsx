import { MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { TechMarquee } from './components/TechMarquee'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user": respeta la preferencia del sistema de reducir animaciones.
    <MotionConfig reducedMotion="user">
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
