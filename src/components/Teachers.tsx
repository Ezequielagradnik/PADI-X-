import { motion } from 'framer-motion'
import { Users, User, Clock, ChevronRight } from 'lucide-react'

const SLOTS = ['9:00','10:30','12:00','14:00','16:30','18:00','20:00']
const DAYS  = ['L','M','X','J','V']

function MiniCal({ color }: { color: string }) {
  return (
    <div className="mt-4 rounded-xl p-4" style={{ background:'rgba(0,0,0,0.25)' }}>
      <div className="grid grid-cols-5 gap-1 mb-2">
        {DAYS.map(d => <div key={d} className="text-center text-[9px] text-white/25 font-bold">{d}</div>)}
      </div>
      <div className="grid grid-cols-5 gap-1">
        {SLOTS.slice(0,5).map((s, i) => (
          <button key={i}
            className="text-[9px] py-1 rounded text-center transition-all focus-visible:outline-none focus-visible:ring-1"
            style={i === 2
              ? { background:color, color:'#fff', fontWeight:700, boxShadow:`0 0 10px ${color}88`, touchAction:'manipulation' }
              : { background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.35)', touchAction:'manipulation' }
            }
            aria-label={`Horario ${s}`}
          >{s}</button>
        ))}
      </div>
    </div>
  )
}

export function Teachers() {
  return (
    <section id="profesores" className="py-28 px-6 relative overflow-hidden">
      <div aria-hidden="true" className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{ background:'#339999' }}/>

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color:'#CC9933' }}>
            <span className="w-6 h-px bg-[#CC9933]" aria-hidden="true"/> Profesores
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-balance">
            Clases con profes reales
          </h2>
          <p className="text-white/30 mt-3 text-lg max-w-lg text-pretty">¿Seguís trabado? Reservá una clase con un profe especializado en tu materia.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Grupal */}
          <motion.div
            initial={{ opacity:0, x:-20 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.1 }}
            whileHover={{ y:-6, transition:{duration:0.2} }}
            className="group rounded-2xl p-8 relative overflow-hidden cursor-pointer"
            style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}
          >
            <div aria-hidden="true" className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow:'inset 0 0 40px rgba(51,153,153,0.06)' }}/>
            <div aria-hidden="true" className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.06] blur-3xl pointer-events-none group-hover:opacity-[0.12] transition-opacity"
              style={{ background:'#339999' }}/>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background:'rgba(51,153,153,0.1)', border:'2px solid rgba(51,153,153,0.3)' }}>
                <Users size={24} className="text-[#339999]" aria-hidden="true"/>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                style={{ background:'rgba(51,153,153,0.08)', color:'#339999', border:'1px solid rgba(51,153,153,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#339999] animate-pulse" aria-hidden="true"/> Cupos disponibles
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Clases Grupales</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-4">Hasta 8 alumnos, más económico, igual de efectivo.</p>
              <div className="flex gap-4 text-xs text-white/35 mb-2">
                <span className="flex items-center gap-1.5"><Users size={11} className="text-[#339999]" aria-hidden="true"/> Hasta 8 alumnos</span>
                <span className="flex items-center gap-1.5"><Clock size={11} className="text-[#339999]" aria-hidden="true"/> 90 min</span>
              </div>
              <MiniCal color="#339999"/>
              <button
                className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339999]"
                style={{ borderColor:'rgba(51,153,153,0.3)', color:'#339999', background:'transparent', touchAction:'manipulation' }}
                onMouseEnter={e => (e.currentTarget.style.background='rgba(51,153,153,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background='transparent')}
              >
                Reservar grupal <ChevronRight size={14} aria-hidden="true"/>
              </button>
            </div>
          </motion.div>

          {/* Individual */}
          <motion.div
            initial={{ opacity:0, x:20 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.2 }}
            whileHover={{ y:-6, transition:{duration:0.2} }}
            className="group rounded-2xl p-8 relative overflow-hidden cursor-pointer"
            style={{ background:'linear-gradient(145deg,#180810 0%,#0d0d0d 70%)' }}
          >
            <motion.div aria-hidden="true"
              animate={{ opacity:[0.4,0.9,0.4] }}
              transition={{ duration:2.5, repeat:Infinity }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow:'inset 0 0 0 1.5px rgba(204,51,102,0.4)' }}/>
            <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px"
              style={{ background:'linear-gradient(90deg,transparent,#CC3366,transparent)' }}/>
            <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
              style={{ background:'#CC3366' }}/>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background:'rgba(204,51,102,0.1)', border:'2px solid rgba(204,51,102,0.3)' }}>
                <User size={24} className="text-[#CC3366]" aria-hidden="true"/>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                style={{ background:'rgba(204,51,102,0.08)', color:'#CC3366', border:'1px solid rgba(204,51,102,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC3366] animate-pulse" aria-hidden="true"/> Personalizada
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Clase 1 a 1</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-4">Tu profe 100% para vos. Para temas puntuales donde necesitás atención personalizada.</p>
              <div className="flex gap-4 text-xs text-white/35 mb-2">
                <span className="flex items-center gap-1.5"><User size={11} className="text-[#CC3366]" aria-hidden="true"/> Solo vos</span>
                <span className="flex items-center gap-1.5"><Clock size={11} className="text-[#CC3366]" aria-hidden="true"/> 60 min</span>
              </div>
              <MiniCal color="#CC3366"/>
              <motion.button
                whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC3366]"
                style={{ background:'linear-gradient(135deg,#CC3366,#aa2244)', touchAction:'manipulation' }}
              >
                Reservar 1 a 1 <ChevronRight size={14} aria-hidden="true"/>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
