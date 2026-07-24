import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Heart, BookOpen, Users, Baby, Utensils, Hand as Hands, Cross } from "lucide-react"

export function MinistriesSection() {
  const ministries = [
    {
      name: "Coral Paroquial",
      icon: Music,
      description: "Animação litúrgica através da música sacra e cantos de louvor.",
      contact: "coral@paroquiasaojose.org.br",
    },
    {
      name: "Pastoral da Saúde",
      icon: Heart,
      description: "Visitas a enfermos e acompanhamento espiritual em hospitais.",
      contact: "saude@paroquiasaojose.org.br",
    },
    {
      name: "Catequese",
      icon: BookOpen,
      description: "Formação religiosa para crianças, jovens e adultos.",
      contact: "catequese@paroquiasaojose.org.br",
    },
    {
      name: "Pastoral Familiar",
      icon: Users,
      description: "Acompanhamento e fortalecimento das famílias cristãs.",
      contact: "familia@paroquiasaojose.org.br",
    },
    {
      name: "Pastoral da Criança",
      icon: Baby,
      description: "Cuidado integral com crianças de 0 a 6 anos e suas famílias.",
      contact: "crianca@paroquiasaojose.org.br",
    },
    {
      name: "Ação Social",
      icon: Utensils,
      description: "Distribuição de alimentos e apoio às famílias necessitadas.",
      contact: "social@paroquiasaojose.org.br",
    },
    {
      name: "Ministros da Eucaristia",
      icon: Hands,
      description: "Distribuição da comunhão e levar a eucaristia aos enfermos.",
      contact: "eucaristia@paroquiasaojose.org.br",
    },
    {
      name: "Pastoral Vocacional",
      icon: Cross,
      description: "Acompanhamento de jovens no discernimento vocacional.",
      contact: "vocacional@paroquiasaojose.org.br",
    },
  ]

  return (
    <section id="ministerios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[var(--font-playfair)]">
            Ministérios e Pastorais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubra como você pode servir a Deus e à comunidade através dos nossos ministérios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const IconComponent = ministry.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary font-[var(--font-playfair)]">{ministry.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-pretty">{ministry.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Participar
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Quer Participar?</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Todos são bem-vindos para servir na casa do Senhor. Entre em contato conosco para conhecer melhor os
                ministérios e descobrir onde Deus está te chamando para servir.
              </p>
              <Button size="lg">Fale Conosco</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
