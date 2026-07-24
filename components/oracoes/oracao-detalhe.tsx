"use client"

import { ArrowLeft, Heart, Share2, Volume2, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OracaoDetalheProps {
  oracao: {
    id: string
    titulo: string
    descricao: string
    conteudo: string
    duracao: string
  }
  onBack: () => void
  isFavorita: boolean
  onToggleFavorita: () => void
}

export function OracaoDetalhe({ oracao, onBack, isFavorita, onToggleFavorita }: OracaoDetalheProps) {
  const [fontSize, setFontSize] = useState(16)

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24))
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12))

  return (
    <div className="min-h-full flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 glass-effect px-4 py-3 border-b border-border/50">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <button 
              onClick={onToggleFavorita}
              className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Heart className={cn(
                "w-5 h-5 transition-colors",
                isFavorita ? "fill-primary text-primary" : "text-foreground"
              )} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
              <Volume2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">{oracao.titulo}</h1>
          <p className="text-sm text-muted-foreground">{oracao.descricao}</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
              {oracao.duracao}
            </span>
          </div>
        </div>

        {/* Font Size Controls */}
        <div className="flex items-center justify-between p-3 rounded-xl glass-effect border border-border/50">
          <span className="text-sm text-muted-foreground">Tamanho do texto</span>
          <div className="flex items-center gap-3">
            <button 
              onClick={decreaseFontSize}
              className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Minus className="w-4 h-4 text-foreground" />
            </button>
            <span className="text-sm font-medium text-foreground w-8 text-center">{fontSize}</span>
            <button 
              onClick={increaseFontSize}
              className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Plus className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Prayer Content */}
        <div 
          className="p-5 rounded-2xl glass-effect border border-gold/20"
          style={{ fontSize: `${fontSize}px` }}
        >
          <div className="prose prose-invert max-w-none">
            {oracao.conteudo.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-foreground leading-relaxed mb-4 last:mb-0 whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center py-4">
          <p className="text-gold italic text-sm">{'"Jesus, eu confio em Vós"'}</p>
        </div>
      </div>
    </div>
  )
}
