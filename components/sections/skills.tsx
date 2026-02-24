"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const rowOneSkills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Tailwind CSS"
]

const rowTwoSkills = [
  "Git", "GitHub", "Firebase", "Figma", "Node.js", "VS Code", "Responsive Design", "UI/UX"
]

/**
 * Individual skill pill component with hover effects.
 * Memoized to prevent unnecessary re-renders during parent layout shifts.
 */
const SkillPill = memo(function SkillPill({ text }: { text: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-8 py-1 rounded-xl cursor-default group",
        "transition duration-300",
        "border border-black/5 dark:border-white/5 bg-black/5 dark:bg-secondary/10 shadow-sm dark:shadow-lg",
        "hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-primary/30 dark:hover:border-primary/50 hover:shadow-[0_0_15px_var(--color-primary)] dark:hover:shadow-[0_0_20px_var(--color-primary)]",
        "will-change-[box-shadow,background-color,border-color]"
      )}
    >
      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
        {text}
      </span>
    </div>
  )
})

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">&lt;</span>
          Stack Tecnológico
          <span className="text-primary">/&gt;</span>
        </h2>

        <motion.div
          className="relative flex flex-col gap-8 py-8 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First Row: Marquee Left */}
          <div className="flex w-full pause-on-hover">
            <div className="flex w-max animate-marquee-left gap-4 pr-4 py-2 transform-gpu will-change-transform">
              {rowOneSkills.map((skill) => (
                <SkillPill key={`row1-a-${skill}`} text={skill} />
              ))}
            </div>
            <div className="flex w-max animate-marquee-left gap-4 pr-4 py-2 transform-gpu will-change-transform" aria-hidden="true">
              {rowOneSkills.map((skill) => (
                <SkillPill key={`row1-b-${skill}`} text={skill} />
              ))}
            </div>
          </div>

          {/* Second Row: Marquee Right */}
          <div className="flex w-full pause-on-hover">
            <div className="flex w-max animate-marquee-right gap-4 pr-4 py-2 transform-gpu will-change-transform">
              {rowTwoSkills.map((skill) => (
                <SkillPill key={`row2-a-${skill}`} text={skill} />
              ))}
            </div>
            <div className="flex w-max animate-marquee-right gap-4 pr-4 py-2 transform-gpu will-change-transform" aria-hidden="true">
              {rowTwoSkills.map((skill) => (
                <SkillPill key={`row2-b-${skill}`} text={skill} />
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}