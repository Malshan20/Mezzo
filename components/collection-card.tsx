'use client'

import { motion, MotionProps } from "framer-motion"
import { Collection } from "@/types/collection"
import { Button } from "@/components/ui/button"

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;

interface CollectionCardProps {
  collection: Collection
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-[3/4] overflow-hidden"
    >
      <MotionDiv
        style={{ backgroundImage: `url(${collection.image})` }}
        className="h-full w-full bg-cover bg-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <MotionDiv
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-2 text-3xl font-light tracking-wider">
            {collection.title}
          </h2>
          <p className="mb-6 text-sm tracking-wider">
            {collection.description}
          </p>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-black"
          >
            {collection.cta}
          </Button>
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}
