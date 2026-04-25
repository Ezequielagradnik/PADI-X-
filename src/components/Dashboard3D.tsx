import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, CheckCircle, Clock, Star, Zap } from 'lucide-react'

const SUBJECTS = [
  { name:'Anatomía I',    pct:78, color:'#CC3366' },
  { name:'Bioquímica I',  pct:54, color:'#339999' },
  { name:'Fisiología',    pct:91, color:'#CC9933' },
  { name:'Histología',    pct:33, color:'#7755CC' },
]
const RECENT = [
  { text:'Aprobaste Parcial I — Anatomía', icon:<CheckCircle size={13}/>, color:'#339999', time:'Hace 2h' },
  { text:'Nuevo resumen — Bioquímica Cap. 4', icon:<Star size={13}/>, color:'#CC9933', time:'Ayer' },
  { text:'Clase programada — Fisiología', icon:<Clock size={13}/>, color:'#7755CC', time:'Mañana' },
  { text:'Racha de 7 días consecutivos 🔥', icon:<Zap size={13}/>, color:'#CC3366', time:'Hoy' },
]

function MockDashboard() {
  return (
    <div className="relative w-full" style={{ maxWidth:520 }}>
      {/* Main panel */}
      <div className="rounded-2xl overflow-hidden"
        style={{
          background:'rgba(12,12,12,0.95)',
          border:'1px solid rgba(255,255,255,0.1)',
          boxShadow:'0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
        }}>
        {/* Top bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-[#CC3366]"/>
          <div className="w-3 h-3 rounded-full bg-[#CC9933]"/>
          <div className="w-3 h-3 rounded-full bg-[#339999]"/>
          <span className="ml-3 text-white/20 text-xs font-medium">PADI X — Mi progreso</span>
        </div>

        <div className="p-5 space-y-5">
          {/* Welcome + streak */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/40 text-xs mb-0.5">Bienvenido de nuevo</p>
              <p className="text-white font-black text-lg">Lucía M. 👋</p>
            </div>
            <div className="text-center px-4 py-2 rounded-xl"
              style={{ background:'rgba(204,51,102,0.1)', border:'1px solid rgba(204,51,102,0.2)' }}>
              <div className="text-2xl font-black" style={{ color:'#CC3366' }}>7</div>
              <div className="text-white/35 text-[9px] font-medium">días racha 🔥</div>
            </div>
          </div>

          {/* Progress bars */}
          <div className="space-y-3">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Tu progreso</p>
            {SUBJECTS.map(s => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-white/60 text-xs font-medium">{s.name}</span>
                  <span className="text-xs font-black" style={{ color:s.color }}>{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width:0 }}
                    whileInView={{ width:`${s.pct}%` }}
                    viewport={{ once:true }}
                    transition={{ duration:1.1, delay:0.2, ease:'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background:`linear-gradient(90deg,${s.color}70,${s.color})` }}
                    role="progressbar" aria-valuenow={s.pct} aria-valuemin={0} aria-valuemax={100}
                    aria-label={`${s.name}: ${s.pct}%`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Activity feed */}
          <div className="space-y-2.5 border-t border-white/[0.05] pt-4">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Actividad reciente</p>
            {RECENT.map((r,i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background:`${r.color}18`, color:r.color }}>
                  {r.icon}
                </div>
                <p className="text-white/50 text-xs flex-1 leading-snug group-hover:text-white/70 transition-colors">{r.text}</p>
                <span className="text-white/20 text-[10px] whitespace-nowrap">{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating mini card — top right */}
      <motion.div
        animate={{ y:[-6,6,-6], rotate:[-1,1,-1] }}
        transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
        className="absolute -top-8 -right-10 rounded-xl p-3.5 shadow-2xl"
        style={{
          background:'rgba(20,20,20,0.95)',
          border:'1px solid rgba(204,51,102,0.3)',
          width:140,
          boxShadow:'0 20px 50px rgba(0,0,0,0.7)',
        }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={12} className="text-[#CC3366]"/>
          <span className="text-[9px] font-black text-white/40 uppercase tracking-wider">Promedio</span>
        </div>
        <div className="text-3xl font-black" style={{ color:'#CC3366' }}>8.4</div>
        <div className="text-white/25 text-[9px] mt-0.5">↑ +0.6 este mes</div>
      </motion.div>

      {/* Floating mini card — bottom left */}
      <motion.div
        animate={{ y:[5,-5,5], rotate:[1,-1,1] }}
        transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut', delay:1 }}
        className="absolute -bottom-8 -left-10 rounded-xl p-3.5 shadow-2xl"
        style={{
          background:'rgba(20,20,20,0.95)',
          border:'1px solid rgba(51,153,153,0.3)',
          width:150,
          boxShadow:'0 20px 50px rgba(0,0,0,0.7)',
        }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle size={12} className="text-[#339999]"/>
          <span className="text-[9px] font-black text-white/40 uppercase tracking-wider">Completados</span>
        </div>
        <div className="text-3xl font-black" style={{ color:'#339999' }}>12</div>
        <div className="text-white/25 text-[9px] mt-0.5">cursos este cuatri</div>
      </motion.div>
    </div>
  )
}

export function Dashboard3D() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.7], [20, 0, -5])
  const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.7], [-12, 0, 4])
  const scale   = useTransform(scrollYProgress, [0, 0.35], [0.85, 1])

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Bg */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background:'radial-gradient(ellipse at 60% 50%, rgba(204,51,102,0.05), transparent 60%)' }}/>
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px"
        style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)' }}/>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
              style={{ color:'#CC9933' }}>
              <span className="w-6 h-px bg-[#CC9933]" aria-hidden="true"/> Tu dashboard
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6">
              Todo tu<br/>
              <span style={{
                background:'linear-gradient(110deg,#CC3366,#ff77aa,#CC9933)',
                backgroundSize:'200%', WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent', backgroundClip:'text',
                animation:'shimmer 4s ease infinite',
              }}>progreso,</span><br/>
              en un lugar.
            </h2>
            <p className="text-white/35 text-lg leading-relaxed mb-8 max-w-md">
              Seguí tus materias, apuntes, parciales y racha de estudio. Todo sincronizado, todo en PADI X.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label:'Seguimiento por materia',    color:'#CC3366' },
                { label:'Racha de estudio diaria',    color:'#339999' },
                { label:'Alertas de parciales',       color:'#CC9933' },
                { label:'Estadísticas de progreso',  color:'#7755CC' },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:f.color }} aria-hidden="true"/>
                  <span className="text-white/55 text-sm">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — 3D tilt dashboard */}
          <div className="flex items-center justify-center py-16">
            <motion.div
              style={{ rotateX, rotateY, scale, transformPerspective:1200 }}
              className="relative"
            >
              <MockDashboard />
              {/* Glow behind dashboard */}
              <div aria-hidden="true" className="absolute -inset-8 rounded-3xl blur-3xl opacity-20 pointer-events-none -z-10"
                style={{ background:'linear-gradient(135deg,#CC3366,#339999)' }}/>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
