import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

export function ProductsSection() {
  const products = [
    {
      name: "Imagem de Jesus Misericordioso",
      price: "R$ 89,90",
      image: "/divine-mercy-jesus-rays-of-light.jpg",
      category: "Imagens"
    },
    {
      name: "Terço da Divina Misericórdia",
      price: "R$ 35,00",
      image: "/rosary-divine-mercy-red-blue.jpg",
      category: "Terços"
    },
    {
      name: "Livro de Orações",
      price: "R$ 45,00",
      image: "/prayer-book-divine-mercy.jpg",
      category: "Livros"
    },
    {
      name: "Crucifixo Artesanal",
      price: "R$ 120,00",
      image: "/wooden-crucifix-handmade.jpg",
      category: "Artesanato"
    }
  ]

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Artigos Religiosos
          </h2>
          <p className="text-muted-foreground text-lg">
            Artigos confeccionados com devoção pelos nossos servos e servas. 
            Toda renda é revertida para a manutenção do seminário.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-navy">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-navy mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-secondary">{product.price}</span>
                  <Button size="sm" variant="outline" className="gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Ver
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
