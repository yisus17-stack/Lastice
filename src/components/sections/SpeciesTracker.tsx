
"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { MapPin } from "lucide-react"
import Image from "next/image"

const species = [
  {
    name: "Oso Polar",
    latin: "Ursus Maritimus",
    risk: "Crítico",
    habitat: "Hielos Marinos",
    color: "bg-blue-500",
    image: "/oso-card.png"
  },
  {
    name: "Zorro Ártico",
    latin: "Vulpes Lagopus",
    risk: "Amenazado",
    habitat: "Tundra Alta",
    color: "bg-purple-500",
    image: "/zorro-card.png"
  },
  {
    name: "Narval",
    latin: "Monodon Monoceros",
    risk: "Vulnerable",
    habitat: "Aguas Glaciares",
    color: "bg-cyan-500",
    image: "/narval-card.png"
  }
]

export default function SpeciesTracker() {
  return (
    <section className="bg-white py-32 px-6 border-y border-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-6 tracking-tight text-[#1e293b]">
            Impacto en la vida <br /> <span className="text-primary">de las especies polares.</span>
          </h2>
          <p className="text-[#64748b] text-lg leading-relaxed font-body">
            Cada bloque de hielo que se fragmenta representa la pérdida de un hábitat milenario. Buscamos informar sobre las consecuencias directas que provoca el aumento de la temperatura en la fauna del ecosistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {species.map((item, idx) => (
            <GlassCard key={idx} className="bg-white/95 backdrop-blur-sm border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8 flex flex-col h-full group">
              <h3 className="text-3xl font-headline font-black mb-1 text-[#1e293b]">{item.name}</h3>
              <p className="text-sm text-slate-400 font-medium mb-6 tracking-wide">{item.latin}</p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8">
                 <MapPin className="w-4 h-4 text-primary" /> {item.habitat}
              </div>
              
              <div className="mt-auto w-full h-[400px] md:h-[550px] bg-slate-50 rounded-2xl relative overflow-hidden flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                 <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
