import { Table2, BookOpen, Video, Shield, Lock, Mail } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-8 md:mb-10 border border-white/20 text-center">
          <p className="text-white text-sm md:text-base">
            Menos que uma pizza, o acesso é vitalício.
          </p>
        </div>

        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Você pode continuar vivendo no aperto{' '}
            <span className="text-primary-400">ou começar</span>
            <span className="text-primary-400"> 2026 com clareza</span>
          </h2>
        </div>

  { /*      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg border border-white/20">
            <Table2 className="w-4 h-4 text-primary-400" />
            <span className="text-white text-sm font-medium">Planilha Financeira 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg border border-white/20">
            <Video className="w-4 h-4 text-primary-400" />
            <span className="text-white text-sm font-medium">Aula explicativa</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg border border-white/20">
            <BookOpen className="w-4 h-4 text-primary-400" />
            <span className="text-white text-sm font-medium">128 livros em PDF</span>
          </div>
        </div>  */} 
        
        { /*     <div className="bg-primary-500 rounded-2xl p-6 md:p-8 text-center mb-6 md:mb-8">
          <img
  src="/pvvendas-kit.png"
  alt="Kit Planilha + 128 livros + vídeo aula"
  className="w-full max-w-md mx-auto rounded-xl shadow-lg mb-6"
/>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-white/80 text-sm">Tudo isso por apenas:</span>
          </div>

          <div className="text-white/60 text-lg line-through mb-1">
            De: R$49,90
          </div> 

          <div className="flex items-baseline justify-center gap-1 mb-4 md:mb-5">
            <span className="text-2xl text-white/80">R$</span>
            <span className="text-5xl md:text-6xl font-bold text-white">14</span>
            <span className="text-2xl text-white/80">,90</span>
          </div>

          <CTAButton variant="white" checkout>
            COMPRAR AGORA
          </CTAButton>
        </div> */} 

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-gray-400 text-xs md:text-sm">
          <CTAButton checkout>
            COMPRAR AGORA
          </CTAButton>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-primary-400" />
            <span>Compra 100% segura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary-400" />
            <span>7 dias de garantia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-primary-400" />
            <span>Acesso imediato no e-mail</span>
          </div>
        </div>
      </div>
    </section>
  );
}
