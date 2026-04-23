import { XCircle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    'O salário cai e some rápido',
    'Você não sabe exatamente onde gastou seu dinheiro',
    'No fim do mês, sobra pouco ou nada',
    'Vive pagando contas no limite',
    'Tenta se organizar "de cabeça", mas nunca funciona',
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Headline */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            Seja honesto consigo mesmo
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            <span className="block">Você se identifica com</span>
            <span className="block">alguma dessas situações?</span>
          </h2>
        </div>

        {/* Pain cards */}
        <div className="grid gap-3 md:gap-4 mb-10 md:mb-12">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="flex items-center gap-3 md:gap-4 bg-red-50 border border-red-200 rounded-xl p-4 md:p-5 transition-all duration-300 hover:translate-x-2 hover:border-red-300 hover:shadow-md hover:shadow-red-100 cursor-default"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
              </div>
              <p className="text-base md:text-lg text-gray-800 font-semibold">{problem}</p>
            </div>
          ))}
        </div>

       <div className="relative bg-gray-900 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
          
            <p className="text-sm md:text-xl text-white leading-relaxed font-bold">
              O problema <span className="text-primary-400 underline underline-offset-4 decoration-primary-400/50">não é</span> quanto você ganha.
              <br />
              O problema é <span className="text-primary-400 underline underline-offset-4 decoration-primary-400/50">não ter controle</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}