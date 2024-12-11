'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function NewsSection() {
  return (
    <div className="min-h-screen bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl font-light tracking-wider mb-16"
        >
          NEWS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative group"
        >
          <Link href="/news/sustainability">
            <div className="relative h-[70vh] w-full overflow-hidden">
              <Image
                src="/beautiful-girl-city.jpg?height=1080&width=1920"
                alt="Hands working with sustainable materials"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/95 p-8 md:p-12 max-w-2xl mx-4 text-center space-y-4 hover:bg-white transition-colors duration-300">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                    HOW SUSTAINABILITY CAN SHAPE DESIGN
                  </h2>
                  <p className="text-gray-600 md:text-lg">
                    We believe that the clothes you wear are a reflection of who you are. We also believe that they can be a way to express your values and contribute to...
                  </p>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="inline-block"
                  >
                    <span className="inline-block text-sm tracking-wider font-medium mt-4 border-b border-black pb-1 hover:border-gray-400 transition-colors duration-300">
                      READ MORE
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

