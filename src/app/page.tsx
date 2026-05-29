
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import PolarBearImpact from "@/components/sections/PolarBearImpact"
import ARGateway from "@/components/sections/ARGateway"
import CinematicGallery from "@/components/sections/CinematicGallery"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white relative selection:bg-primary selection:text-white">
      {/* Fondo de Puntos Técnicos */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "#ffffff",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <div className="space-y-0">
          <PolarBearImpact />
          <ARGateway />
          <CinematicGallery />
        </div>
        <Footer />
      </div>
    </main>
  )
}
