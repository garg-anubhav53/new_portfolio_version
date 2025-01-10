'use client'

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div 
      className="relative space-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-8 top-3 h-1 w-6 rounded bg-blue-600" />
      <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600">{subtitle}</p>
      )}
    </motion.div>
  )
}

