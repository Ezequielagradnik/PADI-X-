function LampLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <filter id="flg" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="fbulb" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fff8d0" stopOpacity="1"/>
          <stop offset="60%" stopColor="#CC9933" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#CC3366" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
      <line x1="8" y1="8" x2="8" y2="43" stroke="#CC3366" strokeWidth="5" strokeLinecap="round" filter="url(#flg)"/>
      <path d="M8 8 Q8 4 13 3 Q25 1 27 12 Q29 21 21 25 Q15 27 8 26 Z" fill="url(#fbulb)" filter="url(#flg)"/>
      <ellipse cx="18" cy="12" rx="4" ry="3.5" fill="white" opacity="0.4"/>
      <path d="M13 25 L13 29 Q13 31 15.5 31 Q18 31 18 29 L18 25" stroke="#ffdd88" strokeWidth="1.8" strokeLinecap="round" filter="url(#flg)"/>
      <line x1="30" y1="6"  x2="38" y2="1"  stroke="#ffcc44" strokeWidth="2"   strokeLinecap="round" filter="url(#flg)"/>
      <line x1="31" y1="13" x2="41" y2="11" stroke="#ffcc44" strokeWidth="1.8" strokeLinecap="round" filter="url(#flg)"/>
      <line x1="30" y1="20" x2="40" y2="22" stroke="#ffcc44" strokeWidth="1.5" strokeLinecap="round" filter="url(#flg)"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <LampLogo size={30}/>
              <span className="text-xl font-black"><span className="text-white">ADI</span><span className="text-[#CC3366] ml-1">X</span></span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">La plataforma educativa más completa para universitarios argentinos.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {[
              { title:'Plataforma', links:['Cursos','Universidades','Profesores','Precios'] },
              { title:'Universidades', links:['UBA Medicina','ORT','UDESA','Di Tella'] },
              { title:'Empresa', links:['Sobre nosotros','Blog','Contacto','Términos'] },
            ].map(col => (
              <div key={col.title}>
                <p className="text-white/50 font-semibold mb-4">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l}><a href="#" className="text-white/25 hover:text-white/60 transition-colors focus-visible:outline-none focus-visible:text-white/60">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© 2025 PADI X. Todos los derechos reservados.</p>
          <p className="text-white/15 text-xs">Hecho con <span className="text-[#CC3366]">♥</span> para estudiantes argentinos</p>
        </div>
      </div>
    </footer>
  )
}
