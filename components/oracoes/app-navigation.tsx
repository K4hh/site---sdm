"use client"

import { Home, BookOpen, Clock, Heart, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: "home", label: "Início", icon: Home },
  { id: "oracoes", label: "Orações", icon: BookOpen },
  { id: "liturgia", label: "Liturgia", icon: Clock },
  { id: "favoritos", label: "Favoritos", icon: Heart },
  { id: "config", label: "Config", icon: Settings },
]

export function AppNavigation({ activeTab, onTabChange }: AppNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass-effect border-t border-border/50 px-2 py-2 z-30">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300",
                isActive 
                  ? "text-gold bg-gold/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "relative",
                isActive && "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-gold after:rounded-full"
              )}>
                <Icon className={cn("w-5 h-5", isActive && "text-gold")} />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
