import { useEffect, useState } from 'react'

type Options = { type?: number; erase?: number; hold?: number; gap?: number }

// Escribe cada texto letra a letra, lo borra y pasa al siguiente.
export function useTypewriter(texts: string[], { type = 90, erase = 40, hold = 1800, gap = 400 }: Options = {}) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let delay = erasing ? erase : type
    let next: () => void

    if (!erasing && length === current.length) {
      delay = hold
      next = () => setErasing(true)
    } else if (erasing && length === 0) {
      delay = gap
      next = () => {
        setErasing(false)
        setIndex((i) => (i + 1) % texts.length)
      }
    } else {
      next = () => setLength((l) => l + (erasing ? -1 : 1))
    }

    const timer = setTimeout(next, delay)
    return () => clearTimeout(timer)
  }, [texts, index, length, erasing, type, erase, hold, gap])

  return texts[index].slice(0, length)
}
