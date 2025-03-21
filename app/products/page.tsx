import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Filipino Makeup Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Browse our curated collection of makeup products from Filipino brands.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <ProductsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

