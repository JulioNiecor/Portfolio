"use client"

import { cn } from "@/lib/utils"
import { GlassCard } from "@/components/ui/glass-card"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiAngular,
  SiHtml5, SiCss, SiTailwindcss, SiNodedotjs, SiFirebase,
  SiGit, SiGithub, SiFigma
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { Monitor, Palette, Server, PenTool } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Monitor,
    className: "md:col-span-2",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Angular", Icon: SiAngular }
    ]
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    className: "md:col-span-1",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Firebase", Icon: SiFirebase }
    ]
  },
  {
    title: "Styling & UI",
    icon: Palette,
    className: "md:col-span-1",
    skills: [
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss }
    ]
  },
  {
    title: "Herramientas & Flujo",
    icon: PenTool,
    className: "md:col-span-2",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Figma", Icon: SiFigma },
      { name: "VS Code", Icon: VscVscode }
    ]
  }
]

type Skill = {
  name: string;
  Icon: React.ElementType;
}

type Category = {
  title: string;
  icon: React.ElementType;
  className: string;
  skills: Skill[];
}

function BentoCard({ category, index }: { category: Category, index: number }) {
  const CategoryIcon = category.icon;
  return (
    <div className={cn("h-full", category.className)}>
      <GlassCard
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        className="md:p-8 flex flex-col h-full group/bento cursor-default"
        hoverEffect={true}
      >
        <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary shadow-inner border border-primary/20">
          <CategoryIcon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground/90">{category.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-auto relative z-10">
        {category.skills.map((skill) => {
          const TechIcon = skill.Icon;
          return (
            <div 
              key={skill.name}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-black/20 dark:bg-black/40 border border-white/5",
                "transition-all duration-300",
                "hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_-3px_var(--color-primary)] hover:-translate-y-1",
                "group/skill cursor-pointer"
              )}
            >
              <TechIcon className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary transition-colors duration-300" />
              <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </GlassCard>
    </div>
  )
  }

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 dark:opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">&lt;</span>
          Stack Tecnológico
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <BentoCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}