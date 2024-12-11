'use client'

import * as React from "react"
import Link from "next/link"
import { motion, MotionProps } from "framer-motion"

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;


const navItems = [
  { name: "SHOP", href: "/shop" },
  { name: "LOOKBOOKS", href: "/lookbooks" },
  { name: "CONTACT", href: "/contact" },
  { name: "NEWS", href: "/news" },
]

export function MainNav() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  return (
    <nav className="hidden gap-8 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative py-2"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span className="relative z-10 text-sm font-light tracking-wider">
            {item.name}
          </span>
          {hoveredItem === item.name && (
            <MotionDiv
              layoutId="navUnderline"
              className="absolute bottom-0 left-0 right-0 h-px bg-black"
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 130,
                damping: 15,
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  )
}

