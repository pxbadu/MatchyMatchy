import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ImageUploader } from "@/components/image-uploader"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div id="upload-section" className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Upload Your Photo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a clear selfie in good lighting for the most accurate skin tone classification
              </p>
            </div>
            <ImageUploader />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

