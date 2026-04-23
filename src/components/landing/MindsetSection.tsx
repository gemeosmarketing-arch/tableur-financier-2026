import { Lightbulb, Check } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';

export function MindsetSection() {
  const principles = [
    'Organização financeira não precisa ser difícil',
    'Você não precisa de aplicativos confusos',
    'Nem de conhecimentos avançados em finanças',
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-2 md:p-4">
          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary-100 rounded-xl mb-5 md:mb-6 mx-auto">
            <Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-primary-600" />
          </div>

         {/* <div className="text-center mb-6 md:mb-8"> 
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Muitas pessoas acreditam que só vão ter uma vida financeira tranquila quando{' '}
              <span className="font-semibold text-gray-900">ganharem mais dinheiro</span>.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A verdade é simples: quem não controla o que entra e sai{' '}
              <span className="font-semibold text-primary-600">sempre vai viver no aperto</span>,
              independentemente do salário.
            </p>
          </div> */}

          <div className="h-px bg-gray-200 mb-6 md:mb-8" />

          <div className="space-y-3 mb-6 md:mb-8">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 bg-primary-50 rounded-xl p-3 md:p-4"
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-primary-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">{principle}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-primary-50 rounded-xl p-5 md:p-6">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              Você precisa de um{' '}
              <span className="text-primary-600">método simples, visual e funcional</span>.
            </p>
          </div>
        </div>

        <div className="text-center mt-6 md:mt-8">
          <CTAButton>
            QUERO ACESSAR AGORA
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
