import { MARQUEE } from '../data'

// Cinta infinita de tecnologías. La lista va duplicada para que el bucle no se note.
export function TechMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Tecnologías"
    >
      <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...MARQUEE, ...MARQUEE].map((tech, i) => (
          <li
            key={i}
            aria-hidden={i >= MARQUEE.length}
            className="flex items-center gap-2.5 text-lg whitespace-nowrap text-white/50 transition hover:text-white"
          >
            <tech.icon className="size-6" aria-hidden />
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
