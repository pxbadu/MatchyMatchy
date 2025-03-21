"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { SKIN_TONE_COLORS, SKIN_TONE_DESCRIPTIONS } from "@/lib/constants"

interface SkinToneResultProps {
  image: string
  skinTone: string
  confidence?: number
  onReset: () => void
}

export function SkinToneResult({ image, skinTone, confidence = 0, onReset }: SkinToneResultProps) {
  const confidencePercentage = Math.round(confidence * 100)
  const confidenceLevel = confidencePercentage >= 80 ? "High" : confidencePercentage >= 60 ? "Medium" : "Low"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Skin Tone Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square w-full max-w-sm mx-auto">
            <Image
              src={image || "/placeholder.svg"}
              alt="Your uploaded image"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Your Skin Tone:</h3>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full border"
                  style={{ backgroundColor: SKIN_TONE_COLORS[skinTone] || "#E0AC69" }}
                />
                <span className="text-2xl font-bold">{skinTone}</span>
              </div>
            </div>

            {confidence > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Confidence Level: <span className="text-xs font-normal text-muted-foreground">({confidenceLevel})</span></h3>
                <Progress value={confidencePercentage} className="h-2 mb-1" />
                <p className="text-xs text-muted-foreground">{confidencePercentage}% confidence</p>
              </div>
            )}

            <p className="text-muted-foreground mb-6">
              {SKIN_TONE_DESCRIPTIONS[skinTone] || "A beautiful skin tone that suits various makeup products."}
            </p>
            
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">What This Means For You</h4>
              <p className="text-sm text-muted-foreground">
                Based on your {skinTone.toLowerCase()} skin tone, we've curated a selection of Filipino makeup products
                that will complement your natural beauty. Scroll down to see your personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={onReset} className="w-full">
          Try Another Photo
        </Button>
      </CardFooter>
    </Card>
  )
}

