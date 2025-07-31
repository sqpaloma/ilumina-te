import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#8B5E4B] to-[#e3ae97] text-white text-center">
      <div className="container mx-auto px-4 md:px-6 space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Transforme Sua Vida com Nossos Itens Energéticos
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore a magia e o poder dos nossos produtos cuidadosamente
          selecionados para elevar sua vibração e trazer equilíbrio ao seu dia a
          dia.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#8B5E4B] hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
        >
          Ver Todos os Produtos
        </Button>
      </div>
    </section>
  );
}
