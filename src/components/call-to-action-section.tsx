import { Button } from "@/components/ui/button" // Lembre-se de instalar shadcn/ui

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center">
      <div className="container mx-auto px-4 md:px-6 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Transforme Sua Vida com Nossos Itens Energéticos
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explore a magia e o poder dos nossos produtos cuidadosamente selecionados para elevar sua vibração e trazer
          equilíbrio ao seu dia a dia.
        </p>
        <Button
          size="lg"
          className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Todos os Produtos
        </Button>
      </div>
    </section>
  )
}
