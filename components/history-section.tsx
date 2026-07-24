export function HistorySection() {
  const timeline = [
    {
      year: "1999",
      title: "Fundação",
      description: "O Seminário Servos da Divina Misericórdia foi fundado por um grupo de fiéis devotos em Fazenda Rio Grande, PR, respondendo ao chamado para dedicar suas vidas ao serviço de Deus."
    },
    {
      year: "2005",
      title: "Nova Sede",
      description: "Com o crescimento da comunidade, adquirimos nossa sede atual na Via da Misericórdia, um espaço amplo que permite acolher mais servos e servas em formação."
    },
    {
      year: "2015",
      title: "Reconhecimento Diocesano",
      description: "Nossa comunidade recebeu o reconhecimento oficial da Diocese, consolidando nosso trabalho de formação e evangelização baseado na devoção à Divina Misericórdia."
    },
    {
      year: "Hoje",
      title: "Missão Contínua",
      description: "Continuamos nossa missão de formar servos e servas, oferecendo cursos, produzindo artigos religiosos e servindo a comunidade com o amor misericordioso de Jesus."
    }
  ]

  return (
    <section id="historia" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Nossa Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Uma História de Fé
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça a trajetória de fé e dedicação que marca nossa comunidade há mais de duas décadas.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white" />

                {/* Spacer for desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
