"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Loader2 } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { SkinToneResult } from "@/components/skin-tone-result"
import { ProductRecommendations } from "@/components/product-recommendations"

export function ImageUploader() {
  const { toast } = useToast()
  const [image, setImage] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [skinTone, setSkinTone] = useState<string | null>(null)
  const [confidence, setConfidence] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.includes("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      })
      return
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      })
      return
    }

    setFile(file)
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {
    if (!file) return

    setIsLoading(true)

    try {
      // Create form data for API request
      const formData = new FormData()
      formData.append("image", file)

      // Call the classification API
      const response = await fetch("/api/classify", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setSkinTone(data.skinTone)
        setConfidence(data.confidence)
        setShowResults(true)

        toast({
          title: "Analysis Complete",
          description: `Your skin tone has been classified as ${data.skinTone} with ${Math.round(data.confidence * 100)}% confidence.`,
        })
      } else {
        throw new Error(data.error || "Failed to classify image")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to analyze image. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const resetUpload = () => {
    setImage(null)
    setFile(null)
    setSkinTone(null)
    setConfidence(null)
    setShowResults(false)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {!showResults ? (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Upload a Selfie</CardTitle>
            <CardDescription>
              We'll analyze your photo to determine your skin tone and recommend matching products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all",
                image ? "border-primary" : "border-muted-foreground/25",
              )}
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />

              {image ? (
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Uploaded image"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium mb-1">Click here to upload your photo</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (max. 5MB)</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {image && (
              <Button variant="outline" onClick={resetUpload}>
                Reset
              </Button>
            )}
            <Button
              className={cn(image ? "ml-auto" : "w-full")}
              disabled={!image || isLoading}
              onClick={handleSubmit}
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Skin Tone"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-8">
          <SkinToneResult 
            image={image!} 
            skinTone={skinTone!} 
            confidence={confidence || 0} 
            onReset={resetUpload}
          />
          <ProductRecommendations skinTone={skinTone!} />
        </div>
      )}
    </div>
  )
}

