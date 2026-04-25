import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Course { title:string; sub:string; uni:string; pct?:number; rating:number; color:string }

const ROW1: Course[] = [
  { title:'Cálculo I',        sub:'Matemática', uni:'UBA',     rating:4.9, color:'#CC3366' },
  { title:'Anatomía Desc.',   sub:'Medicina',   uni:'UBA',     rating:4.8, color:'#339999' },
  { title:'Microeconomía I',  sub:'Economía',   uni:'UDESA',   rating:4.7, color:'#CC9933' },
  { title:'Prog. Avanzada',   sub:'Sistemas',   uni:'ORT',     rating:4.9, color:'#7755CC' },
  { title:'Marketing Digital',sub:'Negocios',   uni:'Di Tella',rating:4.6, color:'#CC3366' },
  { title:'Bioquímica I',     sub:'Medicina',   uni:'UBA',     rating:4.8, color:'#339999' },
]

const ROW2: Course[] = [
  { title:'Álgebra Lineal',   sub:'Matemática', uni:'UBA',     pct:68, rating:4.8, color:'#CC3366' },
  { title:'Fisiología I',     sub:'Medicina',   uni:'UBA',     pct:34, rating:4.9, color:'#339999' },
  { title:'Estadística Emp.', sub:'Negocios',   uni:'UDESA',   pct:82, rating:4.7, color:'#CC9933' },
  { title:'Diseño BD',        sub:'Sistemas',   uni:'ORT',     pct:12, rating:4.6, color:'#7755CC' },
  { title:'Derecho Comercial',sub:'Derecho',    uni:'Di Tella',pct:55, rating:4.7, color:'#CC3366' },
]

function CourseCard({ c }: { c: Course }) {
  return (
    <div className="group flex-shrink-0 w-48 cursor-pointer">
      {/* Thumbnail */}
      <div
        className="h-28 rounded-xl mb-3 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:rounded-lg"
        style={{ background:`radial-gradient(ellipse at 35% 35%, ${c.color}35, ${c.color}08)`, border:`1px solid ${c.color}20` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 duration-200"
            style={{ background:'rgba(0,0,0,0.5)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.2)' }}>
            <Play size={14} fill="white" className="text-white ml-0.5" aria-hidden="true"/>
          </div>
        </div>
        {/* Uni badge */}
        <span className="absolute top-2 left-2 text-[9px] font-black px-1.5 py-0.5 rounded" style={{ background:`${c.color}30`, color:c.color }}>{c.uni}</span>
        {/* Progress */}
        {c.pct != null && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
            <div className="h-full" style={{ width:`${c.pct}%`, background:c.color }}/>
          </div>
        )}
        {/* Shimmer */}
        <div className="absolute inset-y-0 -left-12 w-12 skew-x-12 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-500"
          style={{ background:`linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)` }} aria-hidden="true"/>
      </div>
      <p className="text-white text-[11px] font-bold leading-snug truncate group-hover:text-[#CC3366] transition-colors">{c.title}</p>
      <p className="text-white/35 text-[10px] mt-0.5 truncate">{c.sub}</p>
      <div className="flex items-center gap-1.5 mt-1">
        <Star size={9} fill="#CC9933" className="text-[#CC9933]" aria-hidden="true"/>
        <span className="text-[10px] text-white/40">{c.rating}</span>
        {c.pct != null && <span className="text-[9px] ml-1" style={{ color:c.color }}>{c.pct}%</span>}
      </div>
    </div>
  )
}

function Row({ title, courses }: { title:string; courses:Course[] }) {
  const r = useRef<HTMLDivElement>(null)
  const sc = (d: 1|-1) => r.current?.scrollBy({ left: d*580, behavior:'smooth' })
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5 px-6 max-w-7xl mx-auto">
        <h3 className="font-bold text-white text-base">{title}</h3>
        <div className="flex gap-2">
          <button onClick={() => sc(-1)} aria-label="Anterior" className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30" style={{touchAction:'manipulation'}}>
            <ChevronLeft size={15} aria-hidden="true"/>
          </button>
          <button onClick={() => sc(1)} aria-label="Siguiente" className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30" style={{touchAction:'manipulation'}}>
            <ChevronRight size={15} aria-hidden="true"/>
          </button>
        </div>
      </div>
      <div ref={r} className="flex gap-4 overflow-x-auto hide-scroll px-6">
        {courses.map((c,i) => <CourseCard key={i} c={c}/>)}
      </div>
    </div>
  )
}

export function CourseCarousels() {
  return (
    <section className="py-16 relative">
      <div className="mb-12 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color:'#CC3366' }}>Explorar</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-balance">Cursos para vos</h2>
        </motion.div>
      </div>
      <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2 }}>
        <Row title="🔥 Populares ahora"    courses={ROW1}/>
        <Row title="▶︎  Seguí aprendiendo" courses={ROW2}/>
      </motion.div>
    </section>
  )
}
