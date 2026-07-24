import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image of Jesus Misericordioso */}
      <div className="absolute inset-0">
        <Image
          src="/jesus-misericordioso-bg.jpg"
          alt="Jesus Misericordioso"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <Heart className="h-4 w-4 text-secondary" />
            Servos e Servas da Divina Misericórdia
          </div>

          {/* Title with Coat of Arms */}
          <div className="flex items-start gap-6 mb-6">
            <Image
              src="/brasao-seminario.png"
              alt="Brasão do Instituto"
              width={120}
              height={120}
              className="hidden md:block object-contain"
            />
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Seminário Servos da{" "}
                <span className="text-gold">Divina Misericórdia</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Uma comunidade dedicada à devoção da Divina Misericórdia, 
                formando servos e servas para o serviço de Deus e do próximo.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-base px-8 group"
            >
              Conheça Nossa Comunidade
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8"
            >
              Nossa História
            </Button>
          </div>

          {/* Trust Phrase */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gold text-xl md:text-2xl font-serif italic">
              &quot;Jesus, eu confio em Vós&quot;
            </p>
            <p className="text-white/60 text-sm mt-2">
              Misericordias Domini In Aeternum Cantabo
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
