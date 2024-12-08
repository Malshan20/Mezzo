export interface Product {
  id: string
  name: string
  color: string
  price: number
  image: string
  category: 'cashmere' | 'cotton' | 'linen'
  colorsAvailable: number
  soldOut?: boolean
}

