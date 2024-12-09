'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, MotionProps } from "framer-motion"
import { Facebook, Instagram, Twitter, ArrowRight, Music2 } from 'lucide-react'
import { Input } from "@/components/ui/input"

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
const MotionH3 = motion.h3 as React.FC<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;
const MotionA = motion.a as React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & import('framer-motion').MotionProps
>;

const collections = [
  { name: "Fringe", href: "#" },
  { name: "Shoreside", href: "#" },
  { name: "Wayfarer", href: "#" },
]

const helpfulLinks = [
  { name: "About Us", href: "#" },
  { name: "Our Locations", href: "#" },
  { name: "Mezzo News", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Theme Features", href: "#" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "TikTok", icon: Music2, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function SiteFooter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-zinc-800 text-white">
      <div className="container grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-light tracking-wider">
              MEZZO
            </Link>
          </motion.div>
        </div>

        {/* Collections */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-6 text-sm font-medium tracking-wider">COLLECTIONS</h3>
            <ul className="space-y-4">
              {collections.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={item.href} className="text-zinc-300 hover:text-white">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Helpful Links */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-medium tracking-wider">HELPFUL LINKS</h3>
            <ul className="space-y-4">
              {helpfulLinks.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={item.href} className="text-zinc-300 hover:text-white">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-2 text-sm font-medium tracking-wider">OUR WEEKLY NEWSLETTER</h3>
              <h2 className="text-2xl font-light tracking-wider">SKIP TO THE DETAILS</h2>
            </div>
            <p className="text-sm text-zinc-300">
              Join to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="email"
                placeholder="your-email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent pr-10 text-white placeholder-zinc-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <ArrowRight className="h-5 w-5 text-zinc-400 transition-colors hover:text-white" />
              </button>
            </form>
          </MotionDiv>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-700">
        <div className="container flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
          <MotionH3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-light tracking-wider"
          >
            STAY IN TOUCH.
          </MotionH3>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((item) => (
              <MotionA
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-zinc-400 hover:text-white"
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </MotionA>
            ))}
          </MotionDiv>
        </div>
      </div>
    </footer>
  )
}

