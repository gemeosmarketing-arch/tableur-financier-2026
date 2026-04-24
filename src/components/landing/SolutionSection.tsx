import { Target, TrendingUp, Calendar, Eye } from 'lucide-react';
import { FeedbackCarousel } from '../shared/FeedbackCarousel';

export function SolutionSection() {
  const benefits = [
  { icon: Target, text: 'Découvrez où votre argent file sans que vous le voyiez' },
  { icon: Calendar, text: "Plus d'argent chaque mois sans vous priver de ce que vous aimez" },
  { icon: TrendingUp, text: 'Sortez du rouge en moins de 30 jours' },
  { icon: Eye, text: 'Contrôle total en 5 minutes par jour' },
];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-2">
            Découvrez le{' '}
            <span className="text-primary-600">Tableur</span>
            <br />
            <span className="text-primary-600">Financier 2026</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un tableur pratique, intuitif et droit au but, créé pour ceux qui veulent:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-10 md:mb-12">
  {benefits.map(({ icon: Icon, text }) => (
    <div
      key={text}
      className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-primary-200"
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <p className="text-sm md:text-base font-semibold text-gray-900 leading-snug">{text}</p>
      </div>
    </div>
  ))}
</div>

        {/*  <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-1">
          <div className="bg-white rounded-[22px] p-6 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Passo a passo em vídeo
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Tudo isso com aula gravada explicando como utilizar
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Mesmo se você nunca usou uma planilha antes, vai conseguir usar.
            </p>
          </div>
        </div> */}

        <FeedbackCarousel variant="light" />
      </div>
    </section>
  );
}
