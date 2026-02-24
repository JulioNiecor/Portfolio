"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Code2, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Updates state only on threshold crossing to prevent render thrashing on scroll.
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <>
      <motion.nav
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
          <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tighter outline-none">
            <Code2 className="text-primary h-6 w-6" />
            <span>JNC<span className="text-primary">.</span></span>
          </a>

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
              {/* Fixed size container to prevent Cumulative Layout Shift (CLS) */}
              <div className="w-9 h-9 flex items-center justify-center">
                {mounted ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-9 h-9 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
                    onClick={toggleTheme}
                    aria-label="Cambiar tema"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
                  </Button>
                ) : (
                  // Static placeholder matching the button dimensions avoiding hydration mismatch
                  <div className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5" />
                )}
              </div>

              <Button variant="default" size="sm" className="rounded-full cursor-pointer" onClick={(e) => scrollToSection(e as any, "#contact")}>
                Contratar
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Fixed size container to prevent CLS (Mobile) */}
            <div className="w-9 h-9 flex items-center justify-center">
              {mounted ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
                  onClick={toggleTheme}
                  aria-label="Cambiar tema"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
                </Button>
              ) : (
                <div className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5" />
              )}
            </div>

            <button
              type="button"
              className="text-foreground cursor-pointer outline-none w-6 h-6 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}