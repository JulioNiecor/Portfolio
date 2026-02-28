"use client"

// OPTIMIZACIÓN 1: Cambiamos MouseEvent por PointerEvent
import { PointerEvent, useCallback } from "react"
import { motion, useMotionTemplate, useMotionValue, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  activeGlow?: boolean
  outerGlow?: boolean
}

export function GlassCard({ children, className, hoverEffect = true, activeGlow = false, outerGlow = false, ...props }: GlassCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handlePointerMove = useCallback(
    ({ currentTarget, clientX, clientY }: PointerEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    },
    [mouseX, mouseY]
  )

  const softBg = useMotionTemplate`
    radial-gradient(400px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--primary) 12%, transparent), transparent 80%)
  `
  const neonBg = useMotionTemplate`
    radial-gradient(300px circle at ${mouseX}px ${mouseY}px, var(--primary), transparent 80%)
  `

  return (
    <motion.div
      className="relative group h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {outerGlow && (
        <div
          className={cn(
            "absolute -inset-1 rounded-2xl bg-primary/20 blur-xl transition-opacity duration-500 -z-10",
            "dark:bg-primary/40 dark:blur-2xl",
            activeGlow ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        />
      )}

      <div
        // OPTIMIZACIÓN 1.1: Usamos onPointerMove en lugar de onMouseMove
        onPointerMove={hoverEffect ? handlePointerMove : undefined}
        className={cn(
          "glass-card relative flex flex-col h-full w-full overflow-hidden rounded-xl p-6",
          "bg-card border border-border",
          className
        )}
      >
        {hoverEffect && (
          <motion.div
            // OPTIMIZACIÓN 3: transform-gpu, translate-z-0 y will-change mandan esta capa a la tarjeta gráfica.
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0 transform-gpu translate-z-0 will-change-[background,opacity]"
            style={{ background: softBg }}
          />
        )}

        {hoverEffect && (
          <motion.div
            // OPTIMIZACIÓN 3: Igual aquí. Crucial para las máscaras complejas.
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10 transform-gpu translate-z-0 will-change-[background,opacity]"
            style={{
              background: neonBg,
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "2px",
            }}
          />
        )}

        <div className="relative z-20 flex flex-col grow">
          {children}
        </div>
      </div>
    </motion.div>
  )
}