"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { InfoCircledIcon, ReloadIcon } from "@radix-ui/react-icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SKIN_TONE_COLORS, SKIN_TONE_DESCRIPTIONS } from "@/lib/constants"

interface SkinToneResultWithConfidenceProps {
  image: string
  skinTone: string
  confidence: number
  onReset: () => void
  isDemo?: boolean
}

export function SkinToneResultWithConfidence({
  image,
  skinTone,
  confidence,
  onReset,
  isDemo = false,
}: SkinToneResultWithConfidenceProps) {
  // Format confidence as percentage
  const confidencePercent = Math.round(confidence * 100)
  console.log("Certainty Percent:", confidencePercent + "%")

  
  // Determine confidence level color
  const getConfidenceColor = () => {
    if (confidencePercent >= 80) return "bg-green-500"
    if (confidencePercent >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Skin Tone Analysis</CardTitle>
          {isDemo && (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
              Demo Mode
            </Badge>
          )}
        </div>
        <CardDescription>
          {isDemo ? 
            "This is a simulated result due to low certainty in the analysis." : 
            "Based on your image, we've analyzed your skin tone."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image}
              alt="Uploaded image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Your skin tone:</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoCircledIcon className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        {isDemo 
                          ? "This result is a best guess due to low certainty. Factors like lighting, background, or image quality can affect the analysis." 
                          : "Certainty reflects how certain the AI is about this classification."}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full border"
                  style={{ backgroundColor: SKIN_TONE_COLORS[skinTone] || "#E0AC69" }}
                />
                <span className="text-2xl font-bold">{skinTone}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">AI Certainty</span>
              </div>
              <Progress className={`h-2 ${getConfidenceColor()}`} value={confidencePercent} />
              
              {isDemo && (
                <div className="mt-2 text-sm text-yellow-800 bg-yellow-50 p-2 rounded border border-yellow-200">
                  <p className="flex items-center gap-1">
                    <ReloadIcon className="h-3 w-3" />
                    Tips for better results:
                  </p>
                  <ul className="list-disc ml-5 mt-1 text-xs">
                    <li>Use natural, even lighting</li>
                    <li>Avoid busy backgrounds</li>
                    <li>Face the camera directly</li>
                    <li>Ensure your face is clearly visible</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onReset} className="w-full">
          Try Another Photo
        </Button>
      </CardFooter>
    </Card>
  )
}

