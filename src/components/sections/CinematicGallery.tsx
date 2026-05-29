
"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { PlayCircle, FileText, ArrowRight, Thermometer } from "lucide-react"

export default function CinematicGallery() {
  const natGeoUrl = "https://www.nationalgeographicla.com/medio-ambiente/2025/03/los-glaciares-del-mundo-se-derriten-mas-rapido-de-lo-que-pensabamos-asegura-una-investigacion"
  const iberdrolaUrl = "https://www.iberdrola.com/sostenibilidad/derretimiento-glaciares-causas-efectos-soluciones"

  return (
    <section id="investigacion" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-headline font-black mb-4 tracking-tight">Recursos técnicos y <br /> <span className="text-primary">evidencia científica.</span></h2>
          <p className="text-[#64748b] text-lg leading-relaxed font-body">
            Acceso directo a informes técnicos, datos de telemetría y recursos educativos sobre el impacto climático en los ecosistemas polares.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ResourceCard 
          icon={<PlayCircle className="w-8 h-8 text-primary" />} 
          title="Ver keynote del Sistema Zero" 
          link="Ver Video" 
          href="#"
        />
        <ResourceCard 
          icon={<FileText className="w-8 h-8 text-primary" />} 
          title="Investigación sobre deshielo acelerado" 
          link="Leer Informe" 
          href={natGeoUrl}
        />
        <ResourceCard 
          icon={<Thermometer className="w-8 h-8 text-primary" />} 
          title="Causas y soluciones globales" 
          link="Leer Artículo" 
          href={iberdrolaUrl}
        />
      </div>
    </section>
  )
}

function ResourceCard({ icon, title, link, href }: { icon: any, title: string, link: string, href: string }) {
  return (
    <GlassCard className="bg-white border-slate-100 shadow-sm hover:shadow-md flex flex-col p-10 h-full group">
      <div className="mb-8">{icon}</div>
      <h3 className="text-xl font-headline font-black mb-4 leading-snug group-hover:text-primary transition-colors">{title}</h3>
      
      <a 
        href={href} 
        target={href.startsWith('http') ? "_blank" : "_self"} 
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-2 text-primary font-bold text-sm cursor-pointer"
      >
        {link} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </GlassCard>
  )
}
