import { Aurora }          from './components/Aurora'
import { Cursor }          from './components/Cursor'
import { Navbar }          from './components/Navbar'
import { Hero }            from './components/Hero'
import { Universities }    from './components/Universities'
import { HowItWorks }      from './components/HowItWorks'
import { Dashboard3D }     from './components/Dashboard3D'
import { Pricing }         from './components/Pricing'
import { Teachers }        from './components/Teachers'
import { FinalCTA }        from './components/FinalCTA'
import { Footer }          from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <Aurora />
      <Cursor />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Universities />
        <HowItWorks />
        <Dashboard3D />
        <Pricing />
        <Teachers />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}
