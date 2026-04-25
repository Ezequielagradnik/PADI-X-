/**
 * PADI X — pixel-accurate SVG recreation of the geometric brand logo.
 * P=lightbulb amber · A=2-tone pink triangle · D=2-tone teal · I=amber bars · X=2-tone pink diagonals
 */
export function PadiXLogo({ height = 40 }: { height?: number }) {
  const VW = 392, VH = 104
  return (
    <svg
      width={(VW / VH) * height}
      height={height}
      viewBox={`0 0 ${VW} ${VH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PADI X"
      role="img"
    >
      {/* ─── P  (lightbulb) ─── amber #CC9933 */}
      {/* Bulb */}
      <circle cx="40" cy="36" r="33" fill="#CC9933"/>
      {/* Two inner "eye" ovals — darker amber */}
      <ellipse cx="27" cy="33" rx="10" ry="11" fill="#9a6e10"/>
      <ellipse cx="52" cy="33" rx="10" ry="11" fill="#9a6e10"/>
      {/* Bridge connecting eyes */}
      <rect x="22" y="40" width="36" height="7" rx="3" fill="#9a6e10"/>
      {/* Filament / base lines — taper down */}
      <rect x="18" y="70" width="44" height="6"  rx="3" fill="#CC9933"/>
      <rect x="22" y="78" width="36" height="6"  rx="3" fill="#CC9933"/>
      <rect x="25" y="86" width="30" height="6"  rx="3" fill="#b08828"/>
      <rect x="28" y="94" width="24" height="6"  rx="3" fill="#b08828"/>

      {/* ─── A  (triangle) ─── dark + light pink */}
      {/* Outer dark triangle */}
      <polygon points="122,4 84,100 160,100" fill="#CC3366"/>
      {/* Inner lighter triangle */}
      <polygon points="122,30 100,90 144,90" fill="#e899b8"/>

      {/* ─── D  (teal) ─── */}
      {/* Left vertical bar */}
      <rect x="170" y="4" width="22" height="96" rx="4" fill="#339999"/>
      {/* Right D-curve (outer) */}
      <path d="M188 4 Q248 4 248 52 Q248 100 188 100 Z" fill="#339999"/>
      {/* Right D-curve (inner lighter) */}
      <path d="M195 19 Q232 19 232 52 Q232 85 195 85 Z" fill="#60b8b8"/>

      {/* ─── I  (two amber bars) ─── */}
      <rect x="258" y="4"  width="19" height="96" rx="4" fill="#CC9933"/>
      <rect x="284" y="4"  width="19" height="96" rx="4" fill="#CC9933"/>

      {/* ─── X  (two crossing diagonals) ─── */}
      {/* \ bar — dark pink */}
      <rect x="307" y="41" width="82" height="22" rx="9" fill="#CC3366"
        transform="rotate(51 348 52)"/>
      {/* / bar — light pink */}
      <rect x="307" y="41" width="82" height="22" rx="9" fill="#e899b8"
        transform="rotate(-51 348 52)"/>
    </svg>
  )
}
