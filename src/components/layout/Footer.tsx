
"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-50 py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        
        {/* LOGO DE MARCA - Tamaño optimizado y mayor visibilidad */}
        <div className="relative w-40 h-10 opacity-90 hover:opacity-100 transition-opacity">
          <Image 
            src="/last-ice.svg" 
            alt="The Last Ice Logo" 
            fill 
            className="object-contain"
          />
        </div>

        {/* SEPARADOR DECORATIVO */}
        <div className="hidden md:block w-px h-6 bg-slate-200" />

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            © 2026 Innovación tecnológica
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300 mt-1">
            Para la concientización ambiental.
          </p>
        </div>

      </div>
    </footer>
  )
}
