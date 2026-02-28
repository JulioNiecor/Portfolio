"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Cineflix",
    description: "Es una aplicación diseñada para explorar un catálogo extenso de películas y series en tiempo real. Su estructura incluye una página de inicio donde se organizan los títulos por categorías (Tendencias, Mejor Valoradas, Próximos Estrenos, etc.). El objetivo principal es ofrecer una experiencia de usuario fluida con una navegación intuitiva, permitiendo al usuario visualizar detalles de cada producción, posters, sinopsis y valoraciones.",
    tech: ["Angular", "TypeScript", "CSS3", "Firebase", "TMDB API"],
    github: "https://github.com/JulioNiecor/JNC-Cineflix",
    demo: "https://jnc-cineflix.netlify.app/home",
    image: "/projects/cineflix.webp",
  },
  {
    id: 2,
    title: "Tareas Cozy / TODO",
    description: "Es una aplicación de lista de tareas (To-Do List) que permite a los usuarios añadir, gestionar y visualizar sus pendientes. La versión alojada en Netlify sugiere un enfoque en la experiencia de usuario (UX) con un estilo Cozy (acogedor/tranquilo), buscando simplicidad y claridad visual. Al estar construida con herramientas modernas, ofrece una interfaz rápida y reactiva.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JulioNiecor/TODO",
    demo: "https://jnctodo.netlify.app/",
    image: "/projects/todo.webp",
  },
  {
    id: 3,
    title: "Cineflix V2",
    description: "Cineflix V2 es una plataforma de contenido audiovisual diseñada para ofrecer una experiencia de usuario cinematográfica hiper-fluida. Actuando como un agregador moderno de TheMovieDB (TMDB), permite a los usuarios explorar, buscar y reproducir metadatos y tráilers de miles de películas y series en tiempo real.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL", "NextAuth", "TheMovieDB (TMDB) API", "YouTube Iframe API"],
    github: "https://github.com/JulioNiecor/Cineflix-V2",
    demo: "https://jnccineflixv2.netlify.app/",
    image: "/projects/cineflixv2.webp",
  },
]

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
} as const;

/**
 * Project card component with 3D transformations and drag support.
 * Memoized to avoid re-renders on sibling card updates.
 */
