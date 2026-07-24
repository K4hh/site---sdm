"use client"

import { Heart, Cross, Flame, BookMarked, Clock, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const oracoesFavoritas = [
  {
    id: "terco-misericordia",
    titulo: "Terço da Divina Misericórdia",
    tipo: "Oração Institucional",
    icon: Cross,
    duracao: "15 min",
    ultimaVez: "Hoje"
  },
  {
    id: "oracao-seminario",
    titulo: "Oração do Seminário",
    tipo: "Oração Institucional",
    icon: Flame,
    duracao: "4 min",
    ultimaVez: "Ontem"
  },
  {
    id: "laudes",
    titulo: "Laudes",
    tipo: "Liturgia das Horas",
    icon: Clock,
    duracao: "20 min",
    ultimaVez: "2 dias atrás"
  },
  {
    id: "novena",
    titulo: "Novena à Divina Misericórdia",
    tipo: "Novena",
    icon: BookMarked,
    duracao: "20 min",
    ultimaVez: "3 dias atrás"
  },
]

export function FavoritosScreen() {
  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <section className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Minhas Favoritas</h2>
        <p className="text-sm text-muted-foreground">
          Orações que você marcou com coração
        </p>
      </section>

      {/* Stats Card */}
      <Card className="glass-effect border-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-primary/10" />
        <CardContent className="p-4 relative">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-2xl font-bold text-gold">{oracoesFavoritas.length}</p>
              <p className="text-xs text-muted-foreground">Favoritas</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Orações Feitas</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">5h</p>
              <p className="text-xs text-muted-foreground">Este mês</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Empty State or List */}
      {oracoesFavoritas.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 space-y-4">
          <div className="w-20 h-20 rounded-full bg-muted/30 flex items-center justify-center">
            <Heart className="w-10 h-10 text-muted-foreground" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Nenhuma favorita ainda</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Toque no coração em qualquer oração para adicioná-la aqui
            </p>
          </div>
        </div>
      ) : (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Suas Orações</h3>
            <span className="text-xs text-muted-foreground">{oracoesFavoritas.length} orações</span>
          </div>
          
          <div className="space-y-2">
            {oracoesFavoritas.map((oracao) => {
              const Icon = oracao.icon
              
              return (
                <div
                  key={oracao.id}
                  className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-border/50 transition-all duration-300 hover:border-gold/30 hover:bg-muted/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">{oracao.titulo}</h4>
                    <p className="text-xs text-muted-foreground">{oracao.tipo}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gold">{oracao.duracao}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{oracao.ultimaVez}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
                      <Heart className="w-5 h-5 fill-primary text-primary" />
                    </button>
                    <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Suggestion */}
      <Card className="glass-effect border-border/50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-secondary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Dica</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Adicione orações aos favoritos para acessá-las rapidamente. 
                Suas favoritas aparecem também na tela inicial.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
