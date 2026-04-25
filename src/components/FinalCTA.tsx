import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-36 px-6 relative overflow-hidden">
      {/* Concentric rings */}
      {[200,320,440,560,680].map((s, i) => (
        <motion.div key={s} aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ width:s, height:s, border:'1px solid rgba(204,51,102,0.08)' }}
          animate={{ scale:[1,1.05,1], opacity:[0.3,0.7,0.3] }}
          transition={{ duration:3+i*0.6, repeat:Infinity, delay:i*0.35 }}/>
      ))}

      {/* Core glow */}
      <motion.div aria-hidden="true"
        animate={{ opacity:[0.06,0.16,0.06] }}
        transition={{ duration:4, repeat:Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(ellipse,#CC3366,transparent 65%)' }}/>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
        >
          <h2 className="font-black leading-[0.85] tracking-tighter text-white text-balance mb-4"
            style={{ fontSize:'clamp(52px,9vw,120px)' }}>
            Dejá de<br/>estudiar solo.
          </h2>
          <h2 className="font-black leading-[0.85] tracking-tighter mb-10 text-balance"
            style={{
              fontSize:'clamp(52px,9vw,120px)',
              background:'linear-gradient(110deg,#CC3366,#ff77aa,#CC9933)',
              backgroundSize:'200%',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
              animation:'shimmer 4s ease infinite',
            }}
          >
            Aprobá con PADI X.
          </h2>

          <motion.button
            whileHover={{ scale:1.07 }}
            whileTap={{ scale:0.97 }}
            className="group relative inline-flex items-center gap-3 text-white font-black text-xl px-14 py-5 rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ background:'linear-gradient(135deg,#CC3366,#aa2244)', touchAction:'manipulation' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Empezar ahora
              <ChevronRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true"/>
            </span>
            <motion.span aria-hidden="true"
              className="absolute inset-0"
              style={{ background:'linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.15) 50%,transparent 65%)' }}
              animate={{ backgroundPosition:['-100% 0','200% 0'] }}
              transition={{ duration:1.5, repeat:Infinity, repeatDelay:0.8 }}/>
            <motion.span aria-hidden="true"
              className="absolute -inset-3 rounded-3xl pointer-events-none -z-10"
              animate={{ opacity:[0.3,0.7,0.3] }}
              transition={{ duration:2, repeat:Infinity }}
              style={{ background:'#CC3366', filter:'blur(20px)' }}/>
          </motion.button>

          {/* Social proof */}
          <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            transition={{ delay:0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex -space-x-2.5" aria-label="Estudiantes activos">
              {['#CC3366','#339999','#CC9933','#7755CC','#CC3366'].map((c,i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-[#050505] flex items-center justify-center text-xs font-black text-white"
                  style={{ background:`linear-gradient(135deg,${c},${c}70)` }} aria-hidden="true">
                  {String.fromCharCode(65+i)}
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm">
              <span className="text-white/70 font-bold">+5.000</span> estudiantes ya están adentro
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
