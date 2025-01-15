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
    <section id="projects-section" className="py-12 md:py-16">
      <SectionHeader 
        title="Featured Projects"
        subtitle="A selection of my recent work and personal projects"
      />
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="group relative h-full overflow-hidden bg-[#1a365d]">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#edf0fc]/10 transition-transform duration-500 group-hover:scale-150" />
              <CardHeader className="relative space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[rgb(204,214,246)]">0{index + 1}</span>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </div>
                  <div className="text-base text-[rgb(204,214,246)]">{project.description}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="border-[#edf0fc] text-[rgb(204,214,246)] text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex gap-4">
                  {project.github && (
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-[rgb(204,214,246)] hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </Link>
                  )}
                  {project.live && (
                    <Link 
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-[rgb(204,214,246)] hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
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
    title: "Amploy",
    description: "Helping employers amplify their hiring process with a job description improvement engine.",
    technologies: ["React", "Node.js","Python", "LangChain", ""],
    github: "https://github.com/garg-anubhav53/jd-recs-with-react"
  },
  {
    title: "RentScan",
    description: "A data aggregation and analysis tool to help landlords price their apartment units",
    technologies: ["Django", "Python", "BigQuery", "AWS"],
    github: "https://github.com/garg-anubhav53/listings_scrape"
  },
  {
    title: "Havenly",
    description: "A month to month apartment rental platform with search and user authentication",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/garg-anubhav53/abnbclone"
  },
  {
    title: "SES",
    description: "SES stands for simple email scheduler. It takes inputs on a one page form to help users schedule email campaigns quickly",
    technologies: ["Python", "Cron Jobs", "Hertzner", "Docker"],
    github: "https://github.com/garg-anubhav53/emailer-web-app"
  }, 
  {
    title: "Candidate Scan",
    description: "An API that takes a stackoverflow link and returns candidate information from multiple sources",
    technologies: ["Python", "Google App Script", "Supabase", "Selenium"],
    github: "https://github.com/garg-anubhav53/SOGHFunctionVercel"
  }
]
