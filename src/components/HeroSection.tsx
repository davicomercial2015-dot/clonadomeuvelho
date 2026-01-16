export default function HeroSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            PROTOCOLO<br />
            ANTI-PAPADA<br />
            7 DIAS®
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground mb-2">
            O método científico que elimina a papada
          </p>
          <p className="text-2xl font-bold text-primary">
            em apenas 7 dias
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-card overflow-hidden mb-6">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-foreground font-semibold">Assista ao vídeo</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-foreground">
              <span className="font-bold">Apenas 3 minutos por dia</span> - faça no conforto da sua casa
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-foreground">
              <span className="font-bold">Sem equipamentos caros</span> - tudo que você precisa já está em casa
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-foreground">
              <span className="font-bold">Resultados visíveis em 7 dias</span> - ou seu dinheiro de volta
            </p>
          </div>
        </div>

        <a
          href="https://pay.lowify.com.br/checkout.php?product_id=zySLTq"
          className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors shadow-lg"
        >
          QUERO ELIMINAR MINHA PAPADA AGORA
        </a>
      </div>
    </section>
  )
}
