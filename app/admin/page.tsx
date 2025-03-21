import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AdminProductManagement } from "@/components/admin/admin-product-management"

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <AdminProductManagement />
      </main>
      <Footer />
    </div>
  )
}

