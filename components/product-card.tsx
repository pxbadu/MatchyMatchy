import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square">
        <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        {product.isNew && <Badge className="absolute top-2 right-2">New</Badge>}
      </div>
      <CardContent className="pt-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
        <p className="text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <span className="font-bold">₱{product.price.toFixed(2)}</span>
        <Button size="sm">View Details</Button>
      </CardFooter>
    </Card>
  )
}

