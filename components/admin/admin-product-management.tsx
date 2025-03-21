"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductTable } from "@/components/admin/product-table"
import { AddProductForm } from "@/components/admin/add-product-form"
import type { Product } from "@/types/product"
import { getMockProducts } from "@/lib/mock-data"

export function AdminProductManagement() {
  const [products, setProducts] = useState<Product[]>(() => {
    // Initialize with mock products for all skin tones
    const allProducts: Product[] = []
    const skinTones = ["Fair", "Light", "Medium", "Tan", "Deep", "Dark"]

    skinTones.forEach((tone) => {
      const toneProducts = getMockProducts(tone)
      Object.values(toneProducts).forEach((categoryProducts) => {
        allProducts.push(...categoryProducts)
      })
    })

    return allProducts
  })

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, { ...product, id: Math.random().toString(36).substring(2, 10) }])
  }

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Management</CardTitle>
        <CardDescription>Add, edit, or remove makeup products from the database.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">View Products</TabsTrigger>
            <TabsTrigger value="add">Add New Product</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <ProductTable products={products} onDelete={deleteProduct} />
          </TabsContent>
          <TabsContent value="add" className="mt-6">
            <AddProductForm onAddProduct={addProduct} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

