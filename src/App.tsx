import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeMessageSection from "@/components/welcome-message-section"
import ProductListSection from "@/components/product-list-section"
import CallToActionSection from "@/components/call-to-action-section"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection delay={100}>
          <WelcomeMessageSection />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <ProductListSection />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <CallToActionSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
