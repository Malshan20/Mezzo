'use client'

import { motion, MotionProps } from "framer-motion"
import { Product } from "@/types/collection"

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
const MotionImg = motion.img as React.FC<
    React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
  >;

interface ProductTileProps {
  product: Product
}

export function ProductTile({ product }: ProductTileProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden">
        <MotionImg
          src={product.image}
          alt={product.name}
          className="h-[500px] w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium group-hover:underline">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </MotionDiv>
  )
}

