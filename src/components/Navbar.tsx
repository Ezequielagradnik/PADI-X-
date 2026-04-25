import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Universidades', 'Cursos', 'Profesores', 'Precios'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/75 backdrop-blur-2xl border-b border-white/[0.06]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo — full PADI X wordmark ── */}
        <a
          href="#"
          aria-label="PADI X — inicio"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC3366] rounded-lg group"
        >
          <div className="transition-transform duration-200 group-hover:scale-[1.03]">
            <img src="/image.png" alt="PADI X" style={{ height: 130, width: 'auto' }} />
          </div>
        </a>

        {/* ── Nav links ── */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
          {NAV_LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative py-1 hover:text-white transition-colors duration-200 group/link focus-visible:outline-none focus-visible:text-white"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#CC3366] group-hover/link:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="text-sm font-medium text-white/50 hover:text-white px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            style={{ touchAction: 'manipulation' }}
          >
            Ingresar
          </button>
          <button
            className="relative text-sm font-bold text-white px-5 py-2.5 rounded-xl overflow-hidden group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC3366]"
            style={{ background: 'linear-gradient(135deg,#CC3366,#ee4488)', touchAction: 'manipulation' }}
          >
            <span className="relative z-10">Empezar gratis</span>
            <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.15) 50%,transparent 65%)' }} />
            <span className="absolute -inset-2 opacity-0 group-hover/btn:opacity-100 transition-opacity blur-xl pointer-events-none"
              style={{ background: '#CC3366', zIndex: -1 }} />
          </button>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden p-2 text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC3366]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          style={{ touchAction: 'manipulation' }}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5 px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white/60 hover:text-white text-base font-medium py-3 border-b border-white/5 transition-colors focus-visible:outline-none focus-visible:text-white"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button
            className="mt-4 w-full py-3.5 rounded-xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC3366]"
            style={{ background: 'linear-gradient(135deg,#CC3366,#ee4488)', touchAction: 'manipulation' }}
          >
            Empezar gratis
          </button>
        </div>
      )}
    </nav>
  )
}
