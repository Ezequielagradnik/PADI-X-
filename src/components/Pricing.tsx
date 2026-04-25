import { motion } from 'framer-motion'
import { Check, Star, Zap, Shield } from 'lucide-react'

const FEATURES = ['Todos los cursos','Videos y resúmenes','Ejercicios resueltos','Clases con profes con descuento','Nuevos contenidos c/semana','Soporte prioritario']

export function Pricing() {
  return (
    <section id="precios" className="py-28 px-6 relative overflow-hidden">
      {/* Bg glow */}
      <motion.div aria-hidden="true"
        animate={{ opacity:[0.04,0.09,0.04] }}
        transition={{ duration:5, repeat:Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(ellipse,#CC3366,transparent 65%)' }}/>

      <div className="max-w-5xl mx-auto relative">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-3 text-[#CC3366]">Precios</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-balance mb-4">Un precio. Todo incluido.</h2>
          <p className="text-white/35 text-lg max-w-md mx-auto">Pagás una vez y desbloqueás todos los cursos de todas las universidades.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Semestral */}
          <motion.div
            initial={{ opacity:0, y:30, rotateX:-10 }}
            whileInView={{ opacity:1, y:0, rotateX:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.1, duration:0.6 }}
            whileHover={{ y:-8, transition:{ duration:0.2 } }}
            className="rounded-2xl p-8 group relative overflow-hidden cursor-pointer"
            style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow:'inset 0 0 40px rgba(51,153,153,0.06)' }} aria-hidden="true"/>

            <div className="flex items-center gap-2 mb-7">
              <Zap size={16} className="text-[#339999]" aria-hidden="true"/>
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#339999]">Semestral</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-white/30 text-lg">$</span>
                <span className="text-6xl font-black text-white tracking-tighter" style={{fontVariantNumeric:'tabular-nums'}}>100.000</span>
              </div>
              <p className="text-white/25 text-sm mt-1">~$16.600/mes</p>
            </div>
            <ul className="space-y-3 mb-8">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/50">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:'rgba(51,153,153,0.15)' }}>
                    <Check size={11} className="text-[#339999]" aria-hidden="true"/>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="w-full py-4 rounded-xl font-bold text-sm text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339999]"
              style={{touchAction:'manipulation'}}>
              Empezar semestral
            </button>
          </motion.div>

          {/* Anual */}
          <motion.div
            initial={{ opacity:0, y:30, rotateX:-10 }}
            whileInView={{ opacity:1, y:0, rotateX:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.2, duration:0.6 }}
            whileHover={{ y:-8, transition:{ duration:0.2 } }}
            className="rounded-2xl p-8 group relative overflow-hidden cursor-pointer"
            style={{ background:'linear-gradient(145deg,#1a0810 0%,#0f0f0f 60%)' }}
          >
            {/* Animated border */}
            <motion.div aria-hidden="true"
              animate={{ opacity:[0.4,0.9,0.4] }}
              transition={{ duration:2.5, repeat:Infinity }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow:'inset 0 0 0 1.5px rgba(204,51,102,0.5)' }}/>
            <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px"
              style={{ background:'linear-gradient(90deg,transparent,#CC3366,transparent)' }}/>
            <div aria-hidden="true" className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background:'#CC3366' }}/>

            {/* Badge */}
            <motion.div aria-hidden="true"
              animate={{ y:[0,-3,0] }}
              transition={{ duration:2, repeat:Infinity }}
              className="absolute top-5 right-5 flex items-center gap-1 text-white text-[10px] font-black px-3 py-1.5 rounded-full"
              style={{ background:'linear-gradient(135deg,#CC3366,#aa2244)' }}>
              <Star size={9} fill="white" aria-hidden="true"/> Más elegido
            </motion.div>

            <div className="flex items-center gap-2 mb-7">
              <Star size={16} className="text-[#CC3366] fill-[#CC3366]" aria-hidden="true"/>
              <span className="text-xs font-black uppercase tracking-[0.15em] text-[#CC3366]">Anual</span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-white/30 text-lg">$</span>
                <span className="text-6xl font-black text-white tracking-tighter" style={{fontVariantNumeric:'tabular-nums'}}>200.000</span>
              </div>
              <p className="text-white/25 text-sm mt-1">~$16.600/mes</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-8"
              style={{ background:'rgba(204,51,102,0.1)', color:'#CC3366', border:'1px solid rgba(204,51,102,0.22)' }}>
              <Shield size={10} aria-hidden="true"/> Ahorrás $100.000 vs semestral
            </div>
            <ul className="space-y-3 mb-8">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:'rgba(204,51,102,0.12)' }}>
                    <Check size={11} className="text-[#CC3366]" aria-hidden="true"/>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
              className="relative w-full py-4 rounded-xl font-black text-sm text-white overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC3366]"
              style={{ background:'linear-gradient(135deg,#CC3366,#aa2244)', touchAction:'manipulation' }}
            >
              <span className="relative z-10">Empezar anual</span>
              <motion.span aria-hidden="true"
                className="absolute inset-0"
                style={{ background:'linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.12) 50%,transparent 65%)' }}
                animate={{ backgroundPosition:['-100% 0','200% 0'] }}
                transition={{ duration:2, repeat:Infinity, repeatDelay:1 }}/>
            </motion.button>
          </motion.div>
        </div>

        <p className="text-center text-white/20 text-xs mt-8">Sin tarjeta de crédito para empezar · Cancelá cuando quieras</p>
      </div>
    </section>
  )
}
