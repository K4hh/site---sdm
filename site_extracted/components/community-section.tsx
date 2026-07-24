import { Heart, BookOpen, Users, Sparkles } from "lucide-react"

export function CommunitySection() {
  const features = [
    {
      icon: Heart,
      title: "Devoção",
      description: "Cultivamos a devoção à Divina Misericórdia através da oração diária, contemplação e adoração.",
      color: "secondary"
    },
    {
      icon: BookOpen,
      title: "Formação",
      description: "Oferecemos formação espiritual e teológica completa para servos e servas em discernimento.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Vivemos em fraternidade, partilhando a vida comum seguindo o exemplo dos primeiros cristãos.",
      color: "secondary"
    },
    {
      icon: Sparkles,
      title: "Missão",
      description: "Levamos a mensagem da Divina Misericórdia através de retiros, pregações e obras de caridade.",
      color: "primary"
    }
  ]

  return (
    <section id="comunidade" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Nossa Comunidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Uma Família em Cristo
          </h2>
          <p className="text-muted-foreground text-lg">
            Somos uma família de servos e servas unidos pela devoção à Divina Misericórdia, 
            dedicados ao serviço de Deus e do próximo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-muted/30 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                feature.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
              }`}>
                <feature.icon className={`h-7 w-7 ${
                  feature.color === "primary" ? "text-primary" : "text-secondary"
                }`} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          {[
            { value: "25+", label: "Anos de Devoção" },
            { value: "150+", label: "Servos e Servas" },
            { value: "12", label: "Casas de Formação" },
            { value: "1000+", label: "Vidas Transformadas" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