const ProjectCard = memo(function ProjectCard({
  project, isCenter, offset, isMobile, handleDragEnd, openLink, isPriority
}: any) {
  const xTranslation = isMobile ? offset * 180 : offset * 260;
  const zTranslation = isMobile ? -100 : -200;
  const yRotation = isMobile ? offset * -15 : offset * -25;
  const scaleValue = isCenter ? 1 : (isMobile ? 0.85 : 0.82);

  return (
    <motion.div
      className={cn(
        "absolute w-full max-w-70 md:max-w-120 will-change-transform touch-pan-y",
        isCenter ? "z-30 cursor-grab active:cursor-grabbing" : "z-10"
      )}
      initial={{ opacity: 0, scale: 0.8, x: offset * 200, z: 0.1 }}
      animate={{
        opacity: isCenter ? 1 : 0.4,
        scale: scaleValue,
        x: xTranslation,
        z: isCenter ? 0 : zTranslation,
        rotateY: yRotation,
      }}
      exit={{ opacity: 0, scale: 0.5, x: offset * 200, z: -200 }}
      transition={springTransition}

      drag={isCenter ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <GlassCard
        activeGlow={isCenter}
        hoverEffect={isCenter}
        className={cn(
          "flex flex-col p-0 group/card",
          "bg-transparent backdrop-blur-none",
          isCenter ? "border-primary/50 shadow-[0_0_30px_-5px_var(--color-primary)] transition-[box-shadow,border-color] duration-500" : "border-border shadow-none transition-[box-shadow,border-color] duration-500"
        )}
      >
        <div className="relative h-40 md:h-60 w-full shrink-0 overflow-hidden bg-muted/20">
          <Image
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover transition-transform duration-700 group-hover/card:scale-105 select-none pointer-events-none [-webkit-user-drag:none]"
            priority={isPriority}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className="absolute -bottom-4 -right-4 text-5xl md:text-6xl font-black text-foreground/20 dark:text-foreground/60 uppercase pointer-events-none mix-blend-overlay">
            0{project.id}
          </div>
        </div>

        <div className="relative p-5 md:p-8 flex flex-col grow border-t border-border overflow-hidden">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl -z-10" />
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 relative z-10">{project.title}</h3>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6 grow relative z-10 line-clamp-5 md:line-clamp-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-8 relative z-10">
            {project.tech.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[9px] md:text-[10px] uppercase">
                {tech}
              </Badge>
            ))}
          </div>

          <div className={cn(
            "flex items-center gap-3 md:gap-4 transition-all duration-300 relative z-20 will-change-[transform,opacity]",
            isCenter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}>
            <Button
              className="flex-1 gap-2 group cursor-pointer text-xs md:text-sm h-9 md:h-10"
              onClick={(e) => openLink(e, project.demo)}
            >
              Ver Demo
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-muted cursor-pointer bg-background/50 h-9 w-9 md:h-10 md:w-10 transition-colors duration-300"
              onClick={(e) => openLink(e, project.github)}
            >
              <Github className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
});

/**
 * Carousel pagination dot indicator.
 */
const PaginationDot = memo(function PaginationDot({ isActive, index, onClick }: any) {
  const handleClick = useCallback(() => onClick(index), [index, onClick]);
  return (
    <button
      onClick={handleClick}
      aria-label={`Ir al proyecto ${index + 1}`}
      className={cn(
        "h-2 rounded-full transition-all duration-500 cursor-pointer",
        isActive
          ? "w-8 bg-primary shadow-md shadow-primary/20 dark:shadow-[0_0_10px_var(--color-primary)]"
          : "w-2 bg-border hover:bg-muted-foreground/40"
      )}
    />
  )
});

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleMediaChange)
    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [])

  const paginate = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      let nextIndex = prev + direction
      if (nextIndex < 0) nextIndex = projects.length - 1
      if (nextIndex >= projects.length) nextIndex = 0
      return nextIndex
    })
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1)
      if (e.key === "ArrowRight") paginate(1)
    }
    window.addEventListener("keydown", handleKeyDown, { passive: true })
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [paginate])

  const handleDragEnd = useCallback((e: any, { offset }: PanInfo) => {
    const swipe = offset.x
    const swipeThreshold = 50
    if (swipe < -swipeThreshold) paginate(1)
    else if (swipe > swipeThreshold) paginate(-1)
  }, [paginate])

  const openLink = useCallback((e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  }, [])

  return (
    <section id="projects" className="py-32 px-4 md:px-6 relative overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-1/2 bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-4">
              <span className="text-primary">&lt;</span>
              Proyectos Destacados
              <span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Una selección de mis mejores trabajos, donde aplico mi pasión por el diseño de interfaces y el código limpio.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <Button variant="outline" size="icon" onClick={() => paginate(-1)} className="rounded-full border-white/10 bg-background/50 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors duration-300">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => paginate(1)} className="rounded-full border-white/10 bg-background/50 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors duration-300">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Animated Carousel Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative h-120 md:h-155 w-full flex justify-center items-center" style={{ perspective: "1200px", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}>
            <AnimatePresence mode="popLayout" initial={false}>
              {projects.map((project, index) => {
                const isCenter = index === currentIndex
                const isLeft = index === (currentIndex - 1 + projects.length) % projects.length
                const isRight = index === (currentIndex + 1) % projects.length

                if (!isCenter && !isLeft && !isRight && projects.length > 3) return null

                let offset = 0
                if (isLeft) offset = -1
                if (isRight) offset = 1

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isCenter={isCenter}
                    offset={offset}
                    isMobile={isMobile}
                    handleDragEnd={handleDragEnd}
                    openLink={openLink}
                    isPriority={index === 0}
                  />
                )
              })}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-6 mt-6 md:hidden relative z-50">
            <Button variant="outline" size="icon" onClick={() => paginate(-1)} className="rounded-full border-white/10 bg-background/50 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors duration-300">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => paginate(1)} className="rounded-full border-white/10 bg-background/50 hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors duration-300">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center items-center gap-3 mt-6 md:mt-8 relative">
            {projects.map((_, idx) => (
              <PaginationDot
                key={idx}
                index={idx}
                isActive={currentIndex === idx}
                onClick={setCurrentIndex}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}