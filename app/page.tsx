import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeMessageSection from "@/components/welcome-message-section"
import ProductListSection from "@/components/product-list-section"
import CallToActionSection from "@/components/call-to-action-section"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section" // Nova importação

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection delay={100}>
          {" "}
          {/* Adicionando animação */}
          <WelcomeMessageSection />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          {" "}
          {/* Adicionando animação */}
          <ProductListSection />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          {" "}
          {/* Adicionando animação */}
          <CallToActionSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
