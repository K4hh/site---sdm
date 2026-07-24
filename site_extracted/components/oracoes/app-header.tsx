"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 glass-effect px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-divine flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">DM</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Divina Misericórdia</h1>
            <p className="text-xs text-gold">Seminário de Servos e Servas</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold hover:bg-muted/50">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold hover:bg-muted/50 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
        </div>
      </div>
    </header>
  )
}
