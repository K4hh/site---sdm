import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "Festa de São José",
      date: "19 de Março",
      time: "9:00 - 18:00",
      location: "Pátio da Igreja",
      description: "Celebração do padroeiro com missa solene, procissão e festa comunitária.",
      attendees: "Toda a comunidade",
    },
    {
      title: "Retiro Espiritual",
      date: "15-16 de Abril",
      time: "Sábado 14h - Domingo 17h",
      location: "Casa de Retiros",
      description: "Fim de semana de oração, reflexão e renovação espiritual.",
      attendees: "Adultos",
    },
    {
      title: "Primeira Comunhão",
      date: "7 de Maio",
      time: "10:00",
      location: "Igreja Principal",
      description: "Celebração da Primeira Eucaristia das crianças da catequese.",
      attendees: "Famílias",
    },
    {
      title: "Bazar Beneficente",
      date: "20-21 de Maio",
      time: "8:00 - 17:00",
      location: "Salão Paroquial",
      description: "Bazar com roupas, livros e artesanatos para obras sociais da paróquia.",
      attendees: "Comunidade",
    },
  ]

  return (
    <section id="eventos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[var(--font-playfair)]">
            Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Participe das atividades da nossa comunidade e fortaleça os laços de fé e fraternidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary font-[var(--font-playfair)]">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-pretty">{event.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Calendário Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
