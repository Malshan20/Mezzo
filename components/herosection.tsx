'use client'

import { motion, MotionProps } from "framer-motion"
import { Button } from "@/components/ui/button"

const MotionP = motion.p as React.FC<MotionProps & React.HTMLAttributes<HTMLParagraphElement>>;
const MotionHeading = motion.h1 as React.FC<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;

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
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm tracking-widest"
        >
          WAYFARER COLLECTION
        </MotionP>
        
        <MotionHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-5xl font-light tracking-wider md:text-6xl"
        >
          FOR THE WORLD
          <br />
          TRAVELERS
        </MotionHeading>
        
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

