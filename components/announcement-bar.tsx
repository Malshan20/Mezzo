'use client'

import { motion, MotionProps } from "framer-motion"
import Link from "next/link"

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;

export function AnnouncementBar() {
  return (
    <MotionDiv
      initial={{ y: -30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-black px-4 py-2 text-center text-sm text-white"
    >
      <p>
        Fall collection is out now |{" "}
        <Link 
          href="#" 
          className="inline-block underline transition-colors hover:text-zinc-200"
        >
          Shop our fall collection
        </Link>
      </p>
    </MotionDiv>
  )
}

