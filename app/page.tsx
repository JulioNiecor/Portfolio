import dynamic from 'next/dynamic'
import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero"

// Lazy-loaded sections to reduce initial bundle size and improve TTI.
const AboutSection = dynamic(() => import("@/components/sections/about").then(mod => mod.AboutSection))
const ExperienceSection = dynamic(() => import("@/components/sections/experience").then(mod => mod.ExperienceSection))
const SkillsSection = dynamic(() => import("@/components/sections/skills").then(mod => mod.SkillsSection))
const ProjectsSection = dynamic(() => import("@/components/sections/projects").then(mod => mod.ProjectsSection))
const ContactSection = dynamic(() => import("@/components/sections/contact").then(mod => mod.ContactSection))
const Footer = dynamic(() => import("@/components/layout/footer").then(mod => mod.Footer))

export default function Home() {
  return (
    <>
      {/* Persistent Navigation */}
      <Navbar />

      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 transform-gpu">
        {/* Critical Above-The-Fold Section */}
        <HeroSection />

        {/* Deferred Sections */}
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}