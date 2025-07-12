import { Button } from "/components/ui/button"

export default function Component() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium">
            ✨ New features available now
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Build the future with{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              modern design
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Create stunning applications with our cutting-edge platform. Experience seamless development, beautiful
            interfaces, and powerful features that bring your ideas to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats or social proof */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 border-2 border-white" />
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ developers</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="text-sm font-medium">⭐ 4.9/5 rating from our community</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
