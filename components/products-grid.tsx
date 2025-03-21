"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Search } from "lucide-react"
import type { Product } from "@/types/product"
import { getMockProducts } from "@/lib/mock-data"

export function ProductsGrid() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [skinToneFilter, setSkinToneFilter] = useState("all")

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Get mock products for all skin tones
      const allProducts: Product[] = []
      const skinTones = ["Fair", "Light", "Medium", "Tan", "Deep", "Dark"]

      skinTones.forEach((tone) => {
        const toneProducts = getMockProducts(tone)
        Object.values(toneProducts).forEach((categoryProducts) => {
          allProducts.push(...categoryProducts)
        })
      })

      setProducts(allProducts)
      setFilteredProducts(allProducts)
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    // Filter products based on search term and filters
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
      const matchesSkinTone = skinToneFilter === "all" || product.skinTones.includes(skinToneFilter)

      return matchesSearch && matchesCategory && matchesSkinTone
    })

    setFilteredProducts(filtered)
  }, [products, searchTerm, categoryFilter, skinToneFilter])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value)
  }

  const handleSkinToneChange = (value: string) => {
    setSkinToneFilter(value)
  }

  const handleClearFilters = () => {
    setSearchTerm("")
    setCategoryFilter("all")
    setSkinToneFilter("all")
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-8" value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={categoryFilter} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="foundation">Foundation</SelectItem>
              <SelectItem value="concealer">Concealer</SelectItem>
              <SelectItem value="blush">Blush</SelectItem>
              <SelectItem value="lipstick">Lipstick</SelectItem>
            </SelectContent>
          </Select>
          <Select value={skinToneFilter} onValueChange={handleSkinToneChange}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Skin Tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Skin Tones</SelectItem>
              <SelectItem value="Fair">Fair</SelectItem>
              <SelectItem value="Light">Light</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Tan">Tan</SelectItem>
              <SelectItem value="Deep">Deep</SelectItem>
              <SelectItem value="Dark">Dark</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Loading products...</span>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  )
}

