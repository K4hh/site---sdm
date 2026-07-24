import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "App de Orações - Divina Misericórdia",
  description: "Orações institucionais e Liturgia das Horas do Seminário Divina Misericórdia",
}

export default function OracoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}
