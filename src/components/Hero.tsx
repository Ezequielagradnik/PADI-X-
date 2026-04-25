import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, BookOpen, Zap, Star, TrendingUp, Brain, Atom } from 'lucide-react'

/* ── Glowing "P" — text that looks like it emits light ─────── */
function GlowP() {
  return (
    <span
      aria-hidden="true"
      style={{
        color: '#ffffff',
        textShadow: '0 0 18px rgba(204,51,102,0.45), 0 0 6px rgba(255,255,255,0.3)',
        display: 'inline-block',
      }}
    >P</span>
  )
}

/* ── 3-D card data ──────────────────────────────────────────── */
interface CardData { title:string; uni:string; pct:number; color:string; icon:React.ReactNode }
const CARDS: CardData[] = [
  { title:'Cálculo II',      uni:'UBA Medicina',  pct:68, color:'#CC3366', icon:<TrendingUp size={14}/> },
  { title:'Anatomía I',      uni:'UBA Medicina',  pct:45, color:'#339999', icon:<BookOpen   size={14}/> },
  { title:'Microeconomía',   uni:'UDESA',         pct:82, color:'#CC9933', icon:<Star       size={14}/> },
  { title:'Prog. Avanzada',  uni:'ORT',           pct:30, color:'#7755CC', icon:<Zap        size={14}/> },
  { title:'Bioquímica I',    uni:'UBA Medicina',  pct:55, color:'#CC3366', icon:<Atom       size={14}/> },
  { title:'Gestión Fin.',    uni:'Di Tella',      pct:40, color:'#CC9933', icon:<Brain      size={14}/> },
]

