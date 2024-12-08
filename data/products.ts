import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'The Cashmere Neck Square',
    color: 'Camel',
    price: 99.00,
    image: '/Lori-Off-Shoulder_TCR3016_AStral-Melange_7.jpg?height=600&width=500',
    category: 'cashmere',
    colorsAvailable: 2
  },
  {
    id: '2',
    name: 'The Lori Off Shoulder',
    color: 'Astral Melange',
    price: 548.00,
    image: '/970695503d734131b1d7bdf68d170ef7.jpg?height=600&width=500',
    category: 'cotton',
    colorsAvailable: 10
  },
  {
    id: '3',
    name: 'The Anaise Vee',
    color: 'Oyster Grey Melange',
    price: 378.00,
    image: '/d5cac55e6354970fdc8146e50e2b9bb9.jpg?height=600&width=500',
    category: 'linen',
    colorsAvailable: 2
  },
  {
    id: '4',
    name: 'The Looker Layered Crop Crewneck',
    color: 'Vail Grey Melange with White Underlayer',
    price: 328.00,
    image: '/medium-shot-beautiful-model.jpg?height=600&width=500',
    category: 'cashmere',
    colorsAvailable: 7,
    soldOut: true
  }
]

