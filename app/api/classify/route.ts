import { NextResponse } from "next/server"
// Use the real classifySkinTone function
import { classifySkinTone } from "@/lib/model-utils"

// Add Buffer type declaration if needed
declare global {
  interface Global {
    Buffer: typeof Buffer;
  }
}

// Use standard Request type instead of NextRequest
export async function POST(request: Request) {
  try {
    // Check if this is a JSON request for testing
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      try {
        // Handle JSON request for testing
        const jsonData = await request.json();
        
        // Return mock response for testing
        if (jsonData && jsonData.data === 'test') {
          console.log("Test mode detected, returning mock response");
          return NextResponse.json({
            success: true,
            skinTone: "Medium",
            confidence: 0.75,
            modelCategory: "mid-light",
            message: "Test mode - mock classification",
            isDemo: true
          });
        }
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        // Continue to form data parsing if JSON parsing fails
      }
    }
    
    // Default behavior for form data with image
    // Parse the form data
    const formData = await request.formData()
    const image = formData.get("image") as File

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // Validate image type
    const validImageTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validImageTypes.includes(image.type)) {
      return NextResponse.json({ 
        error: "Invalid image format. Please upload a JPEG, PNG, or WebP image." 
      }, { status: 400 })
    }

    // Convert File to Buffer
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Use the model to classify the skin tone
    const result = await classifySkinTone(buffer)
    const { skinTone, confidence, modelCategory, isDemo } = result

    return NextResponse.json({
      success: true,
      skinTone,
      confidence,
      modelCategory,
      isDemo,
      message: `Classified as ${skinTone} (model category: ${modelCategory})`
    })
  } catch (error) {
    console.error("Error classifying image:", error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Failed to process image",
      success: false
    }, { status: 500 })
  }
}

