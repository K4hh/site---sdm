import { Heart, Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/brasao-seminario.png"
                alt="Brasão do Seminário"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">Seminário Servos da</h3>
                <p className="text-secondary text-sm font-semibold">Divina Misericórdia</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Uma comunidade de servos e servas dedicados à devoção da Divina Misericórdia, 
              formando vocações e servindo a Igreja com amor e fidelidade.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#comunidade", label: "Nossa Comunidade" },
                { href: "#historia", label: "História" },
                { href: "#produtos", label: "Produtos" },
                { href: "#galeria", label: "Galeria" },
                { href: "#doacoes", label: "Doações" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Via da Misericórdia - Eucaliptos</p>
              <p>Fazenda Rio Grande - PR</p>
              <p>CEP: 83820-000</p>
              <p className="pt-2">(41) 3000-0000</p>
              <p>contato@servosdadivinamisericordia.org.br</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center gap-4">
            {/* Trust Phrase */}
            <p className="text-gold text-xl md:text-2xl font-serif italic flex items-center gap-2">
              <Heart className="h-5 w-5 text-secondary" />
              &quot;Jesus, eu confio em Vós&quot;
              <Heart className="h-5 w-5 text-secondary" />
            </p>
            
            <p className="text-white/50 text-xs">
              Misericordias Domini In Aeternum Cantabo
            </p>

            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Seminário Servos da Divina Misericórdia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
