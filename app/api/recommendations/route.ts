import { type NextRequest, NextResponse } from "next/server"
import { getMockProducts } from "@/lib/mock-data"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const skinTone = searchParams.get("skinTone")
    const category = searchParams.get("category")

    if (!skinTone) {
      return NextResponse.json({ error: "Skin tone parameter is required" }, { status: 400 })
    }

    // Get mock products for the specified skin tone
    const products = getMockProducts(skinTone)

    // If category is specified, filter by category
    if (category && products[category.toLowerCase()]) {
      return NextResponse.json({
        success: true,
        products: products[category.toLowerCase()],
      })
    }

    // Otherwise, return all products
    return NextResponse.json({
      success: true,
      products,
    })
  } catch (error) {
    console.error("Error getting recommendations:", error)
    return NextResponse.json({ error: "Failed to get recommendations" }, { status: 500 })
  }
}

