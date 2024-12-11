'use client'

import { LookHeroSection } from "./look-hero-section"
import { ProductCarousel } from "./product-carousels"

export function SpringBreezeFeature() {
  return (
    <section className="min-h-screen bg-white py-12">
      <LookHeroSection />
      <ProductCarousel />
    </section>
  )
}

