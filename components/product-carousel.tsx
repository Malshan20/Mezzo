'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from "@/types/product"
import { Button } from "@/components/ui/button"

interface ProductCarouselProps {
  products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((current) => 
      current === 0 ? products.length - 1 : current - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((current) => 
      current === products.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div className="relative w-full">
      <div className="relative aspect-[3/4] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-light">
          {products[currentIndex].name}
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          ${products[currentIndex].price.toFixed(2)}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          {products[currentIndex].colorsAvailable} COLORS AVAILABLE
        </p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-12 top-1/2 -translate-y-1/2"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-12 top-1/2 -translate-y-1/2"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

