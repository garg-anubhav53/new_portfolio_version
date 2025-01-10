'use client'

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, Mail, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GridPattern } from "./components/grid-pattern"

export function AboutSection() {
  return (
    <section id="about-section" className="relative flex min-h-screen items-center py-24 md:py-32">
      <GridPattern />
      <div className="container relative space-y-8">
        <motion.div 
          className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600"
              >
                Available for hire
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tighter text-blue-900 sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                John Doe
              </motion.h1>
              <motion.h2 
                className="text-xl text-blue-600 sm:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Software Engineer
              </motion.h2>
            </div>
            <motion.p 
              className="max-w-[600px] text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I'm a software engineer with 5+ years of experience building web applications. I specialize in React, Node.js, and
              cloud architecture. I'm passionate about creating elegant solutions to complex problems.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="outline" size="icon" className="hover:border-blue-200 hover:bg-blue-50">
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon" className="hover:border-blue-200 hover:bg-blue-50">
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="hover:border-blue-200 hover:bg-blue-50">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -inset-4 rounded-full bg-blue-100/50 blur-2xl" />
            <img
              alt="Profile"
              className="relative rounded-full border-4 border-white shadow-xl"
              height="280"
              src="/placeholder.svg?height=280&width=280"
              style={{
                aspectRatio: "280/280",
                objectFit: "cover",
              }}
              width="280"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

