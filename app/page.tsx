import { AnnouncementBar } from '@/components/announcement-bar'
import About from '@/components/banner'
import { CuratedCollections } from '@/components/curated-collections'
import { HeroSection } from '@/components/hero-section'
import { HeroSections } from '@/components/herosection'
import { InfiniteMarquee } from '@/components/infinite-marquee'
import { ProductCarousel } from '@/components/product-carousel'
import { ProductGrid } from '@/components/product-grid'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { products } from '@/data/products'

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
        <main className="w-full overflow-x-hidden">
          <HeroSection />
          <section className="py-20 text-center">
            <h3 className="text-2xl font-light tracking-widest">
              SHOP OUR SIGNATURE FABRICS
            </h3>
          </section>
          <ProductGrid />
          <CuratedCollections />
            <About />
          <HeroSections />
          <div className="flex flex-col items-center justify-center p-12">
            <div className="mb-12 text-center">
              <h2 className="text-sm font-light tracking-widest">
                SHOP WAYFARER
              </h2>
              <div className="mt-2 h-px w-12 bg-gray-200 mx-auto" />
            </div>
            <div className="w-full max-w-md">
              <ProductCarousel products={products} />
            </div>
          </div>
          <InfiniteMarquee />
        </main>
        <SiteFooter />      
    </>
  )
}

