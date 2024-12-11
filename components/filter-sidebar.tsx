'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { filterOptions } from "@/data/filters"
import { FilterState } from "@/types/products" // Updated import

interface FilterSidebarProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const handleCheckboxChange = (
    category: keyof FilterState,
    value: string,
    checked: boolean
  ) => {
    const newFilters = { ...filters }
    if (Array.isArray(newFilters[category])) {
      if (checked) {
        (newFilters[category] as string[]).push(value)
      } else {
        newFilters[category] = (newFilters[category] as string[]).filter(
          (item) => item !== value
        )
      }
      onFilterChange(newFilters)
    }
  }

  const handlePriceChange = (value: number[]) => {
    onFilterChange({
      ...filters,
      price: [value[0], value[1]]
    })
  }

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 space-y-6 pr-6"
    >
      {/* Product Type */}
      <div>
        <h3 className="mb-4 text-sm font-medium">PRODUCT TYPE</h3>
        <div className="space-y-2">
          {filterOptions.type.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.type.includes(type)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('type', type, checked as boolean)
                }
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="mb-4 text-sm font-medium">COLOR</h3>
        <div className="grid grid-cols-3 gap-2">
          {filterOptions.color.map((color) => (
            <button
              key={color.name}
              className={`h-6 w-6 rounded-full border ${
                filters.color.includes(color.name)
                  ? 'ring-2 ring-black ring-offset-2'
                  : ''
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() =>
                handleCheckboxChange(
                  'color',
                  color.name,
                  !filters.color.includes(color.name)
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="mb-4 text-sm font-medium">SIZE</h3>
        <div className="grid grid-cols-4 gap-2">
          {filterOptions.size.map((size) => (
            <label key={size} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.size.includes(size)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('size', size, checked as boolean)
                }
              />
              <span className="text-sm">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4 text-sm font-medium">PRICE</h3>
        <Slider
          defaultValue={[filters.price[0], filters.price[1]]}
          max={1000}
          step={10}
          onValueChange={handlePriceChange}
        />
        <div className="mt-2 flex justify-between text-sm">
          <span>${filters.price[0]}</span>
          <span>${filters.price[1]}</span>
        </div>
      </div>

      {/* Fabric */}
      <div>
        <h3 className="mb-4 text-sm font-medium">FABRIC</h3>
        <div className="space-y-2">
          {filterOptions.fabric.map((fabric) => (
            <label key={fabric} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.fabric.includes(fabric)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('fabric', fabric, checked as boolean)
                }
              />
              <span className="text-sm">{fabric}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="mb-4 text-sm font-medium">AVAILABILITY</h3>
        <div className="space-y-2">
          {filterOptions.availability.map((status) => (
            <label key={status} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.availability.includes(status)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange('availability', status, checked as boolean)
                }
              />
              <span className="text-sm">{status}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

