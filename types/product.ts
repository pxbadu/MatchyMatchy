export interface Product {
  id: string
  name: string
  brand: string
  description: string
  price: number
  rating: number
  imageUrl: string
  category: string
  skinTones: string[]
  isNew?: boolean
}