function Card3D({ d, angle }: { d:CardData; angle:number }) {
  const [hov, setHov] = useState(false)
  const R = 290
  const ry = angle

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="absolute"
      style={{
        width: 188,
        left: '50%', top: '50%',
        marginLeft: -94, marginTop: -80,
        transform: `perspective(1100px) rotateY(${ry}deg) translateZ(${R}px) ${hov ? 'scale(1.06)' : 'scale(1)'}`,
        transition: 'transform 0.35s ease, box-shadow 0.3s',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${hov ? d.color + '60' : 'rgba(255,255,255,0.10)'}`,
        backdropFilter: 'blur(24px)',
        boxShadow: hov ? `0 0 40px ${d.color}44, 0 20px 40px rgba(0,0,0,0.5)` : '0 8px 32px rgba(0,0,0,0.4)',
        cursor: 'pointer',
      }}
    >
      <div style={{ height:3, background:`linear-gradient(90deg,transparent,${d.color},transparent)` }}/>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background:`${d.color}20`, color:d.color, border:`1px solid ${d.color}35` }}>
            {d.icon}
          </div>
          <span className="text-[10px] font-black text-white/35 uppercase tracking-widest">{d.uni}</span>
        </div>
        <p className="text-white text-xs font-black mb-4 leading-snug">{d.title}</p>
        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden mb-1.5">
          <div className="h-full rounded-full" style={{ width:`${d.pct}%`, background:`linear-gradient(90deg,${d.color}70,${d.color})` }}/>
        </div>
        <p style={{ color:`${d.color}cc` }} className="text-[10px] font-semibold">{d.pct}% completado</p>
      </div>
      {/* Bottom glow */}
      {hov && <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background:`radial-gradient(ellipse at 50% 100%, ${d.color}15, transparent 70%)` }}/>}
    </div>
  )
}

/* ── Orbit scene — BIG ─────────────────────────────────────── */
function OrbitScene() {
  const [angle, setAngle]   = useState(0)
  const [angle2, setAngle2] = useState(180)

  useEffect(() => {
    let id: number
    let prev = performance.now()
    const tick = (now: number) => {
      const dt = now - prev; prev = now
      setAngle(a  => (a  + dt * 0.022) % 360)
      setAngle2(a => (a  + dt * 0.014) % 360)  // second ring slower
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="relative" style={{ width:640, height:640, perspective:1100 }}>
      {/* ── Orbit rings (visual) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        {/* Main ring */}
        <div className="absolute rounded-full border border-white/[0.06]"
          style={{ width:580, height:150, transform:'rotateX(78deg)' }}/>
        {/* Secondary ring */}
        <div className="absolute rounded-full border border-[#CC3366]/[0.10]"
          style={{ width:480, height:120, transform:'rotateX(78deg) rotateZ(25deg)' }}/>
        {/* Third ring */}
        <div className="absolute rounded-full border border-[#339999]/[0.07]"
          style={{ width:520, height:135, transform:'rotateX(78deg) rotateZ(-15deg)' }}/>
      </div>

      {/* ── Core sphere ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="relative" style={{ width:150, height:150 }}>
          {/* Pulse rings */}
          {[1,2,3,4].map(i => (
            <div key={i} className="absolute inset-0 rounded-full border border-[#CC3366]/25"
              style={{ animation:`ring 2.8s ${i*0.55}s ease-out infinite` }}/>
          ))}
          {/* Sphere body */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background:'radial-gradient(circle at 35% 32%, #ff88bb, #CC3366 45%, #880022 75%, #440011)',
              boxShadow:'0 0 80px #CC336688, 0 0 160px #CC336630',
            }}/>
          {/* Shine */}
          <div className="absolute rounded-full blur-sm" style={{ width:42, height:28, top:18, left:26, background:'rgba(255,255,255,0.35)' }}/>
          {/* Logo text on sphere */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/60 text-xs font-black tracking-widest select-none">PADI</span>
          </div>
        </div>
      </div>

      {/* ── Orbiting cards — main ring ── */}
      <div className="absolute inset-0" style={{ transformStyle:'preserve-3d', transform:'rotateX(12deg)' }}>
        {CARDS.slice(0,4).map((d, i) => (
          <Card3D key={d.title} d={d} angle={angle + i * 90} />
        ))}
      </div>

      {/* ── Orbiting cards — second ring (only 2, different plane) ── */}
      <div className="absolute inset-0" style={{ transformStyle:'preserve-3d', transform:'rotateX(-8deg) rotateZ(25deg)' }}>
        {CARDS.slice(4).map((d, i) => (
          <Card3D key={d.title} d={d} angle={angle2 + i * 180} />
        ))}
      </div>

      {/* ── Floating particles around orbit ── */}
      {[...Array(12)].map((_, i) => {
        const a = (i / 12) * 360
        const r = 260 + Math.sin(i * 1.3) * 40
        const x = Math.cos((a * Math.PI) / 180) * r + 320
        const y = Math.sin((a * Math.PI) / 180) * r * 0.28 + 320
        const colors = ['#CC3366','#339999','#CC9933','#7755CC']
        return (
          <div key={i} aria-hidden="true"
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              left: x,
              top: y,
              background: colors[i % 4],
              opacity: 0.4,
              animation: `floatY ${2.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
              boxShadow: `0 0 8px ${colors[i % 4]}`,
            }}
          />
        )
      })}
    </div>
  )
}

