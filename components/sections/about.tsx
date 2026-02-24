"use client"

import { MapPin, Mail, Languages, User } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">&lt;</span>
          Sobre mí
          <span className="text-primary">/&gt;</span>
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">

          {/* Left Column: Biography */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <GlassCard className="p-8 md:p-10 flex flex-col h-full">
              <div className="mb-8 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shadow-inner">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">Perfil Profesional</h3>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Soy un profesional con <span className="text-primary font-semibold">alta motivación</span> y disponibilidad inmediata.
                  Mi enfoque va más allá del código: busco crear soluciones que resuelvan problemas reales.
                </p>
                <p>
                  Me especializo en el ecosistema Frontend moderno, transformando diseños en código limpio,
                  escalable y visualmente impactante. Poseo una alta capacidad de aprendizaje y adaptación
                  a nuevos entornos tecnológicos.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Details & Languages */}
          <div className="flex flex-col gap-6 md:gap-8">

            <GlassCard className="p-6 md:p-8">
              <div className="flex items-center justify-center gap-4">
                <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Ubicación</p>
                  <p className="font-medium text-[15px]">Ubrique, Cádiz, España</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-black/10 dark:bg-white/10 my-5" />

              <div className="flex items-center justify-center gap-4">
                <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email</p>
                  <a href="mailto:julioniecor@gmail.com" className="font-medium hover:text-primary transition-colors text-[15px] break-all">
                    julioniecor@gmail.com
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <Languages className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold tracking-tight">Idiomas</h3>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[15px]">Castellano</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none shadow-none">Nativo</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[15px]">Inglés</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none shadow-none">Alto</Badge>
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </div>
    </section>
  )
}