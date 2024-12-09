'use client'

import { useState } from 'react'
import { motion, AnimatePresence, MotionProps } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Product } from '@/types/product'
import { products } from '@/data/products'

const categories = ['CASHMERE', 'COTTON', 'LINEN']
const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('CASHMERE')

  const filteredProducts = products.filter(
    product => product.category.toUpperCase() === selectedCategory
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Tabs */}
      <div className="mb-12 flex justify-center gap-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative px-2 py-1 text-sm tracking-wider transition-colors
              ${selectedCategory === category ? 'text-black' : 'text-gray-400'}`}
          >
            {category}
            {selectedCategory === category && (
              <MotionDiv
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"
              />
            )}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <MotionDiv
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.soldOut && (
                    <div className="absolute right-2 top-2 rounded bg-white px-2 py-1 text-xs font-medium">
                      SOLD OUT
                    </div>
                  )}
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    {product.color} | ${product.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.colorsAvailable} COLORS AVAILABLE
                  </p>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

