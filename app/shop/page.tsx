'use client'

import { useState } from "react"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ProductGrid } from "@/components/products-grid"
import { FilterState } from "@/types/products"
import { SiteHeader } from "@/components/site-header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { products } from "@/data/products" // Import from data/products.ts

const ITEMS_PER_PAGE = 10

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filters, setFilters] = useState<FilterState>({
    type: [],
    color: [],
    size: [],
    fabric: [],
    price: [0, 1000],
    availability: []
  })

  // Apply filters and pagination
  const filteredProducts = products.filter((product) => {
    if (filters.type.length && !filters.type.includes(product.type)) return false
    if (filters.color.length && !filters.color.includes(product.color)) return false
    if (filters.size.length && !filters.size.includes(product.size)) return false
    if (product.price < filters.price[0] || product.price > filters.price[1]) return false
    if (filters.availability.length && !filters.availability.includes(product.availability)) return false
    return true
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <>
    <AnnouncementBar />
      <SiteHeader />
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold">All</h1>
      <div className="flex gap-8 mt-12">
        <FilterSidebar 
          filters={filters}
          onFilterChange={setFilters}
        />
        <ProductGrid
          products={currentProducts}
          currentPage={currentPage}
          totalPages={totalPages}
          viewMode={viewMode}
          onPageChange={setCurrentPage}
          onViewModeChange={setViewMode}
        />
      </div>
    </div>
    </>
  )
}

