import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-tcGJGhb9bHZgxDh0wvdEf3FsBEb15P.jpeg"
        alt="Coleção de cristais, velas e elementos naturais"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        priority
      />
      <div className="relative z-10 text-center px-4 md:px-6 max-w-3xl space-y-4 sm:space-y-6 bg-black/40 p-4 sm:p-6 rounded-lg mx-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Desperte Sua Energia Interior
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
          Descubra nossa coleção exclusiva de velas, pedras e itens energéticos
          para harmonizar seu corpo e mente.
        </p>
        <Button
          size="lg"
          className="bg-[#d4a28d] hover:bg-[#8B5E4B] text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
        >
          Compre Agora
        </Button>
      </div>
    </section>
  );
}
