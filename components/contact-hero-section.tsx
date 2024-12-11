'use client'

import { motion } from "framer-motion"

export default function ContactHeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
          }}
        >
          <img
                src="/contact.jpg?height=1080&width=1920"
                alt="Contact us"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
          
        </div>
      </motion.div>
      <div className="relative h-full flex items-center justify-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-[0.2em]"
        >
          CONTACT US
        </motion.h1>
      </div>
    </section>
  )
}

