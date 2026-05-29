
"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Activity, Thermometer, Waves, Zap } from "lucide-react"

export default function IceVisualizer() {
  return (
    <section className="px-6 py-32 max-w-7xl mx-auto border-t border-muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div>
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">Información del Proyecto</span>
          <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8 leading-none tracking-tight">
            Visualizando la problemática <br /> <span className="text-primary">de manera moderna e inmersiva.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-body">
            The Last Ice utiliza colores fríos y elementos visuales de alta gama para informar sobre el aumento de la temperatura global en los ecosistemas polares, buscando generar un impacto visual y emocional profundo.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FeatureItem 
              icon={<Activity className="w-5 h-5" />} 
              title="Datos Relevantes" 
              desc="Estadísticas precisas sobre el cambio climático global y el deshielo." 
            />
            <FeatureItem 
              icon={<Zap className="w-5 h-5" />} 
              title="Impacto Visual" 
              desc="Imágenes impactantes inspiradas en el entorno ártico." 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="md:col-span-2 h-72 bg-secondary/10 flex flex-col items-center justify-center border-muted shadow-none group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-20">
                <Activity className="w-32 h-32 text-primary -mr-8 -mt-8" />
             </div>
             <div className="text-center relative z-10">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Reducción de Masa Glaciar</span>
                <div className="text-8xl font-bold font-headline tracking-tighter">64.2%</div>
                <div className="mt-4 flex items-center justify-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Problemática Ambiental Crítica</span>
                </div>
             </div>
          </GlassCard>
          
          <div className="space-y-6">
            <DataPoint icon={<Thermometer />} value="+1.84°C" label="Anomalía Térmica" />
            <DataPoint icon={<Waves />} value="4.2mm" label="Aumento Nivel del Mar" />
          </div>
          
          <GlassCard className="bg-primary flex flex-col justify-between p-8 text-white border-none shadow-xl shadow-primary/20">
             <Activity className="w-8 h-8 opacity-50" />
             <div>
                <div className="text-3xl font-bold font-headline mb-1">Inmersión</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Conciencia a través de la web</div>
             </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-10 h-10 rounded bg-secondary/50 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm text-foreground mb-1 uppercase tracking-tight">{title}</h4>
        <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
      </div>
    </div>
  )
}

function DataPoint({ icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <GlassCard className="bg-white border-muted shadow-none flex items-center gap-6 p-6">
       <div className="text-primary">{icon}</div>
       <div>
          <div className="text-2xl font-bold font-headline tracking-tight">{value}</div>
          <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{label}</div>
       </div>
    </GlassCard>
  )
}
