"use client"

import { Calendar, Briefcase, GraduationCap } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 dark:opacity-40"
                style={{
                    backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                }}
            />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

                    {/* Professional Experience Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Briefcase className="text-primary h-8 w-8" />
                            Experiencia
                        </h2>
                        <div className="space-y-6">
                            {/* Experience Item */}
                            <GlassCard className="p-6 border-l-4 border-l-primary relative">
                                <div className="absolute top-6 right-6">
                                    <Badge className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> 2023 - Presente
                                    </Badge>
                                </div>
                                <h3 className="text-xl font-bold mt-2">Desarrollador Web Front-end</h3>
                                <p className="text-primary font-medium mb-4">Freelance</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Desarrollo de proyectos web personalizados, implementando soluciones front-end modernas,
                                    optimización de rendimiento y diseño responsive adaptativo.
                                </p>
                            </GlassCard>

                            {/* Experience Item */}
                            <GlassCard className="p-6 border-l-4 border-l-primary opacity-90 relative">
                                <div className="absolute top-6 right-6">
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> 03/2023 - 06/2023
                                    </Badge>
                                </div>
                                <h3 className="text-xl font-bold mt-2">Desarrollador Web</h3>
                                <p className="text-primary font-medium mb-4">Vallealto Webtech</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Gestión y diseño de blogs corporativos, integración de APIs de redes sociales
                                    y optimización SEO técnica.
                                </p>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <GraduationCap className="text-primary h-8 w-8" />
                            Educación
                        </h2>
                        <div className="space-y-6">
                            <GlassCard className="p-6 border-l-4 border-l-primary relative">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">DAW - Desarrollo de Aplicaciones Web</h3>
                                    <Badge>2021 - 2023</Badge>
                                </div>
                                <p className="text-muted-foreground">I.E.S. Ntra. Sra. de los Remedios</p>
                                <p className="text-sm mt-2 text-muted-foreground">Ciclo Formativo de Grado Superior</p>
                            </GlassCard>

                            <GlassCard className="p-6 border-l-4 border-l-primary opacity-90 relative">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">Bachillerato Tecnológico</h3>
                                    <Badge variant="secondary">2019 - 2021</Badge>
                                </div>
                                <p className="text-muted-foreground">I.E.S. Ntra. Sra. de los Remedios</p>
                            </GlassCard>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}