import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card" // Lembre-se de instalar shadcn/ui
import { Button } from "@/components/ui/button" // Lembre-se de instalar shadcn/ui

export default function ProductListSection() {
  const products = [
    {
      name: "Vela Aromática de Lavanda",
      description: "Relaxe e harmonize seu ambiente com o suave aroma de lavanda.",
      price: "R$ 49,90",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Quartzo Rosa Bruto",
      description: "A pedra do amor incondicional e da paz infinita.",
      price: "R$ 75,00",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kit Incenso Natural",
      description: "Variedade de incensos naturais para purificação e meditação.",
      price: "R$ 35,50",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ametista Ponta",
      description: "Promove a calma, a clareza mental e a proteção espiritual.",
      price: "R$ 120,00",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vela de Cera de Abelha Pura",
      description: "Queima limpa e purifica o ar, ideal para rituais.",
      price: "R$ 59,90",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Selenita Bastão",
      description: "Poderosa para limpeza energética de ambientes e outros cristais.",
      price: "R$ 40,00",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Difusor de Óleos Essenciais",
      description: "Crie uma atmosfera terapêutica com seus óleos favoritos.",
      price: "R$ 180,00",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Pirita Bruta",
      description: "Atrai prosperidade, abundância e boa sorte.",
      price: "R$ 90,00",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-12">Nossos Itens Energéticos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={250}
                height={250}
                className="rounded-md mb-4 object-cover w-full h-48 sm:h-64"
              />
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-xl font-semibold text-stone-700">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pb-4 flex-grow">
                <CardDescription className="text-stone-600 text-sm">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-0 pt-2 flex flex-col items-center w-full">
                <p className="text-2xl font-bold text-amber-600 mb-4">{product.price}</p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Adicionar ao Carrinho</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
