"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowDown, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/ui/hero-background"

// Internal Typewriter Component
const roles = ["Desarrollador Frontend", "Arquitecto UI/UX", "Creador de Experiencias"]

function TypewriterEffect() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text, delta])

  const tick = () => {
    let i = roleIndex % roles.length
    let fullText = roles[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prev => prev / 1.5)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(2000)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setRoleIndex(roleIndex + 1)
      setDelta(150)
    }
  }

  return (
    <span className="border-r-2 border-primary animate-pulse pr-1">
      {text}
    </span>
  )
}

// Main Hero Component
export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <HeroBackground />

      <div className="container px-4 md:px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Animated Profile Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5 backdrop-blur-md shadow-[0_0_20px_-5px_var(--color-primary)]">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible para proyectos
            </Badge>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter">
              <span className="block text-foreground drop-shadow-2xl">Julio Nieto</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary via-cyan-400 to-primary bg-size-[200%_auto] animate-[gradient_4s_linear_infinite]">
                Cordón
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="h-8 md:h-12 text-xl md:text-3xl text-muted-foreground font-light">
              Soy <span className="text-foreground font-medium"><TypewriterEffect /></span>
            </div>
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transformo conceptos abstractos en interfaces web <span className="text-foreground font-medium underline decoration-primary/50 underline-offset-4">pixel-perfect</span>,
            rápidas y accesibles.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="group min-w-40 h-12 rounded-full text-base shadow-[0_0_30px_-10px_var(--color-primary)] hover:shadow-[0_0_40px_-5px_var(--color-primary)] transition-all duration-300 cursor-pointer"
              onClick={scrollToContact}
            >
              Contactar
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-40 h-12 rounded-full text-base border-border bg-background/80 hover:bg-muted hover:border-border cursor-pointer"
            >
              <a
                href="JulioNieto_CV_Simple.pdf"
                download="Julio_Nieto_Cordón_CV.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-0.5 h-12 bg-linear-to-b from-transparent via-primary to-transparent relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}