import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Play, Unlock } from 'lucide-react'

const STEPS = [
  { icon:Building2, n:'01', title:'Elegís tu universidad', body:'UBA, ORT, UDESA o Di Tella. Contenido exacto para tu carrera.', color:'#CC3366' },
  { icon:Play,      n:'02', title:'Accedés gratis',        body:'Resúmenes, videos y ejercicios resueltos desde el primer minuto.', color:'#339999' },
  { icon:Unlock,    n:'03', title:'Desbloqueás todo',      body:'Un pago, acceso completo, para siempre. Así de simple.', color:'#CC9933' },
]

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineH = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%'])

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background:'radial-gradient(ellipse at 50% 50%, rgba(51,153,153,0.05), transparent 60%)' }}/>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mb-20"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-3 text-[#339999]">3 pasos</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-balance">¿Cómo funciona?</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line bg */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-white/5" aria-hidden="true"/>
          {/* Animated fill */}
          <motion.div
            className="absolute left-7 top-0 w-px bg-gradient-to-b from-[#CC3366] via-[#339999] to-[#CC9933] origin-top"
            style={{ height: lineH }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity:0, x:-30 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:i*0.15, duration:0.55, ease:[0.22,1,0.36,1] }}
                  className="flex gap-8 group"
                >
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileHover={{ scale:1.15, rotate:10 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                      style={{ background:`${s.color}18`, border:`2px solid ${s.color}40` }}
                    >
                      <Icon size={22} style={{ color:s.color }} aria-hidden="true"/>
                    </motion.div>
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{ background: s.color }} aria-hidden="true"/>
                  </div>

                  {/* Text */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity" style={{ color:s.color }}>{s.n}</span>
                      <h3 className="text-xl font-black text-white">{s.title}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
