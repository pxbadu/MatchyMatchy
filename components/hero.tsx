"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload-section")
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Find Your Perfect <span className="text-primary">Match</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Upload your photo and let our AI classify your skin tone to recommend the best Filipino makeup products for
          you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto" onClick={scrollToUpload}>
            Try It Now
          </Button>
          <Link href="/about">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

