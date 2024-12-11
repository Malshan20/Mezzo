'use client'

import Image from 'next/image'
import { motion, MotionProps } from "framer-motion"
import { Button } from "@/components/ui/button"

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;

export function ProductCarousel() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative aspect-[4/5] overflow-hidden bg-[#f8f8f8]"
        >
          <Image
            src="/young-tan-model-stylish-summer-outfit-enjoying-pool-party-boho-accessories-trendy-sunglasses.jpg?height=1000&width=1800&text=Lifestyle+Shot"
            alt="The Sasha Striped Vee lifestyle"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            priority
          />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-start justify-between"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f8f8f8]">
            <Image
              src="/Tie-WaistOpenworkCrochetCoverUp.jpeg?height=1000&width=800&text=Product+Shot"
              alt="The Sasha Striped Vee product"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 space-y-3"
          >
            <h2 className="text-lg font-light tracking-wider text-zinc-900">
              The Sasha Striped Vee
            </h2>
            <p className="text-sm tracking-wider text-zinc-600">
              Natural Combo | $428.00
            </p>
            <Button
              variant="outline"
              className="mt-4 tracking-[0.2em] text-sm font-light"
            >
              SHOP NOW
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  )
}

