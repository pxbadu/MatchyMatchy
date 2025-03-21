import type { Product } from "@/types/product"

// Helper function to generate a random ID
const generateId = () => Math.random().toString(36).substring(2, 10)

// Helper function to generate a random price between min and max
const generatePrice = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Helper function to generate a random rating between 3.5 and 5.0
const generateRating = () => {
  return Number((Math.random() * 1.5 + 3.5).toFixed(1))
}

// Filipino makeup brands
const filipinoBrands = [
  "Sunnies Face",
  "BLK Cosmetics",
  "Happy Skin",
  "Issy & Co.",
  "Careline",
  "Ever Bilena",
  "Vice Cosmetics",
  "Pink Sugar",
  "FS Cosmetics",
  "Detail Makeover",
]

// Foundation descriptions
const foundationDescriptions = [
  "Lightweight foundation with buildable coverage for a natural finish.",
  "Long-wearing foundation that provides medium to full coverage.",
  "Hydrating foundation with a dewy finish for dry skin types.",
  "Matte foundation that controls oil and minimizes pores.",
  "Serum foundation with skincare benefits for a radiant glow.",
]

// Concealer descriptions
const concealerDescriptions = [
  "Creamy concealer that brightens the under-eye area and covers dark circles.",
  "Full-coverage concealer that effectively hides blemishes and imperfections.",
  "Lightweight concealer with a natural finish for everyday wear.",
  "Long-lasting concealer that doesn't crease or settle into fine lines.",
  "Hydrating concealer with skincare ingredients for dry under-eyes.",
]

// Blush descriptions
const blushDescriptions = [
  "Silky powder blush that adds a natural flush to the cheeks.",
  "Cream blush that melts into the skin for a dewy finish.",
  "Buildable blush that lasts all day without fading.",
  "Multi-use blush that can be applied to cheeks, eyes, and lips.",
  "Shimmering blush that adds a subtle glow to the complexion.",
]

// Lipstick descriptions
const lipstickDescriptions = [
  "Creamy lipstick with high pigmentation and comfortable wear.",
  "Matte lipstick that stays put without drying out the lips.",
  "Hydrating lipstick with a glossy finish for plump-looking lips.",
  "Long-wearing lipstick that doesn't transfer or feather.",
  "Satin lipstick with a smooth application and medium coverage.",
]

// Generate mock product images based on category and shade
const getProductImage = (category: string, shade?: string) => {
  // Base path for placeholder images
  const basePath = "/placeholder.svg";
  
  // Define colors for different product categories
  const categoryColors: Record<string, string> = {
    foundation: "#F5D0A9",
    concealer: "#F2F5A9",
    blush: "#F5A9A9",
    lipstick: "#F5A9BC"
  };
  
  // Get the color for this category or use a default
  const color = categoryColors[category.toLowerCase()] || "#E0E0E0";
  
  // Create a descriptive text for the image
  const text = shade 
    ? `${category} - ${shade}` 
    : category;
  
  // Generate the image URL with parameters
  const width = 400;
  const height = 400;
  return `${basePath}?height=${height}&width=${width}&text=${encodeURIComponent(text)}&bgcolor=${encodeURIComponent(color)}`;
}

