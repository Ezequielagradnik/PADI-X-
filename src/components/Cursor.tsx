import { useEffect, useRef } from 'react'

export function Cursor() {
  const dot   = useRef<HTMLDivElement>(null)
  const ring  = useRef<HTMLDivElement>(null)
  const pos   = useRef({ x: -100, y: -100 })
  const curr  = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move, { passive: true })

    let rafId: number
    const tick = () => {
      curr.current.x += (pos.current.x - curr.current.x) * 0.22
      curr.current.y += (pos.current.y - curr.current.y) * 0.22
      if (dot.current)  dot.current.style.transform  = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      if (ring.current) ring.current.style.transform = `translate(${curr.current.x - 18}px, ${curr.current.y - 18}px)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const hover = () => ring.current?.classList.add('scale-150', '!border-[#CC3366]')
    const leave = () => ring.current?.classList.remove('scale-150', '!border-[#CC3366]')
    document.querySelectorAll('button,a').forEach(el => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#CC3366] pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/30 pointer-events-none z-[9998] transition-transform duration-200"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />
    </>
  )
}