/* ── Ticker ─────────────────────────────────────────────────── */
function Ticker() {
  const items = ['UBA Medicina','ORT Secundaria','UDESA Economía','Di Tella Negocios','UBA Fisiología','ORT Matemática','UDESA Derecho','Di Tella MBA']
  const doubled = [...items,...items]
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-3" aria-hidden="true">
      <div className="flex gap-10 w-max" style={{ animation:'scroll 22s linear infinite' }}>
        {doubled.map((t,i) => (
          <span key={i} className="text-white/18 text-xs font-bold uppercase tracking-[0.18em] whitespace-nowrap flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-[#CC3366] inline-block"/>
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}

/* ── Hero ───────────────────────────────────────────────────── */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end start'] })
  const y  = useTransform(scrollYProgress, [0,1], [0, 140])
  const op = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dot mesh BG */}
        <div aria-hidden="true" className="absolute inset-0"
          style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)', backgroundSize:'30px 30px' }}/>
        {/* Scanline sweep */}
        <div aria-hidden="true" className="absolute left-0 right-0 h-[2px] pointer-events-none z-10"
          style={{ background:'linear-gradient(90deg,transparent,#CC336622,#CC336699,#CC336622,transparent)', animation:'scan 7s linear infinite' }}/>

        <motion.div style={{ y, opacity:op }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_640px] gap-8 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5, delay:0.1 }}
              className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-xs font-bold"
              style={{ background:'rgba(204,51,102,0.08)', border:'1px solid rgba(204,51,102,0.2)', color:'#CC3366' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC3366] animate-pulse" aria-hidden="true"/>
              Nueva plataforma — BETA
            </motion.div>

            {/* ── Headline ── */}
            <h1 className="font-black leading-[0.87] tracking-tighter mb-6"
              style={{ fontSize:'clamp(50px,7.5vw,100px)' }}>

              <motion.span className="block text-white"
                initial={{ opacity:0, y:50, rotateX:-25 }} animate={{ opacity:1, y:0, rotateX:0 }}
                transition={{ duration:0.6, delay:0.15, ease:[0.22,1,0.36,1] }}>
                Estudiá mejor.
              </motion.span>

              <motion.span className="block"
                initial={{ opacity:0, y:50, rotateX:-25 }} animate={{ opacity:1, y:0, rotateX:0 }}
                transition={{ duration:0.6, delay:0.28, ease:[0.22,1,0.36,1] }}
                style={{
                  background:'linear-gradient(110deg,#CC3366,#ff77aa,#CC9933)',
                  backgroundSize:'200%', WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent', backgroundClip:'text',
                  animation:'shimmer 4s ease infinite',
                }}>
                Estudiá con
              </motion.span>

              {/* [lamp P] + ADI. */}
              <motion.span className="flex items-center"
                initial={{ opacity:0, y:50, rotateX:-25 }} animate={{ opacity:1, y:0, rotateX:0 }}
                transition={{ duration:0.6, delay:0.4, ease:[0.22,1,0.36,1] }}>
                {/* Pink glow behind lamp */}
                <GlowP />
                <span style={{
                  background:'linear-gradient(110deg,#CC3366,#ff77aa,#CC9933)',
                  backgroundSize:'200%', WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent', backgroundClip:'text',
                  animation:'shimmer 4s ease infinite',
                }}>ADI.</span>
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.55, duration:0.55 }}
              className="text-white/40 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
            >
              Para alumnos de <span className="text-white/75 font-semibold">UBA Medicina, ORT</span>,{' '}
              <span className="text-white/75 font-semibold">UDESA</span> y{' '}
              <span className="text-white/75 font-semibold">Di Tella</span>.
              Todo lo que necesitás para aprobar, en un solo lugar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.68, duration:0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                className="group relative flex items-center gap-2.5 font-black text-white text-base px-8 py-4 rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{ background:'linear-gradient(135deg,#CC3366,#ee4488)', touchAction:'manipulation', transition:'box-shadow 0.3s' }}
                onMouseEnter={e=>(e.currentTarget.style.boxShadow='0 0 40px rgba(204,51,102,0.6)')}
                onMouseLeave={e=>(e.currentTarget.style.boxShadow='none')}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Empezar ahora
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true"/>
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background:'linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.15) 50%,transparent 65%)' }}/>
              </button>
              <button
                className="flex items-center gap-2 font-semibold text-white/60 hover:text-white text-base px-6 py-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                style={{ background:'rgba(255,255,255,0.04)', touchAction:'manipulation' }}
              >
                Ver demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.85 }}
              className="flex gap-8">
              {[{n:'+5k',l:'estudiantes'},{n:'4',l:'instituciones'},{n:'+200',l:'cursos'}].map(({n,l}) => (
                <div key={l} className="text-center">
                  <div className="text-2xl font-black" style={{ color:'#CC3366' }}>{n}</div>
                  <div className="text-white/30 text-[11px] mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — 3D orbit ── */}
          <motion.div
            initial={{ opacity:0, scale:0.75, rotateY:-15 }}
            animate={{ opacity:1, scale:1, rotateY:0 }}
            transition={{ duration:0.9, delay:0.3, ease:[0.22,1,0.36,1] }}
            className="flex items-center justify-center relative"
          >
            <div aria-hidden="true" className="absolute rounded-full blur-[120px] opacity-20 pointer-events-none"
              style={{ width:400, height:400, background:'radial-gradient(#CC3366,transparent 65%)' }}/>
            <OrbitScene />
          </motion.div>
        </motion.div>
      </section>
      <Ticker />
    </>
  )
}
