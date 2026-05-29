
"use client"

export default function PolarBearImpact() {
  return (
    <section id="impacto" className="py-24 px-6 bg-[#f8fafc] overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="max-w-4xl text-center space-y-8">
          {/* Etiqueta de sección clara */}
          <div className="inline-block px-5 py-2 mb-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Análisis de Impacto</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-[#1e293b] tracking-tight leading-[1.1]">
            Consecuencias críticas del <br /> 
            <span className="text-primary">deshielo ártico.</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-slate-600 font-body leading-relaxed text-center">
            <p>
              La pérdida de masa glaciar no es solo un cambio visual; es la destrucción del principal regulador térmico del planeta. El <strong>Efecto Albedo</strong> se debilita a medida que el hielo blanco, que refleja el 80% de la radiación solar, es sustituido por océano oscuro que absorbe el calor masivamente.
            </p>
            <p className="opacity-80">
              Esta absorción de energía altera la <strong>Circulación Termohalina</strong>, la gran "cinta transportadora" oceánica que estabiliza el clima global. Cada giga-tonelada de hielo derretido inyecta agua dulce en el Atlántico Norte, amenazando con colapsar los patrones meteorológicos.
            </p>
            
            <div className="text-base md:text-lg border-l-4 border-primary/30 pl-8 pr-4 bg-slate-50/80 py-6 text-slate-700 text-left rounded-r-2xl">
              <p className="leading-relaxed">
                "Si el Ártico deja de ser el refrigerador del mundo, el equilibrio biológico de todas las latitudes entrará en un punto de no retorno. No estamos salvando el hielo, nos estamos salvando a nosotros mismos."
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-4">
                — Informe de Telemetría Ártica 2026
              </p>
            </div>
          </div>
          
          <div className="pt-12 flex justify-center gap-12 border-t border-slate-200">
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">Crítico</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nivel de Riesgo</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">13.1%</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Pérdida/Década</span>
             </div>
             <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-bold text-primary">+4.5mm</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aumento Mar/Año</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
