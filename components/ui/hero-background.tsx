"use client"

import { cn } from "@/lib/utils"

export function HeroBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden bg-background", className)}>
      {/* Background illumination layers */}
      <div className="absolute inset-0 opacity-60 dark:opacity-50">
        {/* Layer 1 */}
        <div
          className="absolute inset-0 will-change-[background-position]"
          style={{
            background: "radial-gradient(circle at var(--pos-x-1) var(--pos-y-1), var(--primary) 0%, transparent 55%)",
            animation: "move-aurora-1 20s ease-in-out infinite alternate"
          }}
        />

        {/* Layer 2 */}
        <div
          className="absolute inset-0 will-change-[background-position]"
          style={{
            background: "radial-gradient(circle at var(--pos-x-2) var(--pos-y-2), var(--primary) 0%, transparent 50%)",
            animation: "move-aurora-2 25s ease-in-out infinite alternate-reverse"
          }}
        />

        {/* Layer 3 */}
        <div
          className="absolute inset-0 will-change-[background-position]"
          style={{
            background: "radial-gradient(circle at var(--pos-x-3) var(--pos-y-3), var(--primary) 0%, transparent 45%)",
            animation: "move-aurora-3 30s ease-in-out infinite alternate"
          }}
        />
      </div>

      {/* Top vignette for text readability */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, var(--background) 100%)"
        }}
      />

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  )
}