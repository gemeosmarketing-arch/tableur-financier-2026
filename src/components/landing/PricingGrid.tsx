import { Check, Lock, Shield, Mail, Star, AlertTriangle } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';
import { useState } from 'react';
import { UpsellPopup } from '../shared/UpsellPopup';
import { MasterUpsellPopup } from '../shared/MasterUpsellPopup';

const itemPrices: Record<string, string> = {
  'Tableur Financier 2026': '97€',
  'Super Pack 15 000 Tableurs': '159€',
  'Tableur de Couple': '59€',
  'Support Exclusif sur WhatsApp': '49€',
  '128 Livres Best-Sellers': '29€',
  'Assistant Financier 24h/24': '49€',
  '(BONUS) Guide pour Améliorer votre Score de Crédit': '39€',
  '(BONUS) Guide Comment Investir': '39€',
  'Accès à vie': '15€',
};

const plans = [
  /*
  {
    name: 'Kit Básico',
    price: 'R$9,90',
    fullPrice: 'R$112',
    cashPrice: 'R$9,90',
    image: "/kit-basico.png",
    checkoutUrl: "https://comprar.planilhafinanceira2026.com.br/checkout/v2/Mwi44SA8vzS96s6Mw7VO",
    highlight: false,
    badge: null,
    items: [
      'Planilha Financeira 2026',
      'Acesso Vitalício',
    ],
    notIncluded: [
      'Não inclui Super Pack 15.000 Planilhas',
      'Não inclui Planilha de Casal',
      'Não inclui Suporte no WhatsApp',
      'Não inclui Guia p/ Aumentar Score/Limite',
      'Não inclui Guia de Como Investir',
    ],
  },
  */
  {
    name: 'Kit Basique',
    price: '9,90€',
    fullPrice: '254€',
    cashPrice: '9,90€',
    image: "/attbannerbasico.png",
    checkoutUrl: "https://pay.kirvano.com/800b8b82-6c72-4491-a039-3ad24efab39f",
    highlight: false,
    badge: null,
    items: [
      'Tableur Financier 2026',
      'Assistant Financier 24h/24',
      'Accès à vie',
    ],
    notIncluded: [
      'Ne comprend pas le Super Pack 15.000 Tableurs',
      'Ne comprend pas le Tableur de Couple',
      'Ne comprend pas le Support WhatsApp',
      'Ne comprend pas les 128 Livres Best-Sellers',
      'Ne comprend pas le Guide pour Améliorer votre Score de Crédit',
      'Ne comprend pas le Guide Comment Investir',
    ],
  },
  {
    name: 'Kit Premium',
    price: '19,90€',
    fullPrice: '511€',
    cashPrice: '19,90€',
    image: "/bannerpvpremium.png",
    checkoutUrl: "https://pay.kirvano.com/2b381e57-1500-4eec-906c-78482a4a15b6",
    highlight: true,
    badge: 'Le Plus Vendu',
    items: [
    'Tableur Financier 2026',
    'Super Pack 15 000 Tableurs',
    'Tableur de Couple',
    'Support Exclusif sur WhatsApp',
    '128 Livres Best-Sellers',
    'Assistant Financier 24h/24 ',
    '(BONUS) Guide pour Améliorer votre Score de Crédit',
    '(BONUS) Guide Comment Investir',
    'Accès à vie',
    ],
    notIncluded: [],
  },
];

export function PricingGrid() {

  const [showUpsell, setShowUpsell] = useState(false);
  const [showMasterUpsell, setShowMasterUpsell] = useState(false);
  
  return (
    <section id="pricing" className="py-15">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-6 md:p-8 text-center overflow-hidden flex flex-col ${
            plan.highlight
              ? 'bg-gradient-to-b from-primary-400 to-primary-600 ring-2 ring-primary-300 shadow-2xl shadow-primary-500/20 scale-[1.02]'
              : 'bg-primary-500/80'
          }`}
        >
          {plan.badge && (
            <div className="absolute top-0 left-0 right-0">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-gray-900 text-xs font-extrabold px-5 py-2 rounded-b-xl uppercase tracking-wide shadow-lg shadow-yellow-400/20">
                <Star className="w-3.5 h-3.5" fill="currentColor" />
                {plan.badge}
              </div>
            </div>
          )}

          <div className="relative z-10 flex flex-col flex-1">
            <h3 className={`text-3xl md:text-4xl font-bold text-white ${plan.badge ? 'mt-6' : 'mt-1'} mb-5`}>
              {plan.name}
            </h3>

            {plan.image && (
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full rounded-xl mb-6 opacity-80"
              />
            )}

            <ul className="space-y-2.5 mb-4 text-left flex-1">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-white/90 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm flex-1">{item}</span>
                  {itemPrices[item] && (
                    <span className="text-white/50 text-xs line-through">{itemPrices[item]}</span>
                  )}
                </li>
              ))}
            </ul>

            {plan.notIncluded.length > 0 && (
              <ul className="space-y-2.5 mb-6 text-left">
                {plan.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
<span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div>
              <div className="text-white/50 text-base line-through mb-0.5">
                De: {plan.fullPrice}
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
              </div>

              <div className="inline-block bg-white/20 text-white font-bold text-sm px-4 py-1.5 rounded-full mb-6">
                Paiement Unique
              </div>
{plan.name === 'Kit Básico' ? (
  <div onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowUpsell(true);
  }}>
    <CTAButton
      variant="white"
      className="w-full"
    >
      QUERO O BÁSICO
    </CTAButton>
  </div>
) : (
  <div onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMasterUpsell(true);
  }}>
    <CTAButton
      variant="white"
      className="w-full"
    >
      QUERO O KIT PREMIUM
    </CTAButton>
  </div>
)}

              <div className="flex flex-wrap justify-center gap-3 mt-4 text-white/60 text-[11px]">
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />a
                  <span>Achat sécurisé</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Garantie 14 jours</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Sans abonnement. Accès immédiat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      ))}
      <UpsellPopup
  isOpen={showUpsell}
  onClose={() => setShowUpsell(false)}
  premiumCheckoutUrl="https://pay.kirvano.com/ba9df2be-96b6-4d4c-8f77-ec35be18af48"
  basicCheckoutUrl="https://pay.kirvano.com/800b8b82-6c72-4491-a039-3ad24efab39f"
/>
      <MasterUpsellPopup
  isOpen={showMasterUpsell}
  onClose={() => setShowMasterUpsell(false)}
  masterCheckoutUrl="https://pay.kirvano.com/f16c2cdd-ea57-4bbb-ac3a-4156caf0bf72"
  premiumCheckoutUrl="https://pay.kirvano.com/2b381e57-1500-4eec-906c-78482a4a15b6"
/>
    </div>
      </section>
  );
}
