'use client'

import { motion, AnimatePresence, MotionProps } from "framer-motion"
import { Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Product } from "@/types/products" // Updated import

const MotionDiv = motion.div as React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>>;


// Rest of the component remains the same
interface ProductGridProps {
  products: Product[]
  currentPage: number
  totalPages: number
  viewMode: 'grid' | 'list'
  onPageChange: (page: number) => void
  onViewModeChange: (mode: 'grid' | 'list') => void
}

export function ProductGrid({
  products,
  currentPage,
  totalPages,
  viewMode,
  onPageChange,
  onViewModeChange,
}: ProductGridProps) {
  return (
    <div className="flex-1">
      {/* View Toggle */}
      <div className="mb-6 flex justify-end gap-2">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onViewModeChange('grid')}
        >
          <Grid className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === 'list' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onViewModeChange('list')}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>

      {/* Products */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
            : 'space-y-6'
        }
      >
        <AnimatePresence mode="wait">
          {products.map((product) => (
            <MotionDiv
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={viewMode === 'list' ? 'flex gap-6' : ''}
            >
              <div className={viewMode === 'list' ? 'w-48' : ''}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">
                  {product.colorsAvailable} COLORS AVAILABLE
                </p>
              </div>
            </MotionDiv>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => onPageChange(currentPage - 1)}
                isActive={currentPage > 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => onPageChange(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => onPageChange(currentPage + 1)}
                isActive={currentPage < totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

