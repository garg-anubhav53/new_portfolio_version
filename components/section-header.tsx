'use client'

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div 
      className="relative space-y-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
    >
      <div className="absolute -left-8 top-3 h-1 w-6 rounded bg-[#edf0fc]" />
      <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-[rgb(204,214,246)]">{subtitle}</p>
      )}
    </motion.div>
  )
}
