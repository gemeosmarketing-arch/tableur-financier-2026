import { Check } from 'lucide-react';

export function ProofSection() {
  const features = [
    'Controle de entradas e saídas',
    'Gastos fixos e variáveis',
    'Reservas e investimentos',
    'Visual claro e organizado',
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Veja como a planilha funciona na prática
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-2 md:p-4">
            <img
              src="/print_planilha.png"
              alt="Screenshot da Planilha Financeira 2026"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="p-5 md:p-8 bg-gradient-to-r from-primary-50 to-white">
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-10">
          <p className="text-lg md:text-xl text-gray-600">
            <span className="font-bold text-gray-900">Nada de teoria.</span>{' '}
            Você vê, preenche e entende.
          </p>
        </div>
      </div>
    </section>
  );
}
