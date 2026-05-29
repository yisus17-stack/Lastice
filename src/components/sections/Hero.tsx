
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [snowflakes, setSnowflakes] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([])

  useEffect(() => {
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
      size: `${2 + Math.random() * 4}px`
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <section id="inicio" className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-16 pb-12 overflow-hidden bg-white">
      {/* SNOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake bg-primary/20"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDuration: flake.duration,
              animationDelay: flake.delay,
              opacity: 0.4
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <div className="relative w-[115%] sm:w-full max-w-6xl mb-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Image 
            src="/last-ice.svg" 
            alt="The Last Ice Logo" 
            width={1200} 
            height={300} 
            priority
            className="w-full h-auto"
          />
        </div>
        
        <div className="max-w-4xl -mt-6 md:-mt-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 flex flex-col items-center w-full">
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full max-w-xs sm:max-w-none">
            <Link href="#impacto" className="w-full sm:w-auto">
              <Button className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-[10px] uppercase tracking-[0.25em] transition-all shadow-none w-full">
                Explorar el Impacto <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link href="#ar" className="w-full sm:w-auto">
              <Button variant="outline" className="h-14 px-10 border-slate-200 text-slate-500 font-bold rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-slate-50 transition-all shadow-none w-full bg-white/50 backdrop-blur-sm">
                Experiencia 3D Unity
              </Button>
            </Link>
          </div>

          <p className="text-lg md:text-2xl text-slate-500 font-body leading-relaxed max-w-4xl px-4">
            Una plataforma de concienciación ambiental que fusiona tecnología avanzada y narrativa visual para exponer la realidad del deshielo ártico.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full mt-24 border-t border-slate-100 pt-12 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 px-4">
        <StatItem number="128" label="Giga-toneladas perdidas" />
        <StatItem number="2026" label="Año Crítico" />
        <StatItem number="AR" label="Tecnología Unity" />
        <StatItem number="100%" label="Conciencia Social" />
      </div>
    </section>
  )
}

function StatItem({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-4xl md:text-5xl font-headline font-bold text-[#1e293b] tracking-tighter">{number}</div>
      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2 leading-tight max-w-[120px]">{label}</div>
    </div>
  )
}
