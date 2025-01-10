'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import { SectionHeader } from "./components/section-header"

export function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects-section" className="space-y-8 py-24 md:py-32">
      <SectionHeader 
        title="Featured Projects"
        subtitle="A selection of my recent work and personal projects"
      />
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="group relative h-full overflow-hidden">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />
              <CardHeader className="relative space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-blue-600">0{index + 1}</span>
                    <div className="h-px flex-1 bg-blue-100" />
                  </div>
                  <CardTitle className="text-blue-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="group/link inline-flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600"
                    >
                      <Github className="h-4 w-4" />
                      Source
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" />
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      className="group/link inline-flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application for managing team workflows and task automation.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description: "Real-time chat application with end-to-end encryption and file sharing capabilities.",
    technologies: ["Next.js", "WebSocket", "Redis", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description: "Mobile-first e-commerce platform with integrated payment processing and inventory management.",
    technologies: ["React Native", "Express", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Four",
    description: "AI-powered content generation tool for marketing teams and content creators.",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
    github: "#",
    demo: "#",
  },
]

