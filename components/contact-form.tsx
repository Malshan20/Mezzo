'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-light text-center mb-12">Get in Touch</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="First Name" className="bg-gray-50" />
            <Input placeholder="Last Name" className="bg-gray-50" />
          </div>
          <Input type="email" placeholder="Email Address" className="bg-gray-50" />
          <Input placeholder="Subject" className="bg-gray-50" />
          <Textarea placeholder="Your Message" className="bg-gray-50 min-h-[150px]" />
          <Button className="w-full md:w-auto px-8">Send Message</Button>
        </form>
      </motion.div>
    </section>
  )
}

