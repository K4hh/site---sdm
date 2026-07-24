"use client"

import { useState } from "react"
import { Sun, Sunrise, Clock, Sunset, Moon, Star, BookOpen, ChevronRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const horasLiturgicas = [
  {
    id: "oficio-leituras",
    nome: "Ofício das Leituras",
    horario: "Qualquer hora",
    icon: BookOpen,
    descricao: "Leituras bíblicas e patrísticas para meditação",
    color: "from-indigo-600 to-purple-700",
    conteudo: `OFÍCIO DAS LEITURAS

V. Ó Deus, vinde em meu auxílio.
R. Senhor, socorrei-me e salvai-me.

Glória ao Pai e ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre. Amém. Aleluia.

HINO

SALMO 3

Senhor, como são muitos os meus opressores,
como são muitos os que se levantam contra mim!
Muitos dizem a meu respeito:
"Nem Deus o pode salvar!"

Mas vós, Senhor, sois um escudo que me protege,
sois minha glória, levantais minha cabeça.
Eu clamo ao Senhor em alta voz,
e ele me responde de seu monte santo.

PRIMEIRA LEITURA
Do livro do Profeta Isaías

Assim diz o Senhor: "Eu, o Senhor, te chamei para a justiça, tomei-te pela mão e te formei; eu te constituí para a aliança do povo e a luz das nações..."

RESPONSÓRIO
R. O Senhor é minha luz e salvação.

SEGUNDA LEITURA
Dos escritos de Santa Faustina Kowalska

"A humanidade não encontrará paz enquanto não se voltar com confiança para a Minha misericórdia."

ORAÇÃO CONCLUSIVA

Ó Deus, que pela ressurreição de vosso Filho, nosso Senhor Jesus Cristo, vos dignastes alegrar o mundo, concedei-nos, pela intercessão da Virgem Maria, sua Mãe, chegarmos às alegrias da vida eterna. Por nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo. Amém.`
  },
  {
    id: "laudes",
    nome: "Laudes",
    horario: "Manhã (6h)",
    icon: Sunrise,
    descricao: "Oração matutina de louvor",
    color: "from-amber-500 to-orange-600",
    conteudo: `LAUDES - ORAÇÃO DA MANHÃ

V. Ó Deus, vinde em meu auxílio.
R. Senhor, socorrei-me e salvai-me.

Glória ao Pai e ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre. Amém. Aleluia.

HINO DA MANHÃ

Aurora, mensageira da luz,
anuncia ao mundo o novo dia,
e já nosso espírito reluz
com a graça da Ave Maria.

SALMO 62 (63)

Ó Deus, sois o meu Deus, eu vos procuro!
A minha alma tem sede de vós,
meu corpo vos deseja com ardor
como terra árida, sedenta e sem água.

Assim eu vos contemplava no santuário,
para ver a vossa glória e o vosso poder.
Pois vosso amor vale mais que a vida:
por isso meus lábios vos louvam.

Quero bendizer-vos pela vida afora,
erguendo minhas mãos em vossa direção.
De abundância se sacia a minha alma,
e minha boca vos louva com alegria.

CÂNTICO DE ZACARIAS

Bendito seja o Senhor, Deus de Israel,
porque visitou e redimiu o seu povo.

PRECES

Bendigamos a Cristo, sol de justiça que ilumina todos os seres humanos, e digamos:
R. Senhor, sede a nossa luz e a nossa alegria!

- Sol nascente do alto, que viestes visitar-nos...

ORAÇÃO CONCLUSIVA

Senhor Deus, pela vossa misericórdia iluminai nosso dia com a luz de Cristo, para que sejamos testemunhas do vosso amor. Por nosso Senhor Jesus Cristo. Amém.`
  },
  {
    id: "hora-media",
    nome: "Hora Média",
    horario: "9h / 12h / 15h",
    icon: Sun,
    descricao: "Terça, Sexta e Noa",
    color: "from-yellow-500 to-amber-600",
    conteudo: `HORA MÉDIA

V. Ó Deus, vinde em meu auxílio.
R. Senhor, socorrei-me e salvai-me.

Glória ao Pai e ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre. Amém. Aleluia.

HINO

Ó Cristo, luz do dia,
dissipai as trevas do pecado,
concedei a vossa graça e paz
aos que buscam o vosso rosto sagrado.

SALMO 118

Felizes os que trilham um caminho reto,
os que caminham na lei do Senhor!
Felizes os que guardam seus preceitos
e o procuram de todo o coração!

Vós promulgastes os vossos mandamentos
para que fossem fielmente observados.
Oxalá os meus passos sejam firmes
na observância de vossas leis!

LEITURA BREVE

"Crede na luz, para serdes filhos da luz" (Jo 12,36).

V. A tua Palavra, Senhor, é a luz dos meus passos.
R. Ela ilumina o meu caminho.

ORAÇÃO

Senhor Deus, à hora em que vosso Filho Jesus derramou Sangue e Água para a salvação do mundo, concedei-nos experimentar os frutos da vossa misericórdia. Por Cristo, nosso Senhor. Amém.`
  },
  {
    id: "vesperas",
    nome: "Vésperas",
    horario: "Tarde (18h)",
    icon: Sunset,
    descricao: "Oração vespertina de ação de graças",
    color: "from-orange-600 to-red-700",
    conteudo: `VÉSPERAS - ORAÇÃO DA TARDE

V. Ó Deus, vinde em meu auxílio.
R. Senhor, socorrei-me e salvai-me.

Glória ao Pai e ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre. Amém. Aleluia.

HINO

Ó luz serena da santa glória
do Pai celeste e imortal,
Jesus Cristo, santo e bendito,
sol poente do dia eternal.

SALMO 140 (141)

Senhor, eu vos invoco, vinde logo!
Escutai minha voz quando vos chamo!
Minha oração suba como incenso
e minhas mãos sejam oblação vespertina.

Ponde uma guarda à minha boca, Senhor,
vigiai a porta de meus lábios!

CÂNTICO DE MARIA (Magnificat)

A minha alma engrandece o Senhor,
e exulta de alegria o meu espírito
em Deus, meu Salvador.

Porque olhou para a humildade da sua serva.
Doravante todas as gerações me chamarão bem-aventurada.

O Todo-poderoso fez em mim maravilhas,
Santo é o seu Nome!

A sua misericórdia se estende de geração em geração
sobre aqueles que o temem.

ORAÇÃO CONCLUSIVA

Senhor Deus, ao anoitecer deste dia, vos damos graças pelas vossas bênçãos. Que a vossa misericórdia nos acompanhe sempre. Por nosso Senhor Jesus Cristo. Amém.`
  },
  {
    id: "completas",
    nome: "Completas",
    horario: "Noite (21h)",
    icon: Moon,
    descricao: "Oração antes do repouso noturno",
    color: "from-slate-700 to-slate-900",
    conteudo: `COMPLETAS - ORAÇÃO DA NOITE

V. Ó Deus, vinde em meu auxílio.
R. Senhor, socorrei-me e salvai-me.

Glória ao Pai e ao Filho e ao Espírito Santo.
Como era no princípio, agora e sempre. Amém.

EXAME DE CONSCIÊNCIA

(momento de silêncio)

Confesso a Deus todo-poderoso e a vós, irmãos, que pequei muitas vezes por pensamentos, palavras, atos e omissões, por minha culpa, minha tão grande culpa. E peço à Virgem Maria, aos anjos e santos, e a vós, irmãos, que rogueis por mim a Deus, nosso Senhor.

HINO

Antes que a noite desça,
nós vos pedimos, Senhor,
que veleis sobre nós
com vosso amor protetor.

SALMO 90 (91)

Quem habita na proteção do Altíssimo
e mora na sombra do Onipotente,
diz ao Senhor: "Sois meu refúgio e fortaleza,
meu Deus, em quem eu confio!"

Ele te livrará do laço do caçador
e da peste perniciosa.
Ele te cobrirá com suas asas
e sob suas penas encontrarás refúgio.

CÂNTICO DE SIMEÃO

Agora, Senhor, deixai o vosso servo ir em paz,
segundo a vossa palavra.
Porque meus olhos viram a vossa salvação,
que preparastes diante de todos os povos:
luz para iluminar as nações
e glória de Israel, vosso povo.

ORAÇÃO

Senhor, visita esta casa e afasta dela todas as ciladas do inimigo. Que os vossos santos anjos habitem conosco e nos guardem em paz. E que a vossa bênção esteja sempre sobre nós. Por Cristo nosso Senhor. Amém.

ANTÍFONA MARIANA

Salve, Rainha, Mãe de misericórdia,
vida, doçura, esperança nossa, salve!
A vós bradamos, os degredados filhos de Eva.
A vós suspiramos, gemendo e chorando
neste vale de lágrimas.
Eia, pois, advogada nossa,
esses vossos olhos misericordiosos a nós volvei.
E depois deste desterro,
mostrai-nos Jesus, bendito fruto do vosso ventre.
Ó clemente, ó piedosa, ó doce sempre Virgem Maria!`
  },
]

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

export function LiturgiaScreen() {
  const [selectedHora, setSelectedHora] = useState<typeof horasLiturgicas[0] | null>(null)
  const hoje = new Date()
  const diaAtual = hoje.getDay()

  if (selectedHora) {
    return (
      <div className="min-h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 glass-effect px-4 py-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSelectedHora(null)}
              className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground rotate-180" />
            </button>
            <div>
              <h2 className="text-lg font-bold text-foreground">{selectedHora.nome}</h2>
              <p className="text-xs text-muted-foreground">{selectedHora.horario}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-6">
          <div 
            className="p-5 rounded-2xl glass-effect border border-gold/20"
          >
            <div className="prose prose-invert max-w-none">
              {selectedHora.conteudo.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-foreground leading-relaxed mb-4 last:mb-0 whitespace-pre-line text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Footer Quote */}
          <div className="text-center py-6">
            <p className="text-gold italic text-sm">{'"Jesus, eu confio em Vós"'}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <section className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Liturgia das Horas</h2>
        <p className="text-sm text-muted-foreground">
          Santificando o dia pela oração da Igreja
        </p>
      </section>

      {/* Week Calendar */}
      <Card className="glass-effect border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground">
              {hoje.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {diasSemana.map((dia, index) => (
              <div
                key={dia}
                className={cn(
                  "flex flex-col items-center py-2 rounded-lg transition-all",
                  index === diaAtual 
                    ? "bg-gradient-to-br from-primary to-secondary text-white" 
                    : "text-muted-foreground"
                )}
              >
                <span className="text-[10px] font-medium">{dia}</span>
                <span className={cn(
                  "text-sm font-bold mt-1",
                  index === diaAtual ? "text-white" : "text-foreground"
                )}>
                  {new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - diaAtual + index).getDate()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Hour Highlight */}
      <Card className="overflow-hidden border-0">
        <div className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBMMzAgMTBNMzAgMzBMNDUgNDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white/70 text-xs font-medium">Próxima Hora Litúrgica</p>
              <h3 className="text-white font-bold text-xl">Vésperas</h3>
              <p className="text-white/80 text-sm">Hoje às 18h</p>
            </div>
            <Star className="w-6 h-6 text-gold" />
          </div>
        </div>
      </Card>

      {/* Hours List */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Horas Canônicas</h3>
        <div className="space-y-2">
          {horasLiturgicas.map((hora) => {
            const Icon = hora.icon
            
            return (
              <button
                key={hora.id}
                onClick={() => setSelectedHora(hora)}
                className="w-full flex items-center gap-4 p-4 rounded-xl glass-effect border border-border/50 transition-all duration-300 hover:border-gold/30 hover:bg-muted/30 active:scale-[0.99]"
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                  hora.color
                )}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm font-semibold text-foreground">{hora.nome}</h4>
                  <p className="text-xs text-muted-foreground">{hora.descricao}</p>
                  <p className="text-xs text-gold mt-1">{hora.horario}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
