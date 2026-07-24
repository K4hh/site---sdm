"use client"

import { useState } from "react"
import { ChevronRight, Heart, Play, BookMarked, Cross, Flame, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { OracaoDetalhe } from "./oracao-detalhe"

const oracoesInstitucionais = [
  {
    id: "terco-misericordia",
    titulo: "Terço da Divina Misericórdia",
    descricao: "Oração revelada por Jesus a Santa Faustina",
    icon: Cross,
    duracao: "15 min",
    favorita: true,
    conteudo: `Em nome do Pai, do Filho e do Espírito Santo. Amém.

PAI NOSSO, AVE MARIA, CREIO

Nos contas grandes (5x):
Pai Eterno, eu Vos ofereço o Corpo e Sangue, Alma e Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos do mundo inteiro.

Nas contas pequenas (10x cada dezena):
Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.

Ao final (3x):
Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e do mundo inteiro.

Jesus, eu confio em Vós! (3x)`
  },
  {
    id: "consagracao",
    titulo: "Consagração à Divina Misericórdia",
    descricao: "Oração de entrega total ao amor misericordioso",
    icon: Flame,
    duracao: "5 min",
    favorita: false,
    conteudo: `Ó Amor Misericordioso, a Ti me consagro inteiramente.

Entrego-Te minha mente, para que pense segundo os Teus pensamentos.
Entrego-Te meu coração, para que ame com o Teu Amor.
Entrego-Te minha vontade, para que queira somente o que Tu queres.
Entrego-Te minha vida, para que seja instrumento da Tua Misericórdia.

Jesus, eu confio em Vós!

Que a Vossa Misericórdia me transforme e me faça canal de graças para o mundo.
Amém.`
  },
  {
    id: "novena-misericordia",
    titulo: "Novena à Divina Misericórdia",
    descricao: "Nove dias de oração intensa",
    icon: Star,
    duracao: "20 min",
    favorita: true,
    conteudo: `NOVENA À DIVINA MISERICÓRDIA

Esta novena foi ditada por Jesus a Santa Faustina para ser rezada nos nove dias que precedem a Festa da Divina Misericórdia.

PRIMEIRO DIA
Hoje, traze-Me a humanidade inteira, especialmente todos os pecadores, e imerge-a no mar da Minha misericórdia. Assim Me consolarás na amarga tristeza em que Me lança a perda das almas.

Misericordiosíssimo Jesus, cuja propriedade é ter compaixão de nós e perdoar-nos, não olheis para os nossos pecados, mas para a confiança que depositamos na Vossa infinita bondade...

Pai Eterno, olhai com misericórdia para toda a humanidade e especialmente para os pobres pecadores. Essa humanidade está encerrada no Coração piedosíssimo de Jesus, e por amor desse Coração, concedei-nos a Vossa misericórdia...`
  },
  {
    id: "oracao-tres",
    titulo: "Oração das Três da Tarde",
    descricao: "Hora da Misericórdia - momento de graças",
    icon: Cross,
    duracao: "3 min",
    favorita: false,
    conteudo: `ORAÇÃO DAS TRÊS DA TARDE

Expiraste, Jesus, mas a fonte de vida jorrou para as almas e o oceano de misericórdia abriu-se para o mundo inteiro.

Ó Fonte de Vida, insondável Divina Misericórdia, abraça o mundo inteiro e derrama-te sobre nós.

Ó Sangue e Água, que jorrastes do Coração de Jesus como fonte de Misericórdia para nós, eu confio em Vós!

Jesus, eu confio em Vós! (3x)

Santo Deus, Santo Forte, Santo Imortal, tende piedade de nós e do mundo inteiro. (3x)`
  },
  {
    id: "ladainha",
    titulo: "Ladainha à Divina Misericórdia",
    descricao: "Invocações ao amor misericordioso de Deus",
    icon: BookMarked,
    duracao: "8 min",
    favorita: false,
    conteudo: `LADAINHA À DIVINA MISERICÓRDIA

Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.

Misericórdia de Deus, que brota do seio do Pai - confio em Vós.
Misericórdia de Deus, maior atributo divino - confio em Vós.
Misericórdia de Deus, mistério incompreensível - confio em Vós.
Misericórdia de Deus, fonte que jorra do mistério da Santíssima Trindade - confio em Vós.
Misericórdia de Deus, insondável para qualquer mente humana ou angélica - confio em Vós.
Misericórdia de Deus, da qual provém toda vida e felicidade - confio em Vós.
Misericórdia de Deus, acima dos céus - confio em Vós.
Misericórdia de Deus, fonte de milagres e prodígios - confio em Vós.
Misericórdia de Deus, que abrange todo o universo - confio em Vós.
Misericórdia de Deus, que desceste ao mundo na Pessoa do Verbo Encarnado - confio em Vós.
Misericórdia de Deus, que jorraste da ferida aberta do Coração de Jesus - confio em Vós.`
  },
  {
    id: "oracao-seminario",
    titulo: "Oração do Seminário",
    descricao: "Oração própria da comunidade",
    icon: Flame,
    duracao: "4 min",
    favorita: true,
    conteudo: `ORAÇÃO DO SEMINÁRIO DIVINA MISERICÓRDIA

Senhor Jesus, Rei da Divina Misericórdia,
que revelastes a Santa Faustina os tesouros infinitos do Vosso amor,
abençoai este Seminário de Servos e Servas da Misericórdia.

Concedei-nos a graça de sermos instrumentos fiéis do Vosso amor misericordioso,
levando aos corações feridos a consolação da Vossa presença.

Maria, Mãe da Misericórdia, intercedei por nós.
Santa Faustina, rogai por nós.

Que sejamos sempre testemunhas vivas da Misericórdia,
anunciando a todos: Jesus, eu confio em Vós!

Amém.`
  },
]

export function OracoesScreen() {
  const [selectedOracao, setSelectedOracao] = useState<typeof oracoesInstitucionais[0] | null>(null)
  const [favoritas, setFavoritas] = useState<string[]>(
    oracoesInstitucionais.filter(o => o.favorita).map(o => o.id)
  )

  const toggleFavorita = (id: string) => {
    setFavoritas(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    )
  }

  if (selectedOracao) {
    return (
      <OracaoDetalhe 
        oracao={selectedOracao} 
        onBack={() => setSelectedOracao(null)}
        isFavorita={favoritas.includes(selectedOracao.id)}
        onToggleFavorita={() => toggleFavorita(selectedOracao.id)}
      />
    )
  }

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <section className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Orações Institucionais</h2>
        <p className="text-sm text-muted-foreground">
          Orações da devoção à Divina Misericórdia
        </p>
      </section>

      {/* Featured Prayer */}
      <Card className="overflow-hidden border-0">
        <div className="relative bg-gradient-to-br from-red-700 via-red-600 to-blue-800 p-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative z-10 space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Cross className="w-7 h-7 text-white" />
              </div>
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Play className="w-5 h-5 text-white ml-0.5" />
              </button>
            </div>
            <div>
              <p className="text-white/70 text-xs font-medium mb-1">Oração em Destaque</p>
              <h3 className="text-white font-bold text-xl">Terço da Divina Misericórdia</h3>
              <p className="text-white/80 text-sm mt-1">15 minutos de oração contemplativa</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Prayer List */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Todas as Orações</h3>
        <div className="space-y-2">
          {oracoesInstitucionais.map((oracao) => {
            const Icon = oracao.icon
            const isFavorita = favoritas.includes(oracao.id)
            
            return (
              <button
                key={oracao.id}
                onClick={() => setSelectedOracao(oracao)}
                className="w-full flex items-center gap-4 p-4 rounded-xl glass-effect border border-border/50 transition-all duration-300 hover:border-gold/30 hover:bg-muted/30 active:scale-[0.99]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-semibold text-foreground">{oracao.titulo}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-1">{oracao.descricao}</p>
                  <p className="text-xs text-gold mt-1">{oracao.duracao}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorita(oracao.id)
                    }}
                    className="p-2"
                  >
                    <Heart className={cn(
                      "w-5 h-5 transition-colors",
                      isFavorita ? "fill-primary text-primary" : "text-muted-foreground"
                    )} />
                  </button>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
