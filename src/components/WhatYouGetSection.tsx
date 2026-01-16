import { Check } from 'lucide-react'

const items = [
  {
    icon: "📱",
    title: "Plataforma exclusiva com o Protocolo de 7 Dias",
    bgColor: "bg-amber-50"
  },
  {
    icon: "🎬",
    title: "Vídeo principal detalhando cada movimento",
    bgColor: "bg-pink-50"
  },
  {
    icon: "📅",
    title: "Cronograma de execução diária (3 min/dia)",
    bgColor: "bg-green-50"
  },
  {
    icon: "✅",
    title: "Checklist prático de hábitos anti-papada",
    bgColor: "bg-emerald-50"
  }
]

const features = ["DIRETO AO PONTO", "SEM ENROLAÇÃO", "ACESSO VITALÍCIO"]

export default function WhatYouGetSection() {
  return (
    <section className="bg-background py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl">📦</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              O QUE VOCÊ VAI<br />RECEBER
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-sm">
            Tudo o que você precisa para resultados<br />
            profissionais sem sair do seu quarto.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-sm border border-border"
            >
              <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center text-2xl`}>
                {item.icon}
              </div>
              <p className="text-foreground font-medium text-sm flex-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Check className="w-4 h-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
