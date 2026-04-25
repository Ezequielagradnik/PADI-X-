export function Aurora() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Blob 1 — magenta */}
      <div
        className="absolute rounded-full opacity-[0.18] blur-[130px]"
        style={{
          width: 700, height: 600,
          top: '-10%', left: '5%',
          background: 'radial-gradient(ellipse, #CC3366, #880033)',
          animation: 'blob1 14s ease-in-out infinite',
        }}
      />
      {/* Blob 2 — teal */}
      <div
        className="absolute rounded-full opacity-[0.13] blur-[150px]"
        style={{
          width: 600, height: 500,
          top: '20%', right: '-5%',
          background: 'radial-gradient(ellipse, #339999, #004444)',
          animation: 'blob2 18s ease-in-out infinite',
        }}
      />
      {/* Blob 3 — amber */}
      <div
        className="absolute rounded-full opacity-[0.10] blur-[120px]"
        style={{
          width: 500, height: 400,
          bottom: '5%', left: '30%',
          background: 'radial-gradient(ellipse, #CC9933, #664400)',
          animation: 'blob3 22s ease-in-out infinite',
        }}
      />
      {/* Subtle overlay vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, #050505 80%)',
        }}
      />
    </div>
  )
}
