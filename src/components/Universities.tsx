import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const UNI = [
  {
    id:'uba', name:'UBA', full:'Medicina', tag:'Más popular',
    n:87, color:'#CC3366',
    subjects:['Anatomía Descriptiva','Histología y Embriología','Bioquímica I','Fisiología I','Farmacología'],
    desc:'Facultad de Medicina — UBA',
  },
  {
    id:'ort', name:'ORT', full:'Secundaria', tag:null,
    n:54, color:'#339999',
    subjects:['Matemática','Física','Química','Lengua','Informática'],
    desc:'Colegio ORT Argentina',
  },
  {
    id:'udesa', name:'UDESA', full:'Economía · Derecho · Negocios', tag:'Nuevo',
    n:38, color:'#CC9933',
    subjects:['Micro I','Macro I','Estadística','Finanzas','Marketing'],
    desc:'Universidad de San Andrés',
  },
  {
    id:'ditella', name:'Di Tella', full:'MBA · Arquitectura · Derecho', tag:null,
    n:29, color:'#7755CC',
    subjects:['Estrategia','Liderazgo','Derecho Comercial','Gestión Fin.','Marketing'],
    desc:'Universidad Torcuato Di Tella',
  },
]

function FlipCard({ u, i }: { u:typeof UNI[0]; i:number }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      initial={{ opacity:0, y:40, rotateX:-15 }}
      whileInView={{ opacity:1, y:0, rotateX:0 }}
      viewport={{ once:true }}
      transition={{ delay:i*0.1, duration:0.55, ease:[0.22,1,0.36,1] }}
      className="relative cursor-pointer select-none"
      style={{ perspective:1000, minHeight:280 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f=>!f)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle:'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition:'transform 0.55s cubic-bezier(0.4,0.2,0.2,1)',
          minHeight:280,
        }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl p-7 overflow-hidden"
          style={{ backfaceVisibility:'hidden', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}>
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{ background:`linear-gradient(90deg,transparent,${u.color},transparent)` }}/>
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background:u.color }} aria-hidden="true"/>
          {/* Ghost letter */}
          <div className="text-[80px] font-black leading-none mb-3 select-none"
            style={{ color:'transparent', WebkitTextStroke:`2px ${u.color}`, opacity:0.15 }} aria-hidden="true">
            {u.name[0]}
          </div>
          {u.tag && (
            <span className="inline-block text-[9px] font-black px-2.5 py-1 rounded-full mb-2 uppercase tracking-widest"
              style={{ background:`${u.color}18`, color:u.color, border:`1px solid ${u.color}35` }}>
              {u.tag}
            </span>
          )}
          <h3 className="text-2xl font-black text-white mb-1">{u.name}</h3>
          <p className="text-white/35 text-sm mb-1 font-semibold">{u.full}</p>
          <p className="text-white/20 text-xs mb-5">{u.desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-white/25 text-xs">
              <span className="font-bold text-white/60">{u.n}</span> cursos
            </span>
            <span className="text-xs font-semibold" style={{ color:u.color }}>Hover →</span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility:'hidden',
            transform:'rotateY(180deg)',
            background:`linear-gradient(135deg,${u.color}18,${u.color}06)`,
            border:`1px solid ${u.color}40`,
          }}>
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{ background:`linear-gradient(90deg,transparent,${u.color},transparent)` }}/>
          <p className="text-[9px] font-black uppercase tracking-widest mb-4" style={{ color:u.color }}>
            Materias populares
          </p>
          <ul className="space-y-2.5 flex-1">
            {u.subjects.map((s,si) => (
              <motion.li key={s}
                initial={{ opacity:0, x:-10 }}
                animate={flipped ? { opacity:1, x:0 } : { opacity:0, x:-10 }}
                transition={{ delay:si*0.06, duration:0.3 }}
                className="flex items-center gap-2 text-sm text-white/65"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:u.color }} aria-hidden="true"/>
                {s}
              </motion.li>
            ))}
          </ul>
          <button
            className="mt-4 w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2"
            style={{ background:`${u.color}20`, color:u.color, border:`1px solid ${u.color}40`, touchAction:'manipulation' }}
          >
            Entrar <ChevronRight size={14} aria-hidden="true"/>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function Universities() {
  return (
    <section id="universidades" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color:'#CC3366' }}>
              <span className="w-6 h-px bg-[#CC3366]" aria-hidden="true"/> Tu institución
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Elegí dónde<br/>estudiás
            </h2>
          </div>
          <p className="text-white/25 text-sm max-w-xs">Hover para ver las materias. Contenido específico por institución.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UNI.map((u,i) => <FlipCard key={u.id} u={u} i={i}/>)}
        </div>
      </div>
    </section>
  )
}
