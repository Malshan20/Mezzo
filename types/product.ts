export interface Product {
  fabric(fabric: any): unknown
  id: string
  name: string
  color: string
  type: string
  price: number
  image: string
  size: string
  fabric: 'CASHMERE' | 'COTTON' | 'LINEN' | 'POLYESTER' | 'SILK' | 'VISCOSE/RAYON'
  availability: 'IN STOCK' | 'OUT OF STOCK'
  category: 'CASHMERE' | 'COTTON' | 'LINEN'
  colorsAvailable: number
  soldOut?: boolean
}
