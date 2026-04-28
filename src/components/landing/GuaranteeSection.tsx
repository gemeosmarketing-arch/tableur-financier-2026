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
            GARANTIE 14 JOURS
          </h2>

          <p className="mt-3 text-gray-600 md:text-lg leading-relaxed">
            Vous avez acheté, testé et ça ne vous plaît pas ? Il suffit de demander un remboursement sous 14 jours. Nous vous rendons 100% de votre argent.
          </p>

          <div className="mt-6 flex justify-center">
            <a href="#pricing">
    <CTAButton>QUERO ACESSAR AGORA</CTAButton>
  </a>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Achat 100% sécurisé • Remboursement sous 7 jours
          </p>
        </div>
      </div>
    </section>
  );
}
