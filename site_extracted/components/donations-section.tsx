"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Heart, Check, Copy, QrCode } from "lucide-react"

const PRESET_AMOUNTS = ["25", "50", "100", "200"]

// TODO: substituir pela chave Pix real do seminário e regenerar o payload/QR
// (payload EMV/BR Code do Banco Central) assim que a chave estiver definida.
const PLACEHOLDER_PIX_CODE =
  "00020126PLACEHOLDER-CHAVE-PIX-A-CONFIGURAR5204000053039865802BR5913SEMINARIO SDM6009CIDADE-UF62070503***6304ABCD"

function PlaceholderQrCode() {
  // Padrão determinístico só para preencher o quadro visualmente — não é um QR real.
  const cells = useMemo(() => {
    let seed = 42
    const rand = () => {
      seed = (seed * 1103515245 + 12345) % 2147483648
      return seed / 2147483648
    }
    return Array.from({ length: 11 * 11 }, () => rand() > 0.55)
  }, [])

  return (
    <div className="relative w-full max-w-[220px] mx-auto aspect-square rounded-2xl bg-white p-3 shadow-lg">
      <div className="grid grid-cols-11 grid-rows-11 gap-[2px] w-full h-full opacity-90">
        {cells.map((on, i) => (
          <div key={i} className={on ? "bg-navy rounded-[1px]" : "bg-transparent"} />
        ))}
      </div>
      {/* Marcadores de canto, como num QR real, só para o visual */}
      {[
        "top-3 left-3",
        "top-3 right-3",
        "bottom-3 left-3",
      ].map((pos) => (
        <div key={pos} className={`absolute ${pos} w-6 h-6 border-[3px] border-navy rounded-sm`} />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-gold text-navy text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md rotate-[-8deg] shadow-md">
          Em breve
        </span>
      </div>
    </div>
  )
}

export function DonationsSection() {
  const [selected, setSelected] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState("")
  const [copied, setCopied] = useState(false)

  const activeAmount = customAmount ? customAmount : selected

  const handleSelectPreset = (amount: string) => {
    setSelected(amount)
    setCustomAmount("")
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PLACEHOLDER_PIX_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Ambiente sem permissão de clipboard: falha silenciosa, botão simplesmente não confirma.
    }
  }

  return (
    <section id="doacoes" className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Ajude Nossa Missão
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Faça uma Doação via Pix
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Sua contribuição ajuda a manter o seminário, a formação dos servos e servas,
              e as obras de caridade em favor dos mais necessitados.
            </p>
          </div>

          {/* Aviso de ambiente de demonstração */}
          <div className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-5 py-3 mb-10 text-sm text-gold">
            <QrCode className="h-4 w-4 shrink-0" />
            <span>
              QR code e código Pix desta página são de demonstração. Assim que a chave Pix oficial
              for definida, basta atualizar <code className="text-gold-light">PLACEHOLDER_PIX_CODE</code> em{" "}
              <code className="text-gold-light">donations-section.tsx</code>.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: amount selection */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-semibold">Escolha o valor</h3>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-6">
                {PRESET_AMOUNTS.map((amount) => {
                  const isActive = !customAmount && selected === amount
                  return (
                    <button
                      key={amount}
                      onClick={() => handleSelectPreset(amount)}
                      aria-pressed={isActive}
                      className={`py-3 px-2 rounded-xl font-semibold transition-colors border ${
                        isActive
                          ? "bg-secondary border-secondary text-white"
                          : "bg-white/10 hover:bg-white/20 border-white/20"
                      }`}
                    >
                      R$ {amount}
                    </button>
                  )
                })}
              </div>

              <div className="mb-2">
                <label htmlFor="custom-amount" className="text-sm text-white/70 mb-2 block">
                  Outro valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm">
                    R$
                  </span>
                  <Input
                    id="custom-amount"
                    inputMode="decimal"
                    placeholder="0,00"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value.replace(/[^0-9,]/g, ""))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pl-10"
                  />
                </div>
              </div>

              <p className="text-white/50 text-sm mt-6">
                Valor selecionado:{" "}
                <span className="text-white font-semibold">
                  R$ {activeAmount || "0,00"}
                </span>
              </p>
            </div>

            {/* Right: Pix QR + copia e cola */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-6">Escaneie ou copie o código</h3>

              <PlaceholderQrCode />

              <p className="text-white/50 text-xs mt-4 mb-6">
                Abra o app do seu banco, escolha Pix &gt; Ler QR Code
              </p>

              <div className="w-full">
                <label className="text-sm text-white/70 mb-2 block text-left">
                  Pix Copia e Cola
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white/60 text-xs font-mono truncate text-left">
                    {PLACEHOLDER_PIX_CODE}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold px-4 rounded-xl transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copiado" : "Copiar"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/40 text-xs mt-8">
            Toda doação é destinada integralmente às atividades do seminário. Em caso de dúvida
            sobre um comprovante, fale com a secretaria pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
