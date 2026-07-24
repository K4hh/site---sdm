"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Coat of Arms */}
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/brasao-seminario.png"
              alt="Brasão do Seminário Servos da Divina Misericórdia"
              width={56}
              height={56}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-navy leading-tight">
                Seminário Servos da
              </h1>
              <p className="text-sm font-semibold text-secondary">
                Divina Misericórdia
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#comunidade", label: "Comunidade" },
              { href: "#historia", label: "História" },
              { href: "#produtos", label: "Produtos" },
              { href: "#galeria", label: "Galeria" },
              { href: "#contato", label: "Contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <a href="#doacoes">Doar</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#comunidade", label: "Comunidade" },
                { href: "#historia", label: "História" },
                { href: "#produtos", label: "Produtos" },
                { href: "#galeria", label: "Galeria" },
                { href: "#contato", label: "Contato" },
                { href: "#doacoes", label: "Doações" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
