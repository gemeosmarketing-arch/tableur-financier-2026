import { XCircle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    'Le salaire arrive et disparaît aussitôt',
    'Vous ne savez pas exactement où passe votre argent',
    'À la fin du mois, il ne reste presque rien',
    'Vous vivez en payant vos factures à la dernière minute',
    'Vous essayez de tout gérer "de tête", mais ça ne marche jamais',
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Headline */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            Soyez honnête avec vous-même
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            <span className="block">Vous vous reconnaissez</span>
            <span className="block">dans l'une de ces situations?</span>
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
              Le problème, <span className="text-primary-400 underline underline-offset-4 decoration-primary-400/50">ce n'est</span> pas combien vous gagnez.
              <br />
              Le problème, c'est le <span className="text-primary-400 underline underline-offset-4 decoration-primary-400/50">manque de contrôle.</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
