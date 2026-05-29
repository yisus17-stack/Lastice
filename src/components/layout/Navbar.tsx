"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 group-hover:text-primary transition-colors leading-none whitespace-nowrap">
            The Last Ice
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <NavItem label="Inicio" href="#inicio" active />
          <NavItem label="Impacto" href="#impacto" />
          <NavItem label="Realidad Aumentada" href="#ar" />
          <NavItem label="Investigación" href="#investigacion" />
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 md:px-8 h-10 md:h-11 text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all shadow-none">
                  Unirse a la causa
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl overflow-hidden">
                
                {/* 🔥 IMPORTANTE PARA RADIX */}
                <DialogTitle className="sr-only">
                  Confirmación de participación
                </DialogTitle>

                <div className="flex flex-col items-center text-center py-8 animate-in fade-in zoom-in duration-500">

                  <div className="w-32 h-20 flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src="/last-ice.svg"
                      alt="Logo The Last Ice"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-headline font-bold text-[#1e293b] mb-2">
                    ¡Ahora eres parte del cambio!
                  </h3>

                  <p className="text-slate-500 font-body mb-6">
                    Tu apoyo ayuda a generar conciencia sobre el deshielo del Ártico
                    y el impacto del cambio climático en nuestro planeta.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </nav>
  )
}

function NavItem({
  label,
  href,
  active = false,
}: {
  label: string
  href: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className="text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group"
    >
      <span className={active ? "text-primary" : "text-slate-500 group-hover:text-primary"}>
        {label}
      </span>

      {active && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
      )}

      {!active && (
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300" />
      )}
    </Link>
  )
}