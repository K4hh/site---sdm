"use client"

import { BookOpen, Clock, Cross, Heart, Sparkles, Sun, Moon, Sunset } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HomeScreenProps {
  onNavigate: (tab: string) => void
}

const quickActions = [
  { 
    id: "terco", 
    title: "Terço da Misericórdia", 
    icon: Cross, 
    color: "from-red-600 to-red-800",
    description: "Às 15h, hora da Misericórdia"
  },
  { 
    id: "laudes", 
    title: "Laudes", 
    icon: Sun, 
    color: "from-amber-500 to-orange-600",
    description: "Oração da Manhã"
  },
  { 
    id: "vesperas", 
    title: "Vésperas", 
    icon: Sunset, 
    color: "from-blue-600 to-indigo-700",
    description: "Oração da Tarde"
  },
  { 
    id: "completas", 
    title: "Completas", 
    icon: Moon, 
    color: "from-slate-700 to-slate-900",
    description: "Oração da Noite"
  },
]

const categories = [
  { id: "oracoes", title: "Orações Institucionais", icon: BookOpen, count: 12 },
  { id: "liturgia", title: "Liturgia das Horas", icon: Clock, count: 7 },
  { id: "favoritos", title: "Minhas Favoritas", icon: Heart, count: 5 },
  { id: "novenas", title: "Novenas", icon: Sparkles, count: 8 },
]

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Bom dia"
  if (hour < 18) return "Boa tarde"
  return "Boa noite"
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const greeting = getGreeting()
  const today = new Date().toLocaleDateString("pt-BR", { 
    weekday: "long", 
    day: "numeric", 
    month: "long" 
  })

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Greeting Section */}
      <section className="space-y-1">
        <p className="text-muted-foreground text-sm capitalize">{today}</p>
        <h2 className="text-2xl font-bold text-foreground">{greeting}, Servo(a)!</h2>
        <p className="text-gold text-sm italic">{'"Jesus, eu confio em Vós"'}</p>
      </section>

      {/* Daily Verse Card */}
      <Card className="glass-effect border-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-primary/10" />
        <CardContent className="p-4 relative">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gold font-medium">Versículo do Dia</p>
              <p className="text-sm text-foreground leading-relaxed">
                {'"Ó Sangue e Água, que jorrastes do Coração de Jesus como fonte de Misericórdia para nós, eu confio em Vós!"'}
              </p>
              <p className="text-xs text-muted-foreground">- Diário de Santa Faustina</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Acesso Rápido</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <button
                key={action.id}
                className="group relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br", action.color)} />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{action.title}</h4>
                    <p className="text-xs text-white/70">{action.description}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Categorias</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => onNavigate(category.id)}
                className="w-full flex items-center gap-4 p-4 rounded-xl glass-effect border border-border/50 transition-all duration-300 hover:border-gold/30 hover:bg-muted/30 active:scale-[0.99]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-semibold text-foreground">{category.title}</h4>
                  <p className="text-xs text-muted-foreground">{category.count} orações disponíveis</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                  <span className="text-xs font-medium text-gold">{category.count}</span>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Hora da Misericórdia Banner */}
      <Card className="overflow-hidden border-0">
        <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-blue-700 p-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-lg">Hora da Misericórdia</h4>
              <p className="text-white/80 text-sm">Às 15h - Momento de graças especiais</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
