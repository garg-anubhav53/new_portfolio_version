'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "./components/section-header"
import { Code2, ClipboardCheck, Server, Terminal } from 'lucide-react'

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
    <section id="skills-section" className="py-12 md:py-16">
      <SectionHeader 
        title="Skills & Technologies"
        subtitle="A sample overview of some of my the technical skills and tools I work with"
      />
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title} 
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="relative h-full overflow-hidden bg-[#1a365d]">
              <div className="absolute right-2 top-2 text-[rgb(204,214,246)]">
                {categoryIcons[index]}
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-xl text-white">
                    {category.title}
                  </CardTitle>
                  <div className="text-base text-[rgb(204,214,246)]">
                    {category.skills.join(" • ")}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-[rgb(204,214,246)]">
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
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

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs"]
  },
  {
    title: "Project Delivery",
    skills: ["Scrum Master", "Customer Journey Mapping", "UI/UX", "Technical Writing", "User Acceptance Testing"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Testing"]
  }
]

const categoryIcons = [
  <Code2 size={48} />,
  <Server size={48} />,
  <ClipboardCheck size={48} />,
  <Terminal size={48} />
]
