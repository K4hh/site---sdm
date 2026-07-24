"use client"

import { useState } from "react"
import { AppHeader } from "@/components/oracoes/app-header"
import { AppNavigation } from "@/components/oracoes/app-navigation"
import { HomeScreen } from "@/components/oracoes/home-screen"
import { OracoesScreen } from "@/components/oracoes/oracoes-screen"
import { LiturgiaScreen } from "@/components/oracoes/liturgia-screen"
import { FavoritosScreen } from "@/components/oracoes/favoritos-screen"
import { ConfigScreen } from "@/components/oracoes/config-screen"

export default function OracoesApp() {
  const [activeTab, setActiveTab] = useState("home")

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} />
      case "oracoes":
        return <OracoesScreen />
      case "liturgia":
        return <LiturgiaScreen />
      case "favoritos":
        return <FavoritosScreen />
      case "config":
        return <ConfigScreen />
      default:
        return <HomeScreen onNavigate={setActiveTab} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />
      </div>

      <AppHeader />
      
      <main className="flex-1 overflow-y-auto pb-24 relative z-10">
        {renderScreen()}
      </main>

      <AppNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
