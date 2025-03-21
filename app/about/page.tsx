import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Matchy-Matchy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Helping Filipinos find their perfect makeup match through AI-powered skin tone classification.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Matchy-Matchy was created to solve a common problem faced by many Filipinos: finding makeup products
                that truly match their unique skin tone.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to leverage cutting-edge AI technology to provide accurate skin tone classification and
                personalized makeup recommendations from Filipino brands.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that everyone deserves to feel confident and beautiful in their own skin, and finding the
                right makeup products is an important part of that journey.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our platform uses a sophisticated Convolutional Neural Network (CNN) trained on diverse Filipino skin
                tones to accurately classify your skin tone from a simple selfie.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Once classified, our recommendation engine matches your skin tone with suitable makeup products from
                Filipino brands, taking into account factors like undertones and coverage needs.
              </p>
              <p className="text-lg text-muted-foreground">
                The result? Personalized makeup recommendations that truly complement your natural beauty.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden md:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600&text=How+It+Works"
                alt="How It Works"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">AI Skin Tone Classification</h3>
                <p className="text-muted-foreground">
                  Our CNN model has been trained on thousands of images to accurately classify Filipino skin tones into
                  distinct categories.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Filipino Product Database</h3>
                <p className="text-muted-foreground">
                  We've curated a comprehensive database of makeup products from Filipino brands, categorized by skin
                  tone compatibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Smart Recommendations</h3>
                <p className="text-muted-foreground">
                  Our recommendation algorithm considers multiple factors to suggest products that will truly complement
                  your skin tone.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your photo today and discover Filipino makeup products that are perfect for your unique skin tone.
            </p>
            <Link href="/#upload-section">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
                Try It Now
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

