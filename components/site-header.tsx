'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ShoppingBag, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const iconButtonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-light tracking-wider">
          MEZZO
        </Link>

        <MainNav />

        <div className="flex items-center gap-2">
          <motion.div variants={iconButtonVariants} whileHover="hover" whileTap="tap">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </motion.div>

          <motion.div variants={iconButtonVariants} whileHover="hover" whileTap="tap">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </motion.div>

          <motion.div variants={iconButtonVariants} whileHover="hover" whileTap="tap">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </motion.div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {["SHOP", "LOOKBOOKS", "CONTACT", "NEWS"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-lg font-light tracking-wider"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

