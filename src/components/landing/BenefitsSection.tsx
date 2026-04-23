import { Check, Wallet, TrendingUp, PiggyBank, Brain, Shield } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    { icon: Wallet, text: 'Saber exatamente quanto pode gastar' },
    { icon: Shield, text: 'Parar de viver no susto no fim do mês' },
    { icon: PiggyBank, text: 'Criar uma reserva financeira' },
    { icon: Brain, text: 'Tomar decisões melhores com seu dinheiro' },
    { icon: TrendingUp, text: 'Ter clareza, controle e tranquilidade financeira' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Com a Planilha Financeira 2026, você vai:
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group flex items-center gap-4 md:gap-5 bg-gradient-to-r from-primary-50 to-white rounded-2xl p-4 md:p-5 border border-primary-100 transition-all duration-300 hover:shadow-lg hover:border-primary-300"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-primary-500 flex-shrink-0" />
                <p className="text-base md:text-lg font-medium text-gray-800">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            Tudo isso de forma <span className="text-primary-600">simples e prática</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
