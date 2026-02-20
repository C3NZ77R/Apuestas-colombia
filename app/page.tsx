import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnalisisSection } from "@/components/analisis-section"
import { TelegramCta } from "@/components/telegram-cta"
import { NoticiasSection } from "@/components/noticias-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AnalisisSection />
      <TelegramCta />
      <NoticiasSection />
      <Footer />
    </main>
  )
}
