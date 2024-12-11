import { AnnouncementBar } from '@/components/announcement-bar'
import ContactForm from '@/components/contact-form'
import ContactHeroSection from '@/components/contact-hero-section'
import FaqSection from '@/components/faq-section'
import LocationSection from '@/components/location-section'
import { SiteHeader } from '@/components/site-header'
import React from 'react'

const contact = () => {
  return (
    <>
    <AnnouncementBar />
      <SiteHeader />
      <ContactHeroSection />
      <ContactForm />
      <LocationSection />
      <FaqSection />
    </>
  )
}

export default contact