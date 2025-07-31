export default function WelcomeMessageSection() {
  return (
    <section className="bg-[#8B5E4B] py-8 sm:py-12 md:py-16 px-4 md:px-6 text-white font-serif italic">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 text-center md:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed">
            ✨ Seja bem-vinda(o) ✨
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Um universo de bem-estar, autocuidado e conexão com o sagrado que
            habita em você.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 text-center md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Aqui, cada produto é mais do que uma vela, um banho ou um aroma. É
            um ritual de amor-próprio, uma pausa no tempo, um convite para se
            reconectar com sua essência.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Este catálogo foi criado com carinho para te apresentar nossos itens
            naturais, feitos à mão com propósito e alma. Sinta, escolha com o
            coração... e permita-se iluminar de dentro pra fora. 🌿🕯️💫
          </p>
        </div>
      </div>
    </section>
  );
}
