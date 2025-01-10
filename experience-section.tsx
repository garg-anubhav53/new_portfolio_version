'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "./components/section-header"

export function ExperienceSection() {
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
    <section id="experience-section" className="space-y-8 py-24 md:py-32">
      <SectionHeader 
        title="Work Experience"
        subtitle="My professional journey and key achievements"
      />
      <motion.div 
        className="relative space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute left-8 top-4 h-full w-px bg-blue-100 md:left-1/2" />
        {experience.map((role, index) => (
          <motion.div 
            key={role.title} 
            variants={item}
            className="relative md:flex md:justify-center"
          >
            <div className="absolute left-8 top-4 h-3 w-3 rounded-full border-2 border-blue-600 bg-white md:left-1/2 md:-translate-x-[5px]" />
            <Card className="ml-16 transition-colors hover:border-blue-200 md:ml-0 md:w-[calc(50%-2rem)] md:even:ml-[calc(50%+2rem)]">
              <CardHeader>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-blue-800">{role.title}</CardTitle>
                    <span className="text-sm text-slate-500">{role.duration}</span>
                  </div>
                  <div className="text-sm text-blue-600">
                    {role.company}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-inside space-y-2 text-slate-600">
                  {role.achievements.map((achievement, achievementIndex) => (
                    <motion.li 
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{achievement}</span>
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

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    duration: "2021 - Present",
    achievements: [
      "Led a team of 5 engineers in developing a new microservices architecture",
      "Reduced API response times by 40% through implementation of caching strategies",
      "Mentored junior developers and conducted technical interviews",
    ],
  },
  {
    title: "Software Engineer",
    company: "StartUp Inc",
    duration: "2019 - 2021",
    achievements: [
      "Developed and maintained multiple full-stack applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with product team to improve user experience and implement new features",
    ],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    duration: "2017 - 2019",
    achievements: [
      "Built responsive websites for various clients using modern web technologies",
      "Optimized website performance and SEO rankings",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
  },
]

