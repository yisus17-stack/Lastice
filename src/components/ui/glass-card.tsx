
import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function GlassCard({ className, hoverable = true, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hoverable && "hover:shadow-2xl hover:-translate-y-1 hover:border-white/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
