"use client"

import { useState } from "react"
import { 
  Bell, 
  Moon, 
  Sun, 
  Type, 
  Volume2, 
  Info, 
  Heart, 
  Mail,
  ChevronRight,
  Smartphone,
  Clock
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export function ConfigScreen() {
  const [notificacoes, setNotificacoes] = useState(true)
  const [horaMisericordia, setHoraMisericordia] = useState(true)
  const [liturgiaLembretes, setLiturgiaLembretes] = useState(false)
  const [modoEscuro, setModoEscuro] = useState(true)
  const [audioAtivo, setAudioAtivo] = useState(true)

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <section className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Configurações</h2>
        <p className="text-sm text-muted-foreground">
          Personalize sua experiência de oração
        </p>
      </section>

      {/* Notifications Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Notificações</h3>
        <Card className="glass-effect border-border/50">
          <CardContent className="p-0 divide-y divide-border/50">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Notificações</p>
                  <p className="text-xs text-muted-foreground">Ativar alertas do app</p>
                </div>
              </div>
              <Switch checked={notificacoes} onCheckedChange={setNotificacoes} />
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Hora da Misericórdia</p>
                  <p className="text-xs text-muted-foreground">Lembrete às 15h</p>
                </div>
              </div>
              <Switch checked={horaMisericordia} onCheckedChange={setHoraMisericordia} />
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Liturgia das Horas</p>
                  <p className="text-xs text-muted-foreground">Lembretes para cada hora</p>
                </div>
              </div>
              <Switch checked={liturgiaLembretes} onCheckedChange={setLiturgiaLembretes} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Appearance Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Aparência</h3>
        <Card className="glass-effect border-border/50">
          <CardContent className="p-0 divide-y divide-border/50">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  {modoEscuro ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-gold" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Modo Escuro</p>
                  <p className="text-xs text-muted-foreground">Interface em tons escuros</p>
                </div>
              </div>
              <Switch checked={modoEscuro} onCheckedChange={setModoEscuro} />
            </div>

            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Type className="w-5 h-5 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Tamanho da Fonte</p>
                  <p className="text-xs text-muted-foreground">Médio (16px)</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Áudio</p>
                  <p className="text-xs text-muted-foreground">Som de notificações</p>
                </div>
              </div>
              <Switch checked={audioAtivo} onCheckedChange={setAudioAtivo} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sobre</h3>
        <Card className="glass-effect border-border/50">
          <CardContent className="p-0 divide-y divide-border/50">
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Apoie o Seminário</p>
                  <p className="text-xs text-muted-foreground">Faça uma doação</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Contato</p>
                  <p className="text-xs text-muted-foreground">Entre em contato conosco</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Info className="w-5 h-5 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Sobre o App</p>
                  <p className="text-xs text-muted-foreground">Versão 1.0.0</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </CardContent>
        </Card>
      </section>

      {/* Footer Quote */}
      <div className="text-center py-6">
        <p className="text-gold italic text-sm">{'"Jesus, eu confio em Vós"'}</p>
        <p className="text-xs text-muted-foreground mt-2">
          Seminário Divina Misericórdia
        </p>
      </div>
    </div>
  )
}
