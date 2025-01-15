'use client'

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, Mail, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GridPattern } from "./components/grid-pattern"

export function AboutSection() {
  return (
    <section id="about-section" className="relative flex min-h-screen items-center py-12 md:py-16">
      <GridPattern />
      <div className="container relative space-y-8">
        <motion.div 
          className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-lg bg-[#1a365d] px-3 py-1 text-white"
              >
                Available for hire
              </motion.div>
              <motion.h1 
                className="text-4xl font-bold tracking-tighter text-white sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Anubhav Garg
              </motion.h1>
              <motion.h2 
                className="text-xl text-white sm:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Software Engineer
              </motion.h2>
            </div>
            <motion.div 
              className="max-w-[600px] text-lg text-white space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p>Hello! I have a passion for delivering excellence to customers and deploy a diverse range of technical and business skills to do that.</p>

              <p>I'm a software engineer with experience building web apps and back end tools. I've also worked across sales, strategy, product, and operations with Fortune 100 companies and unicorn startups to help them build more creative products.</p>

              <p>Feel free to reach out if you'd like to talk!</p>
            </motion.div>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:border-white hover:bg-[#1a365d] text-white"
                onClick={() => window.open('https://github.com/garg-anubhav53', '_blank')}
              >
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:border-white hover:bg-[#1a365d] text-white"
                onClick={() => window.open('https://www.linkedin.com/in/anubhav-ga-rg/', '_blank')}
              >
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:border-white hover:bg-[#1a365d] text-white"
                onClick={() => window.open('mailto:garg.anubhav.xyz@gmail.com')}
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.2 }}
          >
            <div className="absolute -inset-4 rounded-full bg-[#1a365d]/50 blur-2xl" />
            <img
              alt="Profile"
              className="relative rounded-full border-4 border-white shadow-xl"
              height="280"
              src="/Anu.jpg?height=280&width=280"
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
