import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-stone-800 py-16 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-200 pb-12">
        {/* Coluna 1: Logo e Descrição */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          {/* Usando o nome da empresa como logo placeholder */}
          <h2 className="text-3xl font-semibold text-[#8B5E4B]">ilumina-te</h2>
          <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
            Um universo de bem-estar, autocuidado e conexão com o sagrado que
            habita em você.
          </p>
        </div>

        {/* Coluna 2: Serviços */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold mb-2">Serviços</h3>
          <Link
            href="#"
            className="text-stone-600 hover:text-#8B5E4B]  transition-colors text-sm"
          >
            Consultar Aromas
          </Link>
          <Link
            href="#"
            className="text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            Formas de Pagamento
          </Link>
          <Link
            href="#"
            className="text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            Entrega Grátis em Irecê
          </Link>
        </div>

        {/* Coluna 3: Empresa */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold mb-2">Empresa</h3>
          <Link
            href="#"
            className="text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            Sobre Nós
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
            >
              Blog
            </Link>
            <span className="bg-[#8B5E4B] text-white text-xs px-2 py-0.5 rounded-full">
              EM BREVE
            </span>
          </div>
          <Link
            href="#"
            className="text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            Projetos
          </Link>
          <div className="flex items-center gap-2">
            <span className="bg-[#8B5E4B] text-white text-xs px-2 py-0.5 rounded-full">
              CONTRATANDO
            </span>
          </div>
        </div>

        {/* Coluna 4: Contato */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <a
            href="tel:+5571999637491"
            className="flex items-center gap-2 text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            <Phone className="w-4 h-4" /> (71) 99963-7491
          </a>
          <a
            href="mailto:contato@iluminate.com"
            className="flex items-center gap-2 text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            <Mail className="w-4 h-4" /> contato@iluminate.com
          </a>
          <a
            href="https://wa.me/5571999637491"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-600 hover:text-[#8B5E4B] transition-colors text-sm"
          >
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
          <p className="flex items-start gap-2 text-stone-600 text-sm">
            <MapPin className="w-4 h-4 mt-1" /> Rua Melo Palheta, 172 - Água
            Branca <br /> Salvador - BA, 05002-030
          </p>
        </div>
      </div>

      {/* Rodapé Inferior: Copyright e Redes Sociais */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-8 space-y-4 md:space-y-0">
        <p className="text-sm text-stone-500">
          Copyright &copy; {new Date().getFullYear()} ilumina-te. Todos os
          direitos reservados.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/ilumina-te"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-[#8B5E4B] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/ilumina_te_777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-[#8B5E4B] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
