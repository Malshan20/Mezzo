'use client'

import { useRef, useEffect } from "react"
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion"

interface MarqueeProps {
  speed?: number
  pauseOnHover?: boolean
}

export function InfiniteMarquee({ speed = 1, pauseOnHover = true }: MarqueeProps) {
  const baseX = useMotionValue(0)
  const scrollVelocity = useSpring(0, {
    damping: 50,
    stiffness: 400
  })
  
  const logos = [
    { name: "SELF", width: 100 },
    { name: "ELLE", width: 120 },
    { name: "InStyle", width: 140 },
    { name: "allure", width: 120 },
    { name: "REFINERY29", width: 160 }
  ]
  
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useTransform(baseX, (value) => `${value}px`)

  const logoWidth = logos.reduce((acc, logo) => acc + logo.width + 80, 0) // 80px for padding
  const duplicateCount = Math.ceil(2000 / logoWidth) + 1 // Ensure enough logos to fill viewport

  useAnimationFrame((time) => {
    const baseXValue = baseX.get()
    if (baseXValue <= -logoWidth) {
      baseX.set(0)
    }
    baseX.set(baseXValue - speed)
  })

  return (
    <div className="relative flex h-24 w-full overflow-hidden bg-black">
      <motion.div
        ref={containerRef}
        className="flex items-center"
        style={{ x }}
        onHoverStart={() => pauseOnHover && scrollVelocity.set(0)}
        onHoverEnd={() => pauseOnHover && scrollVelocity.set(1)}
      >
        {Array.from({ length: duplicateCount }).map((_, i) => (
          <div key={i} className="flex items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={`${i}-${index}`}
                className="mx-10 flex items-center justify-center"
                style={{ width: logo.width }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-light tracking-wider text-white">
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

