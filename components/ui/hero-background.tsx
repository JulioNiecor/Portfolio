"use client"

import { cn } from "@/lib/utils"

export function HeroBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden bg-background", className)}>
      {/* Background illumination layers */}
      <div className="absolute inset-0 opacity-60 dark:opacity-50">
        {/* Layer 1 */}
        <div
          className="absolute inset-0 will-change-[background-position] animate-aurora-1"
          style={{
            background: "radial-gradient(circle at var(--pos-x-1) var(--pos-y-1), var(--primary) 0%, transparent 55%)",
          }}
        />

        {/* Layer 2 */}
        <div
          className="absolute inset-0 will-change-[background-position] animate-aurora-2"
          style={{
            background: "radial-gradient(circle at var(--pos-x-2) var(--pos-y-2), var(--primary) 0%, transparent 50%)",
          }}
        />

        {/* Layer 3 */}
        <div
          className="absolute inset-0 will-change-[background-position] animate-aurora-3"
          style={{
            background: "radial-gradient(circle at var(--pos-x-3) var(--pos-y-3), var(--primary) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* Noise Texture Overlay for premium brutalist/studio aesthetic */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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