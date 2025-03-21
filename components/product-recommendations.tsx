"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Loader2 } from "lucide-react"
import { getMockProducts } from "@/lib/mock-data"
import type { Product } from "@/types/product"

interface ProductRecommendationsProps {
  skinTone: string
}

export function ProductRecommendations({ skinTone }: ProductRecommendationsProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Record<string, Product[]>>({
    foundation: [],
    concealer: [],
    blush: [],
    lipstick: [],
  })

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Get mock products based on skin tone
      const mockProducts = getMockProducts(skinTone)
      setProducts(mockProducts)
      setIsLoading(false)
    }

    fetchProducts()
  }, [skinTone])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Personalized Recommendations</CardTitle>
        <CardDescription>Filipino makeup products that match your {skinTone.toLowerCase()} skin tone</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Finding your perfect matches...</span>
          </div>
        ) : (
          <Tabs defaultValue="foundation">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="foundation">Foundation</TabsTrigger>
              <TabsTrigger value="concealer">Concealer</TabsTrigger>
              <TabsTrigger value="blush">Blush</TabsTrigger>
              <TabsTrigger value="lipstick">Lipstick</TabsTrigger>
            </TabsList>

            {Object.entries(products).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </CardContent>
    </Card>
  )
}

