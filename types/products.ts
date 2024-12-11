export interface Product {
  id: string
  name: string
  price: number
  image: string
  colorsAvailable: number
  type: string
  color: string
  size: string
  fabric: string
}

export interface FilterState {
  type: string[]
  color: string[]
  size: string[]
  fabric: string[]
  price: [number, number]
  availability: string[]
  
}