// Map skin tones to suitable product shades
const skinToneProductMap: Record<string, Record<string, string[]>> = {
  // Application categories
  Fair: {
    foundation: ["Porcelain", "Ivory", "Light Beige"],
    concealer: ["Fair", "Light", "Ivory"],
    blush: ["Baby Pink", "Light Coral", "Soft Peach"],
    lipstick: ["Nude Pink", "Light Mauve", "Soft Coral"],
  },
  Light: {
    foundation: ["Light Beige", "Warm Ivory", "Natural"],
    concealer: ["Light", "Light Medium", "Warm Beige"],
    blush: ["Peach", "Coral", "Light Rose"],
    lipstick: ["Rosy Nude", "Peachy Pink", "Soft Berry"],
  },
  Medium: {
    foundation: ["Medium Beige", "Natural Tan", "Golden"],
    concealer: ["Medium", "Golden Medium", "Honey"],
    blush: ["Warm Peach", "Terracotta", "Rose"],
    lipstick: ["Terracotta", "Brick Red", "Warm Rose"],
  },
  Tan: {
    foundation: ["Tan", "Golden Tan", "Warm Tan"],
    concealer: ["Tan", "Golden", "Caramel"],
    blush: ["Terracotta", "Brick", "Deep Coral"],
    lipstick: ["Brick Red", "Warm Brown", "Deep Rose"],
  },
  Deep: {
    foundation: ["Deep Tan", "Amber", "Chestnut"],
    concealer: ["Deep", "Amber", "Mahogany"],
    blush: ["Deep Berry", "Brick Red", "Plum"],
    lipstick: ["Deep Berry", "Burgundy", "Chocolate"],
  },
  Dark: {
    foundation: ["Deep", "Espresso", "Ebony"],
    concealer: ["Deep", "Espresso", "Rich"],
    blush: ["Deep Plum", "Burgundy", "Deep Berry"],
    lipstick: ["Deep Plum", "Deep Berry", "Rich Brown"],
  },
  
  // Model categories (for direct mapping)
  "light": {
    foundation: ["Porcelain", "Ivory", "Light Beige"],
    concealer: ["Fair", "Light", "Ivory"],
    blush: ["Baby Pink", "Light Coral", "Soft Peach"],
    lipstick: ["Nude Pink", "Light Mauve", "Soft Coral"],
  },
  "mid-light": {
    foundation: ["Light Beige", "Warm Ivory", "Natural"],
    concealer: ["Light", "Light Medium", "Warm Beige"],
    blush: ["Peach", "Coral", "Light Rose"],
    lipstick: ["Rosy Nude", "Peachy Pink", "Soft Berry"],
  },
  "mid-dark": {
    foundation: ["Tan", "Golden Tan", "Warm Tan"],
    concealer: ["Tan", "Golden", "Caramel"],
    blush: ["Terracotta", "Brick", "Deep Coral"],
    lipstick: ["Brick Red", "Warm Brown", "Deep Rose"],
  },
  "dark": {
    foundation: ["Deep", "Espresso", "Ebony"],
    concealer: ["Deep", "Espresso", "Rich"],
    blush: ["Deep Plum", "Burgundy", "Deep Berry"],
    lipstick: ["Deep Plum", "Deep Berry", "Rich Brown"],
  },
}

// Generate mock products based on skin tone
export function getMockProducts(skinTone: string): Record<string, Product[]> {
  const result: Record<string, Product[]> = {
    foundation: [],
    concealer: [],
    blush: [],
    lipstick: [],
  }

  // Get suitable shades for the skin tone
  const suitableShades = skinToneProductMap[skinTone] || skinToneProductMap["Medium"]

  // Generate products for each category
  Object.keys(result).forEach((category) => {
    const shades = suitableShades[category]
    const descriptions =
      category === "foundation"
        ? foundationDescriptions
        : category === "concealer"
          ? concealerDescriptions
          : category === "blush"
            ? blushDescriptions
            : lipstickDescriptions

    // Generate 6 products per category
    for (let i = 0; i < 6; i++) {
      const brand = filipinoBrands[Math.floor(Math.random() * filipinoBrands.length)]
      const shade = shades[Math.floor(Math.random() * shades.length)]
      const description = descriptions[Math.floor(Math.random() * descriptions.length)]

      result[category].push({
        id: generateId(),
        name: `${brand} ${category.charAt(0).toUpperCase() + category.slice(1)} - ${shade}`,
        brand,
        description,
        price: generatePrice(299, 1299),
        rating: generateRating(),
        imageUrl: getProductImage(category, shade),
        category,
        skinTones: [skinTone],
        isNew: Math.random() > 0.8, // 20% chance of being marked as new
      })
    }
  })

  return result
}

// Helper function to get random products from an array
function getRandomProducts<T>(products: T[], count: number): T[] {
  if (products.length <= count) {
    return [...products];
  }
  
  const result: T[] = [];
  const indices = new Set<number>();
  
  while (indices.size < count) {
    const index = Math.floor(Math.random() * products.length);
    if (!indices.has(index)) {
      indices.add(index);
      result.push(products[index]);
    }
  }
  
  return result;
}

// Helper function to get product recommendations based on skin tone
export function getProductRecommendations(skinTone: string, category: string) {
  // If the skin tone doesn't exist in our mapping, use a default
  if (!skinToneProductMap[skinTone]) {
    console.warn(`Unknown skin tone: ${skinTone}, using Medium as default`)
    return getRandomProducts(skinToneProductMap["Medium"][category] || [], 3)
  }
  
  // If the category doesn't exist, return an empty array
  if (!skinToneProductMap[skinTone][category]) {
    return []
  }
  
  return getRandomProducts(skinToneProductMap[skinTone][category], 3)
}

