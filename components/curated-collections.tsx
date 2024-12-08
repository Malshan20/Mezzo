'use client'

import { motion } from "framer-motion"
import { collections } from "@/data/collections"
import { CollectionCard } from "@/components/collection-card"
import { ProductTile } from "@/components/product-tile"

export function CuratedCollections() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-2 text-2xl font-light tracking-wider text-center">
          CURATED COLLECTIONS
        </h1>
        <p className="text-sm text-gray-600">
          handcrafted by our expert designers
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, index) => (
          <>
            {index === 0 && (
              <>
                {collection.products.slice(0, 2).map((product) => (
                  <ProductTile key={product.id} product={product} />
                ))}
                <div className="col-span-1 row-span-2 md:col-span-1">
                  <CollectionCard collection={collection} />
                </div>
                {collection.products.slice(2, 4).map((product) => (
                  <ProductTile key={product.id} product={product} />
                ))}
              </>
            )}
            {index === 1 && (
              <>
                <div className="col-span-1 row-span-2 md:col-span-1">
                  <CollectionCard collection={collection} />
                </div>
                {collection.products.map((product) => (
                  <ProductTile key={product.id} product={product} />
                ))}
              </>
            )}
          </>
        ))}
      </div>
    </section>
  )
}

