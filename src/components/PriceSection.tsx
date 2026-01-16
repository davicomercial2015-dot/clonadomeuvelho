import { Shield, Zap } from 'lucide-react'

const CHECKOUT_URL = "https://pay.lowify.com.br/checkout.php?product_id=zySLTq"

export default function PriceSection() {
  return (
    <section className="bg-section-alt py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full">
            OFERTA EXCLUSIVA: 80% DE DESCONTO
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Elimine a papada<br />
          investindo menos que<br />
          um lanche.
        </h2>

        <div className="bg-gradient-to-br from-card to-accent/30 rounded-3xl p-8 shadow-2xl border-2 border-primary/30 mb-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-1 relative z-10">
            <span className="text-price-old text-base line-through opacity-70">
              De R$ 97,00
            </span>
          </div>

          <p className="text-center text-muted-foreground text-xs uppercase tracking-widest mb-3 relative z-10">
            por apenas
          </p>

          <div className="text-center mb-2 relative z-10">
            <div className="inline-flex items-baseline gap-1 bg-primary/10 px-6 py-3 rounded-2xl">
              <span className="text-primary text-2xl font-medium">R$</span>
              <span className="text-6xl font-extrabold text-primary">19</span>
              <span className="text-primary text-3xl font-bold">,90</span>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mb-6 relative z-10">
            ou 3x de R$ 7,29
          </p>

          <div className="space-y-3">
            <a
              href={CHECKOUT_URL}
              className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors relative z-10"
            >
              <div className="text-lg">LIBERAR MEU ACESSO</div>
              <div className="text-xs opacity-90 mt-1">ACESSO VITALÍCIO IMEDIATO</div>
            </a>
            <a
              href={CHECKOUT_URL}
              className="block w-full bg-white hover:bg-gray-50 text-primary font-semibold py-3 px-6 rounded-xl text-center transition-colors text-sm relative z-10 border-2 border-primary/20"
            >
              LIBERAÇÃO IMEDIATA VIA PIX OU CARTÃO
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-12">
          <div className="flex flex-col items-center gap-2 text-primary">
            <Shield className="w-8 h-8" />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
              Seguro
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-primary">
            <Zap className="w-8 h-8" />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
              Na Hora
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
