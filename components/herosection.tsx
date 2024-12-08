'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSections() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/expressive-young-woman-posing.jpg?height=1080&width=720')",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative flex h-full flex-col items-start justify-center p-12 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm tracking-widest"
        >
          WAYFARER COLLECTION
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-5xl font-light tracking-wider md:text-6xl"
        >
          FOR THE WORLD
          <br />
          TRAVELERS
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-white text-black hover:bg-white hover:text-black"
          >
            VIEW THE LOOKBOOK
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

