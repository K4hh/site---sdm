import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos aqui para acolhê-lo. Entre em contato para qualquer necessidade espiritual ou dúvida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Via da Misericórdia - Eucaliptos<br />
                    Fazenda Rio Grande - PR<br />
                    CEP: 83820-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    (41) 3000-0000<br />
                    (41) 99999-9999 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@servosdadivinamisericordia.org.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 17h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.123456789!2d-49.2979352!3d-25.6227969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcff245cc25c3f%3A0xb269015252555825!2sSeminárioo%20Servos%20da%20Divina%20Misericórdia!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Seminário"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Envie uma Mensagem</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-navy mb-2 block">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-navy mb-2 block">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-navy mb-2 block">
                  E-mail
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-navy mb-2 block">
                  Assunto
                </label>
                <Input id="subject" placeholder="Como podemos ajudar?" />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-navy mb-2 block">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Escreva sua mensagem..." rows={5} />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
