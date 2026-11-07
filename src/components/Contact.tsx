import { useState, type FormEvent } from 'react'
import { Check, Copy, Loader2, Send } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { PROFILE } from '../data'
import { Reveal } from './Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const ENDPOINT = `https://formsubmit.co/ajax/${PROFILE.email}`

const inputClass =
  'w-full rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 transition focus:border-brand focus:bg-white/[0.05] focus:outline-none'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), _subject: 'Contacto desde el portfolio' }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="card relative overflow-hidden p-6 sm:p-12">
        <div aria-hidden className="absolute -top-32 -right-32 size-96 rounded-full bg-brand/20 blur-[100px]" />
        <div aria-hidden className="absolute -bottom-32 -left-32 size-96 rounded-full bg-brand-2/10 blur-[100px]" />

        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-sm tracking-wider text-brand-2 uppercase">Contacto</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              ¿Hablamos de tu <span className="text-gradient">próximo proyecto</span>?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Estoy abierto a oportunidades como Data Engineer o Frontend Developer. Escríbeme y te respondo
              lo antes posible.
            </p>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-8 flex w-full items-center justify-between gap-3 rounded-2xl border border-line bg-white/[0.03] px-5 py-4 text-left transition hover:bg-white/[0.06] sm:w-auto"
            >
              <span className="truncate">{PROFILE.email}</span>
              {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4 text-muted" />}
              <span className="sr-only" aria-live="polite">{copied ? 'Email copiado' : 'Copiar email'}</span>
            </button>

            <div className="mt-4 flex gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition hover:bg-white/[0.06]"
              >
                <FaLinkedinIn className="size-4" aria-hidden /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition hover:bg-white/[0.06]"
              >
                <SiGithub className="size-4" aria-hidden /> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-white/70">Nombre</span>
                <input name="name" required autoComplete="name" className={inputClass} placeholder="Tu nombre" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-white/70">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="tu@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-white/70">Mensaje</span>
              <textarea
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Cuéntame en qué puedo ayudarte"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-brand-2 px-6 py-3.5 font-medium text-ink transition hover:opacity-90 disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Enviando...
                </>
              ) : status === 'sent' ? (
                <>
                  <Check className="size-4" /> ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <Send className="size-4" /> Enviar mensaje
                </>
              )}
            </button>

            <p role="status" aria-live="polite" className="min-h-5 text-center text-sm">
              {status === 'sent' && <span className="text-emerald-400">Gracias, te responderé pronto.</span>}
              {status === 'error' && (
                <span className="text-rose-400">
                  No se pudo enviar. Escríbeme directamente a{' '}
                  <a className="underline" href={`mailto:${PROFILE.email}`}>
                    {PROFILE.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
