import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"

export function MassSchedule() {
  const schedule = [
    {
      day: "Domingo",
      times: ["8:00", "10:00", "19:00"],
      special: "Missa Principal às 10:00",
    },
    {
      day: "Segunda a Sexta",
      times: ["7:00", "19:00"],
      special: "Adoração após missa das 19:00",
    },
    {
      day: "Sábado",
      times: ["7:00", "19:00"],
      special: "Missa de sábado antecipa domingo",
    },
  ]

  return (
    <section id="missas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[var(--font-playfair)]">
            Horários das Missas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Participe da celebração eucarística e fortaleça sua fé em comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  {item.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {item.times.map((time, timeIndex) => (
                    <div key={timeIndex} className="flex items-center justify-center gap-2 text-lg">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="font-semibold">{time}</span>
                    </div>
                  ))}
                  {item.special && <p className="text-sm text-muted-foreground mt-4 italic">{item.special}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Celebrações Especiais</h3>
              <p className="text-muted-foreground">
                Confira nosso calendário para missas especiais, novenas e celebrações litúrgicas. Durante a Quaresma e
                Advento, horários especiais podem ser adicionados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
