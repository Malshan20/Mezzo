'use client'

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-light text-center mb-12">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-medium">Visit Us</h3>
            <p className="text-gray-600">
              123 Fashion Street
              <br />
              New York, NY 10001
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-medium">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-medium">Email Us</h3>
            <p className="text-gray-600">contact@example.com</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

