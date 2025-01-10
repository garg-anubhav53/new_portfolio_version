'use client'

import { motion } from "framer-motion"
import { NavBar } from "./components/nav-bar"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ExperienceSection } from "./experience-section"

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <NavBar />
      <main className="container px-4">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  )
}

