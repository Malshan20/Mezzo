'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, MotionProps, useScroll, useTransform } from 'framer-motion'

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;

export function LookbookHeader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const textY = useTransform(scrollY, [0, 500], [0, 150])
  const imageY = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <MotionDiv
      ref={containerRef}
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Parallax */}
      <MotionDiv
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <Image
          src="/portrait-beautiful-slim-tan-woman-with-perfect-bode-bright-boho-beach-dress-cool-accessories.jpg?height=1080&width=1920"
          alt="Shoreside Collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </MotionDiv>

      {/* Text Overlay */}
      <MotionDiv
        className="relative flex h-full flex-col items-center justify-center text-center text-white"
        style={{ y: textY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-lg font-light tracking-[0.2em]"
        >
          BY THE SEA
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl font-light tracking-[0.3em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          SHORESIDE
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-4xl font-light tracking-[0.3em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          COLLECTION
        </motion.h1>
      </MotionDiv>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white">
          <div className="h-16 w-px animate-scroll-indicator bg-white/60" />
          <p className="mt-2 text-sm font-light tracking-widest">SCROLL</p>
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

