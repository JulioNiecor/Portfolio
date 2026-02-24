"use client"

import { useCallback } from "react"
import { ArrowUp, Code2 } from "lucide-react"

export function Footer() {

  // Cached scroll function
  const scrollToTop = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 bg-background/40 backdrop-blur-md py-8 mt-12 relative z-20 transform-gpu">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">

        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={scrollToTop}
          className="flex items-center gap-2 font-bold text-xl tracking-tighter outline-none"
        >
          <Code2 className="text-primary h-6 w-6" />
          <span>JNC<span className="text-primary">.</span></span>
        </a>

        {/* Copyright Statement */}
        <p className="text-sm text-muted-foreground text-center md:text-left" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Julio Nieto Cordón. Todos los derechos reservados.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={() => scrollToTop()}
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition duration-300 hover:bg-primary/20 hover:scale-110 cursor-pointer outline-none will-change-transform"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 will-change-transform" />
        </button>

      </div>
    </footer>
  )
}