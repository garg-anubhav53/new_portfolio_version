'use client'

import { motion } from "framer-motion"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-[10%] left-[20%] h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          easings: ["easeInOut"],
        }}
      />
      <motion.div
        className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          easings: ["easeInOut"],
        }}
      />
    </div>
  )
}

