'use client'

import { motion } from "framer-motion"

export function LookHeroSection() {
  return (
    <div className="container mx-auto px-4 pt-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-sm font-light tracking-[0.3em] text-zinc-600"
      >
        SPRING AT THE BAY
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl font-extralight tracking-[0.2em] text-zinc-800 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        THE BREEZE OF THE OCEAN
      </motion.h1>
    </div>
  )
}

