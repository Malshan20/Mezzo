'use client'

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-light text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are your business hours?</AccordionTrigger>
            <AccordionContent>
              We are open Monday through Friday from 9:00 AM to 6:00 PM EST. On weekends, we are open from 10:00 AM to 4:00 PM EST.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your response time?</AccordionTrigger>
            <AccordionContent>
              We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer international shipping to most countries. Shipping rates and delivery times vary by location. Please contact us for specific details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  )
}

