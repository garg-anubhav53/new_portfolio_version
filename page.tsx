'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { NavBar } from "./components/nav-bar"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ExperienceSection } from "./experience-section"

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#112240] text-[rgb(204,214,246)]">
      <div className="wave-background"></div>
      <NavBar />
      <main className="container px-4 relative text-[rgb(204,214,246)]">
        <AboutSection />
        <motion.div 
          className="flex justify-center py-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image 
            src="/undraw_in-the-zone_07y7.svg" 
            alt="In the Zone" 
            width={400} 
            height={300}
            className="max-w-full h-auto"
          />
        </motion.div>
        <ExperienceSection />
        <SkillsSection />
        <motion.div 
          className="flex justify-center py-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image 
            src="/undraw_cloud-hosting_tfeh.svg" 
            alt="Cloud Hosting" 
            width={400} 
            height={300}
            className="max-w-full h-auto"
          />
        </motion.div>
        <ProjectsSection />
        <motion.div 
          className="flex justify-center py-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image 
            src="/undraw_engineering-team_13ax.svg" 
            alt="Engineering Team" 
            width={400} 
            height={300}
            className="max-w-full h-auto"
          />
        </motion.div>
      </main>
    </div>
  )
}
