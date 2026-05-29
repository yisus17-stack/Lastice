
"use client"

import Image from "next/image"

export default function BottomLogo() {
  return (
    <section className="py-24 px-6 overflow-hidden flex justify-center items-center bg-white border-t border-slate-50">
      <div className="w-full max-w-[90rem] animate-in fade-in duration-1000">
        <Image 
          src="/ice.svg" 
          alt="Ice Decorative Logo" 
          width={1500} 
          height={400} 
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
