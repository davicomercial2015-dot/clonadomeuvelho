import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Resultados incríveis em apenas 7 dias! Minha autoestima melhorou muito.",
    name: "Maria Silva",
    age: 34
  },
  {
    id: 2,
    text: "Não acreditei que seria tão simples. Apenas 3 minutos por dia e já vejo diferença!",
    name: "Ana Paula",
    age: 42
  },
  {
    id: 3,
    text: "Método fantástico! Recomendo para todas as minhas amigas.",
    name: "Julia Santos",
    age: 28
  },
  {
    id: 4,
    text: "Finalmente encontrei algo que funciona de verdade. Obrigada!",
    name: "Carla Souza",
    age: 38
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-section py-12 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
          RESULTADOS REAIS EM 7 DIAS
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-card shadow-card p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⭐</span>
              </div>
              <p className="text-foreground text-lg mb-4 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-primary font-bold">
                {testimonials[currentIndex].name}, {testimonials[currentIndex].age} anos
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
