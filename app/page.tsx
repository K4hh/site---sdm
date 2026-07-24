import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CommunitySection } from "@/components/community-section"
import { HistorySection } from "@/components/history-section"
import { ProductsSection } from "@/components/products-section"
import { GallerySection } from "@/components/gallery-section"
import { DonationsSection } from "@/components/donations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CommunitySection />
      <HistorySection />
      <ProductsSection />
      <GallerySection />
      <DonationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
