'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "./components/section-header"
import { Code2, Globe, Server, Terminal } from 'lucide-react'

export function SkillsSection() {
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
    <section id="skills-section" className="space-y-8 py-24 md:py-32">
      <SectionHeader 
        title="Skills & Technologies"
        subtitle="A comprehensive overview of my technical expertise and tools I work with"
      />
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title} 
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="relative h-full overflow-hidden">
              <div className="absolute right-2 top-2 text-blue-100">
                {categoryIcons[index]}
              </div>
              <CardHeader>
                <CardTitle className="text-blue-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside space-y-2 text-slate-600">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

const categoryIcons = [
  <Code2 size={48} />,
  <Server size={48} />,
  <Globe size={48} />,
  <Terminal size={48} />,
]

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "CI/CD", "Linux", "Kubernetes"]
  },
  {
    title: "Tools & Methods",
    skills: ["Git", "Agile", "TDD", "REST APIs", "GraphQL"]
  }
]

