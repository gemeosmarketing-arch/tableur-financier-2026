import { Check, X } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';

export function AudienceSection() {
  const forYou = [
    'Quer organizar sua vida financeira',
    'Cansou de não saber para onde vai seu dinheiro',
    'Busca algo simples, direto e funcional',
    'Não quer perder tempo com aplicativos complicados',
  ];

  const notForYou = [
    'Acha que controle financeiro não é importante',
    'Não quer ter mais dinheiro',
    'Prefere investir R$14,90 em uma cerveja',
  ];

  return (
    <section className="py-10 md:py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-black">Essa planilha é</span>
            <br />
            <span className="text-primary-400">para você?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-primary-200">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">É para você que:</h3>
            </div>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Não é para você que:</h3>
            </div>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <CTAButton checkout>
            COMPRAR AGORA
          </CTAButton>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 text-gray-500 text-xs">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Acesso imediato no e-mail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
