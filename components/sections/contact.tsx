"use client"

import { Mail, MapPin, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 md:px-6 relative w-full flex justify-center">

      {/* Background Animated Radial Core */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] lg:w-[80vw] h-[80vh] bg-primary/20 rounded-[100%] blur-[100px] md:blur-[150px] opacity-60 animate-pulse"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)"
          }}
        />
      </div>

      <div className="w-full max-w-5xl relative z-10">

        {/* Section Header */}
        <div className="mb-20 w-full flex flex-col items-center text-center">

          {/* Animated Context Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5 backdrop-blur-md shadow-[0_0_20px_-5px_var(--color-primary)]">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible para proyectos
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight flex items-center justify-center gap-3 mb-6 text-foreground">
            Hablemos
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Ya sea para un proyecto emocionante, una consulta técnica o simplemente para conectar. Mi bandeja de entrada está lista para el siguiente nivel.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-stretch">

          {/* Email Card */}
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center">
            <div className="w-full h-full flex items-center justify-center gap-4">
              <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email</p>

                <a href="mailto:julioniecor@gmail.com" aria-label="Enviar correo electrónico" className="font-medium text-foreground hover:text-primary transition-colors text-[15px] break-all outline-none">
                  julioniecor@gmail.com
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Location Card */}
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center">
            <div className="w-full h-full flex items-center justify-center gap-4">
              <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Ubicación</p>
                <span className="font-medium text-foreground text-[15px] break-all">
                  Ubrique, Cádiz, España
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Social Media Card */}
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-4">Redes Sociales</p>
              <div className="flex flex-row gap-4">

                <a href="https://www.linkedin.com/in/julioniecor/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de LinkedIn" className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/JulioNiecor" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de GitHub" className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  )
}