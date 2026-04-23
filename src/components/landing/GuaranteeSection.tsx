import { ShieldCheck } from "lucide-react";
import { CTAButton } from "../shared/CTAButton";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-5 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-10 text-center">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
            <ShieldCheck className="w-7 h-7 text-primary-600" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            GARANTIA 7 DIAS
          </h2>

          <p className="mt-3 text-gray-600 md:text-lg leading-relaxed">
            Comprou, testou e não gostou? É só pedir reembolso dentro de 7 dias.
            Devolvemos 100% do seu dinheiro.
          </p>

          <div className="mt-6 flex justify-center">
            <a href="#pricing">
    <CTAButton>QUERO ACESSAR AGORA</CTAButton>
  </a>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Compra 100% segura • Reembolso em até 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
