
"use client"

import { QrCode } from "lucide-react"
import Image from "next/image"

export default function ARGateway() {
  return (
    <section id="ar" className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left z-20">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Tecnología Inmersiva</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold mb-8 text-[#1e293b] tracking-tight leading-[1.05]">
              Realidad Aumentada <br /> 
              con <span className="text-primary">Unity</span>
            </h2>
            <p className="text-[#64748b] text-lg md:text-xl leading-relaxed font-body max-w-xl mx-auto lg:mx-0 mb-6">
              El sitio incorpora un entorno 3D interactivo desarrollado en Unity. Al escanear el QR, podrás visualizar la telemetría del proyecto en tu propio espacio.
            </p>
            <p className="text-[#64748b] text-base md:text-lg leading-relaxed font-body max-w-xl mx-auto lg:mx-0 opacity-80">
              Observa de cerca cómo la pérdida de hielo afecta directamente el equilibrio de los ecosistemas árticos a través de visualización avanzada.
            </p>
          </div>

          <div className="flex-1 relative flex justify-center w-full max-w-[400px] lg:max-w-none mt-12 lg:mt-0">
            <div className="relative group">
              {/* Phone Container */}
              <div className="w-[300px] h-[580px] md:w-[340px] md:h-[650px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-2.5 md:p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 border-[6px] md:border-[8px] border-[#1a1a1a]">
                <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative flex flex-col p-5 pb-6 md:p-6 md:pb-8">
                   
                   {/* 1. TOP NAV: LINEA DECORATIVA */}
                   <div className="flex items-center mb-6 pt-2">
                      <div className="h-[1px] flex-1 bg-slate-100" />
                   </div>

                   {/* 2. CENTER: LOGO CENTRAL */}
                   <div className="flex-1 flex items-center justify-center relative mb-4">
                      <div className="relative w-full h-[150px] md:h-[180px] animate-in fade-in zoom-in duration-1000">
                        <Image 
                          src="/last-ice.svg" 
                          alt="Logo AR" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                   </div>

                   {/* 3. BOTTOM CARD: QR SUBIDO */}
                   <div className="flex flex-col items-center mt-auto mb-4">
                      <div className="bg-white p-4 md:p-5 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-4 flex flex-col items-center w-full">
                        <div className="bg-white p-2 rounded-xl mb-3 border border-slate-50">
                          <QrCode className="w-20 h-20 md:w-24 md:h-24 text-[#0f172a]" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-[#0f172a] text-[12px] md:text-sm font-bold tracking-tight text-center leading-tight mb-1 whitespace-nowrap">Entorno 3D Interactivo</h4>
                        <p className="text-[9px] md:text-[10px] text-slate-400 font-medium text-center leading-relaxed">Escanea para visualizar la telemetría <br /> y el impacto en tiempo real.</p>
                      </div>

                      <div className="w-full h-11 md:h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white font-bold text-[9px] md:text-[10px] uppercase tracking-[0.25em] transition-all cursor-pointer shadow-lg shadow-primary/20 active:scale-95 whitespace-nowrap px-6">
                        Escanea para iniciar
                      </div>
                   </div>

                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
