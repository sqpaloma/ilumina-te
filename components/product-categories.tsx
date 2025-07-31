import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ProductCategories() {
  const categories = [
    {
      title: "Velas Aromáticas",
      description: "Crie um ambiente de paz e bem-estar com nossas velas artesanais.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Pedras Naturais",
      description: "Conecte-se com a energia da terra através de cristais e pedras autênticas.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Incensos e Acessórios",
      description: "Purifique seu espaço e eleve sua vibração com incensos e suportes.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Kits de Energia",
      description: "Combinações perfeitas para rituais de autocuidado e harmonização.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-12">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover w-32 h-32"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-stone-700">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600">{category.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
