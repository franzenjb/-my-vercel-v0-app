import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Build the future with{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent">
              modern design
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Your Next.js + Vercel + v0.dev stack is working!
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-white/90">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
