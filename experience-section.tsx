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
    <section id="experience-section" className="py-12 md:py-16">
      <SectionHeader 
        title="Work Experience"
        subtitle="My professional journey and key achievements"
      />
      <motion.div 
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        {experience.map((role, index) => (
          <motion.div 
            key={role.title} 
            variants={item}
            className="flex justify-center"
          >
            <Card className="transition-colors hover:border-[#edf0fc] bg-[#1a365d] w-[90%] max-w-3xl">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-2xl font-bold">{role.title}</CardTitle>
                    <span className="text-[rgb(204,214,246)] text-xl">{role.duration}</span>
                  </div>
                  <div className="text-[rgb(204,214,246)] text-xl">
                    {role.company}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-3 text-[rgb(204,214,246)] text-lg">
                  {role.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
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
    title: "CTO & Founder",
    company: "Primes Crest",
    duration: "07/2023 - Present",
    achievements: [
      "Built AI recommendation engine in Python providing real estate investment advice in 30 seconds",
      "Deployed Next.js web app for commercial firms to analyze apartment pricing trends",
      "Implemented data science tools to analyze 10,000+ geographic ranges for price outliers"
    ]
  },
  {
    title: "Lead, Accelerators & Incubators",
    company: "Polygon Labs",
    duration: "06/2022 - 07/2023",
    achievements: [
      "Managed $2M budget to accelerate growth for web3 startups like Liquifi and Zoth",
      "Enhanced portfolio projects' technical quality through architectural improvements",
      "Optimized accelerator operations achieving 30% cost savings while maintaining quality"
    ]
  },
  {
    title: "Product & Agile Consultant",
    company: "McKinsey & Company",
    duration: "10/2020 - 06/2022",
    achievements: [
      "Led product transformation for ecommerce startup, prioritizing features for $1B revenue target",
      "Implemented Agile methodology for 100+ person org, improving team performance 2x",
      "Built MVP for infrastructure management SaaS, reducing costs 40% and bugs 50%"
    ]
  },
  {
    title: "CTO & Co-Founder",
    company: "Key Learning",
    duration: "08/2019 - 08/2020",
    achievements: [
      "Led engineering and product for edtech platform serving refugees, raising $10K in funding",
      "Built platform for curating educational YouTube content with translation support"
    ]
  },
  {
    title: "Software Engineer",
    company: "Spokeo",
    duration: "05/2018 - 08/2018",
    achievements: [
      "Built SEO-driven people search app using MEAN stack, driving $1M in new revenue",
      "Developed Python scripts to clean 6M+ records, improving data accuracy by 10%"
    ]
  }
]
