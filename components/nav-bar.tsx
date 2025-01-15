'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function NavBar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.replace("-section", ""))
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav 
      className="fixed top-0 z-50 w-full bg-[#112240]/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-center gap-8">
        {["about", "experience", "skills", "projects"].map((section) => (
          <a
            key={section}
            href={`#${section}-section`}
            className={`text-sm font-medium transition-colors hover:text-[rgb(204,214,246)] ${
              activeSection === section ? "text-[rgb(204,214,246)]" : "text-[rgb(204,214,246)]/70"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
