"use client"

import { useState } from "react"
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Updates state only on threshold crossing to prevent render thrashing on scroll.
    setIsScrolled(latest > 50)
  })

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <>
      <m.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "h-16 bg-background/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-lg"
            : "h-20 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" aria-label="Volver al inicio" className="flex items-center gap-2 font-bold text-xl tracking-tighter outline-none">
            <Code2 className="text-primary h-6 w-6" />
            <span>JNC<span className="text-primary">.</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group outline-none"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}

            <div className="flex items-center gap-4">
              <Button variant="default" size="sm" className="rounded-full cursor-pointer" onClick={(e) => scrollToSection(e, "#contact")}>
                Contratar
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              className="text-foreground cursor-pointer outline-none w-6 h-6 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </m.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 transform-gpu will-change-transform"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-2xl font-semibold hover:text-primary transition-colors outline-none"
              >
                {item.name}
              </a>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}