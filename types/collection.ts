export interface Product {
  id: string
  name: string
  price: number
  image: string
}

export interface Collection {
  id: string
  title: string
  description: string
  image: string
  cta: string
  products: Product[]
}

