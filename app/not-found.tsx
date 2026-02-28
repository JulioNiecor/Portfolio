"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Home, ArrowLeft, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/ui/hero-background"

export default function NotFound() {
    const router = useRouter()
    const [count, setCount] = useState(10)

    /** Auto-redirect countdown */
    useEffect(() => {
        if (count <= 0) {
            router.push("/")
            return
        }
        const timer = setTimeout(() => setCount((c) => c - 1), 1000)
        return () => clearTimeout(timer)
    }, [count, router])

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Cinematic Background */}
            <HeroBackground />

            {/* Logo — matches Navbar brand */}
            <motion.a
                href="/"
                aria-label="Volver al inicio"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-6 flex items-center gap-2 font-bold text-xl tracking-tighter outline-none z-20"
            >
                <Code2 className="text-primary h-6 w-6" />
                <span>JNC<span className="text-primary">.</span></span>
            </motion.a>

            {/* Main Content — mirrors hero layout */}
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-10">

                    {/* 404 Glyph — same fade-in as hero badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <span className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter select-none text-transparent bg-clip-text bg-linear-to-r from-primary via-cyan-400 to-primary bg-size-[200%_auto] animate-[gradient_4s_linear_infinite]">
                            404
                        </span>
                        <div className="absolute inset-0 -z-10 blur-3xl bg-primary/20 rounded-full scale-75" />
                    </motion.div>

                    {/* Title + Subtitle — same block structure as hero h1 */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            <span className="block text-foreground drop-shadow-2xl">Página no encontrada</span>
                        </h1>

                        {/* Description — same opacity-only fade as hero paragraph */}
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Parece que esta ruta no existe o fue movida.{" "}
                            <span className="text-foreground font-medium underline decoration-primary/50 underline-offset-4">
                                No te preocupes
                            </span>
                            , te llevamos de vuelta.
                        </motion.p>
                    </div>

                    {/* Action Buttons — same y:20 entrance as hero buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Button
                            size="lg"
                            className="group min-w-44 h-12 rounded-full text-base shadow-[0_0_30px_-10px_var(--color-primary)] hover:shadow-[0_0_40px_-5px_var(--color-primary)] transition-all duration-300 cursor-pointer"
                            onClick={() => router.push("/")}
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Ir al Inicio
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="min-w-44 h-12 rounded-full text-base border-border bg-background/80 hover:bg-muted hover:border-border cursor-pointer"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Volver Atrás
                        </Button>
                    </motion.div>

                </div>
            </div>

            {/* Countdown — same fade-in timing as hero scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Redirigiendo en</span>
                    <span className="font-mono font-bold text-primary text-base w-5 text-center">
                        {count}
                    </span>
                    <span>segundos...</span>
                </div>
            </motion.div>
        </div>
    )
}
