import { CircleCheck } from 'lucide-react'

export default function GuaranteeSection() {
  return (
    <section className="bg-background py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-success-light flex items-center justify-center">
            <CircleCheck className="w-16 h-16 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          SUA SATISFAÇÃO OU<br />
          SEU DINHEIRO DE<br />
          VOLTA
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Temos tanta confiança no{" "}
          <span className="font-semibold text-foreground">
            Protocolo Anti-Papada 7 Dias®
          </span>{" "}
          que oferecemos uma{" "}
          <span className="font-semibold text-foreground">
            Garantia Incondicional de 30 Dias
          </span>
          .
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Se você aplicar o protocolo e sentir que não teve{" "}
          <span className="font-semibold text-foreground">resultados</span>, ou
          simplesmente não gostar do conteúdo por qualquer motivo, basta nos enviar um
          e-mail e devolveremos{" "}
          <span className="font-semibold text-foreground">
            100% do seu investimento
          </span>
          . Sem perguntas, sem letras miúdas.{" "}
          <span className="font-semibold text-foreground">O risco é todo nosso.</span>
        </p>
      </div>
    </section>
  )
}
