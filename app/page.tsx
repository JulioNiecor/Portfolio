"use client"

import { useState, useEffect } from "react"
import { Code2, Mail, Phone, MapPin, Globe, Github, Linkedin, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "experience", label: "Experiencia" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    { id: "education", label: "Educación" },
    { id: "contact", label: "Contacto" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">JNC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-accent rounded-md ${
                    activeSection === item.id ? "text-primary bg-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Badge variant="outline" className="mb-4">
                <Code2 className="mr-2 h-3 w-3" />
                Desarrollador Web Front-end
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Julio Nieto <span className="text-primary">Cordón</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Creando experiencias web modernas con <span className="text-primary font-semibold">HTML5</span>,{" "}
              <span className="text-primary font-semibold">CSS</span>,{" "}
              <span className="text-primary font-semibold">JavaScript</span>, {" "}
              <span className="text-primary font-semibold">Angular</span> y {" "}
              <span className="text-primary font-semibold">entre otras...</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")}>
                Ver Proyectos
              </Button>
            </div>
            <div className="pt-8">
              <button
                onClick={() => scrollToSection("about")}
                className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronDown className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">&lt;</span>
            Sobre mí
            <span className="text-primary">/&gt;</span>
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Profesional con{" "}
                  <span className="font-semibold text-primary">alta motivación y disponibilidad inmediata</span>,
                  abierto a oportunidades laborales en distintos sectores. Experiencia como desarrollador web con
                  conocimientos en HTML5, CSS, JavaScript y Angular.
                </p>
                <p className="text-lg leading-relaxed">
                  Manejo de <span className="font-semibold text-primary">Git y GitHub</span>. Alta capacidad de
                  aprendizaje, adaptación a nuevos entornos y orientación a resultados.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Cádiz, España</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>julioniecor@gmail.com</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-semibold mb-3 text-lg">Idiomas</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Castellano - Nativo
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Inglés - Nivel alto
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">&lt;</span>
            Experiencia
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl">Desarrollador Web Front-end</CardTitle>
                    <CardDescription className="text-base mt-1">Vallealto Webtech</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    03/2023 - 06/2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Gestión y diseño de blogs</li>
                  <li>Diseño web</li>
                  <li>Integración de Redes Sociales</li>
                  <li>SEO (Optimización para Motores de Búsqueda)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl">Desarrollador Web Front-end</CardTitle>
                    <CardDescription className="text-base mt-1">Freelance</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2023 - 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desarrollo de proyectos web personalizados, implementando soluciones front-end
                  modernas y responsive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">&lt;</span>
            Habilidades
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Tecnologías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML5</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Angular</Badge>
                  <Badge>Bootstrap</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>WordPress</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Herramientas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Visual Studio Code</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">NPM</Badge>
                  <Badge variant="secondary">FileZilla</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Chrome DevTools</Badge>
                  <Badge variant="secondary">Windows</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Especialidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Desarrollo Front-end</Badge>
                  <Badge variant="outline">Diseño Responsive</Badge>
                  <Badge variant="outline">SEO</Badge>
                  <Badge variant="outline">Control de Versiones</Badge>
                  <Badge variant="outline">Integración de APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Habilidades Blandas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Aprendizaje Rápido</Badge>
                  <Badge variant="outline">Adaptabilidad</Badge>
                  <Badge variant="outline">Orientación a Resultados</Badge>
                  <Badge variant="outline">Trabajo en Equipo</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">&lt;</span>
            Proyectos
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-colors overflow-hidden">
              <a href="https://jnc-cineflix.netlify.app/home">
                <div className="aspect-video bg-accent relative overflow-hidden">
                  <img
                    src="https://media.discordapp.net/attachments/1335644715210768425/1452722871062237347/Captura_de_pantalla_2025-12-22_182302.png?ex=694ad91a&is=6949879a&hm=d2cdf4e819313e73c1248b7fbab7acfe848356cb9c814e9273eac4c3e409aa89&=&format=webp&quality=lossless&width=1811&height=856"
                    alt="No se pudo cargar la imagen"
                    className="w-full h-full object-content align-mid"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl">Cineflix</CardTitle>
                      <CardDescription className="text-base mt-1">Aplicación Web de Películas y Series</CardDescription>
                    </div>
                    <Badge>2023 - 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Aplicación web desarrollada en Angular que permite a los usuarios explorar sus películas y series
                    favoritas. Desarrollada con HTML5, CSS, Angular, TypeScript. Utilización de Firebase para la
                    autenticación y Bootstrap para el diseño.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Angular</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Bootstrap</Badge>
                    <Badge variant="secondary">HTML5</Badge>
                    <Badge variant="secondary">CSS</Badge>
                  </div>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">&lt;</span>
            Educación
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl">C.F.G.S de Desarrollo de Aplicaciones Web (DAW)</CardTitle>
                    <CardDescription className="text-base mt-1">I.E.S. Ntra. Sra. de los Remedios</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2021 - 2023
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl">Bachillerato Tecnológico</CardTitle>
                    <CardDescription className="text-base mt-1">I.E.S. Ntra. Sra. de los Remedios</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2019 - 2021
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">&lt;</span>
            Contacto
            <span className="text-primary">/&gt;</span>
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
                <p className="text-xl text-muted-foreground">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <a
                    href="mailto:julioniecor@gmail.com"
                    className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-border hover:border-primary transition-colors group"
                  >
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">julioniecor@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-border">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium">Cádiz, España</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <Button size="lg" asChild>
                    <a href="mailto:julioniecor@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Julio Nieto Cordón. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/JulioNiecor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/julioniecor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
