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
      className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-center gap-8">
        {["about", "skills", "projects", "experience"].map((section) => (
          <a
            key={section}
            href={`#${section}-section`}
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
              activeSection === section ? "text-blue-600" : "text-slate-600"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

