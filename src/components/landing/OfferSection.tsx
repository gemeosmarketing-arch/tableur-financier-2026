import { Table2, Video, BookOpen, Check, CreditCard, LineChart, Headphones, ChevronDown } from 'lucide-react';
import { PricingGrid } from './PricingGrid';

export function OfferSection() {
  const spreadsheetFeatures = [
    'Fonctionne sur Excel et Google Sheets',
    'Utilisable sur téléphone et ordinateur',
    'Paiement unique, SANS abonnement',
    'Accès à vie',
  ];

 /* const videoFeatures = [
    'Passo a passo completo',
    'Explicação simples e prática',
    'Mesmo para quem nunca usou planilhas',
  ]; */

  const assistenteFeatures = [
    'Posez vos questions sur l'''argent',
    'Conseils pour économiser',
    'Personnalisé pour vous',
  ];

  const bookCategories = [
    'Finanças pessoais',
    'Desenvolvimento pessoal',
    'Mentalidade',
    'Vendas e Empreendedorismo',
  ];

  {/* const scoreFeatures = [
    'Aprenda como funciona o score',
    'Estratégias para ter mais crédito',
    'Como melhorar o score',
  ]; */}

{/*  const investidorFeatures = [
    'Entenda os tipos de investimento',
    'Comece com pouco dinheiro',
    'Ganhe dinheiro sem fazer nada',
  ]; */}

  const superpackFeatures = [
    'Modèles professionnels modifiables',
    '100% prêts à l'''emploi',
    'Un gain de temps considérable',
  ];

  const planilhacasalFeatures = [
    'Finances du couple',
    'Contrôlez vos dépenses ensemble',
    'Objectifs communs',
    'Planification de l'''avenir',
  ];

  const suporteFeatures = [
    'Tire dúvidas sobre a planilha',
    'Orientação prática',
    'Atendimento direto e rápido',
  ];

  return (
    <section id="o-que-voce-recebe" className="py-10 md:py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            <span className="text-white">Voici tout ce que</span>
            <span className="text-primary-400"> <br/> vous allez recevoir:</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <Table2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">Tableur Financier 2026</h3>
            </div>
            <ul className="space-y-2 mb-5">
              {spreadsheetFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/W70ER4gGnu8"
                  title="Planilha Financeira 2026"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              <span className="text-white">Outils exclusifs <br/>du</span>
              <span className="text-primary-400"> Kit Premium:</span>
            </h2>
          </div>

      {/*    <BonusCard
            icon={Video}
            title="Aula gravada ensinando como usar"
            features={videoFeatures}
            imageSrc="/4videoaula.png"
            imageAlt="Aula gravada ensinando como usar a planilha"
            oldPrice="€35,00"
          /> */}

          <BonusCard
            icon={Table2}
            title="Super Pack 15.000 Tableurs"
            features={superpackFeatures}
            imageSrc="/superpack.png"
            imageAlt="Super Pack 15.000"
            oldPrice="€159,90"
          />

          <BonusCard
            icon={Table2}
            title="Tableur de Couple"
            features={planilhacasalFeatures}
            imageSrc="/planilhacasal.png"
            imageAlt="Tableur de Couple"
            oldPrice="€159,90"
          />

          <BonusCard
            icon={Video}
            title="Assistant Financier 24h/24"
            features={assistenteFeatures}
            imageSrc="/3assistente.png"
            imageAlt="Assistant Financier 24h/24"
            oldPrice="€49,90"
          />

          <BonusCard
            icon={BookOpen}
            title="128 Livros Best Sellers"
            features={bookCategories}
            featuresLabel="Conteúdos sobre:"
            imageSrc="/127livros.png"
            imageAlt="Coleção de 128 livros em PDF"
            oldPrice="€29,00"
          />

          

     {/*     <BonusCard
            icon={CreditCard}
            title="Como Aumentar o Score e Ter Mais Limite de Crédito"
            features={scoreFeatures}
            imageSrc="/score.png"
            imageAlt="Como Aumentar o Score e Ter Mais Limite de Crédito"
            oldPrice="€39,90"
          /> */}

          {/*    <BonusCard
            icon={LineChart}
            title="Do Zero ao Investidor – Guia de Investimentos para Iniciante"
            features={investidorFeatures}
            imageSrc="/zero.png"
            imageAlt="Do Zero ao Investidor – Guia de Investimentos para Iniciante"
            oldPrice="€39,90"
          /> */}

          <BonusCard
            icon={Headphones}
            title="Suporte Exclusivo no WhatsApp"
            features={suporteFeatures}
            imageSrc="/wpp.png"
            imageAlt="Suporte Exclusivo"
            oldPrice="€49,90"
            imageClassName="w-40 h-40 mx-auto object-contain"
            highlightText="BONUS"
          />
        </div>

        <div className="text-center mb-8 mt-1">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white inline-flex flex-col items-center gap-3">
            ESCOLHA O <span className="text-primary-400" >SEU KIT </span> <ChevronDown className="w-8 h-8 text-primary-400 animate-bounce" />
          </h2>
        </div>

        <PricingGrid />
      </div>
    </section>
  );
}

interface BonusCardProps {
  icon: React.ElementType;
  title: string;
  features: string[];
  featuresLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  oldPrice: string;
  imageClassName?: string;
  highlightText?: string;
}

function BonusCard({ icon: Icon, title, features, featuresLabel, imageSrc, imageAlt, oldPrice, imageClassName, highlightText }: BonusCardProps) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
      <div className="absolute -top-3 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        Gratuit
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
      </div>
      {featuresLabel && <p className="text-gray-400 text-sm mb-3">{featuresLabel}</p>}
      <ul className="space-y-2 mb-5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>
      {imageSrc ? (
        <div className="rounded-xl overflow-hidden">
          <img src={imageSrc} alt={imageAlt || title} className={imageClassName || "w-full"} />
        </div>
      ) : (
        <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 aspect-video flex items-center justify-center">
          <Icon className="w-12 h-12 text-white/20" />
        </div>
      )}
      <div className="mt-4 text-center">
        <span className="text-white/40 text-lg line-through">De: {oldPrice}</span>
        <span className="text-2xl md:text-3xl font-bold text-primary-400 ml-3">{highlightText || "BONUS"}</span>
      </div>
    </div>
  );
}
