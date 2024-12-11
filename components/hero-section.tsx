import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/trendy-couple-gloomy-city.jpg?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative flex h-full flex-col items-center justify-center text-center text-white">
        <p className="mb-4 text-lg tracking-widest font-serif">
          A CONSCIOUS WARDROBE
        </p>
        <h1 className="mb-2 text-5xl font-light tracking-widest md:text-6xl lg:text-7xl">
          TIMELESS STYLE
        </h1>
        <h2 className="mb-12 text-5xl font-light tracking-widest md:text-6xl lg:text-7xl">
          SUSTAINABLE DESIGN
        </h2>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-black hover:bg-white hover:bg-opacity-50"
          >
            VIEW PRODUCTS
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-black hover:bg-white hover:bg-opacity-50"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  )
}

