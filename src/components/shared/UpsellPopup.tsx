// UpsellPopup.tsx
// Coloque este arquivo em: src/components/shared/UpsellPopup.tsx

import { X, Check, Gift, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface UpsellPopupProps {
  isOpen: boolean;
  onClose: () => void;
  premiumCheckoutUrl: string;
  basicCheckoutUrl: string;
}

export function UpsellPopup({ isOpen, onClose, premiumCheckoutUrl, basicCheckoutUrl }: UpsellPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isVisible) return null;

  const handleAccept = () => {
    window.location.href = premiumCheckoutUrl;
  };

  const handleDecline = () => {
    window.location.href = basicCheckoutUrl;
  };

  const premiumItems = [
    'Planilha Financeira 2026',
    'Super Pack 15.000 Planilhas',
    'Planilha de Casal',
    'Suporte Exclusivo no WhatsApp',
    '128 Livros Best Sellers',
    'Assistente Financeiro 24hrs',
    'Guia p/ Aumentar Score/Limite',
    'Guia de Como Investir',
    'Acesso Vitalício',
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}
      
    >
      <div
        className={`relative w-full max-w-md bg-[#0B1120] rounded-3xl overflow-hidden transition-all duration-500 ${
          isAnimating ? 'scale-100 translate-y-0' : 'scale-90 translate-y-8'
        }`}
        style={{ maxHeight: '90vh', overflowY: 'auto', border: '2px solid rgba(52,211,153,0.3)' }}
      >
        {/* Glow Effect Top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />

        {/* Close Button 
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <X size={16} className="text-gray-400" />
        </button> */}

        <div className="relative px-6 pt-8 pb-6">
          
          {/* Badge */}
<div className="flex justify-center mb-5">
  <div
    className="inline-flex items-center justify-center gap-4 px-5 py-3 rounded-full text-sm font-bold text-center"
    style={{
      background: '#34d399',
      color: '#0B1120',
    }}
  >
    <Gift size={25} strokeWidth={1.5} />
    <span>ESPERE! VOCÊ GANHOU <br/> UM DESCONTO</span>
  </div>
</div>

          

          {/* Title */}
          <h2 className="text-center text-2xl font-black text-white mb-2 leading-tight">
            Você acaba de ganhar um Super Desconto no<span style={{ color: '#34d399' }}> <br/> Kit Premium!</span> 
      
          </h2>

          <p className="text-center text-gray-400 text-sm mb-6">
            Essa oferta aparece apenas uma vez. Se fechar, o desconto desaparece pra sempre.
          </p>

          {/* Price Card */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.08), rgba(52,211,153,0.02))', border: '1px solid rgba(52,211,153,0.15)' }}
          >
{/* Premium Image */}
          <div className="flex justify-center mb-5">
            <img
              src="/bannerpvpremium.png"
              alt="Kit Premium"
              className="w-full max-w-[280px] rounded-xl"
            />
          </div>
            
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-gray-500 line-through text-lg">R$19,90</span>
              <span className="text-4xl font-black" style={{ color: '#34d399' }}>
                R$14,90
              </span>
            </div>

            <div className="flex justify-center mb-4">
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: 'rgba(239,68,68,0.15)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                🔥 DESCONTO DE 25%
              </span>
            </div>

            {/* Items List */}
            <div className="space-y-2">
              {premiumItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm"
                  style={{
                    animation: isAnimating ? `fadeInItem 0.3s ease ${0.3 + index * 0.05}s both` : 'none',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(52,211,153,0.15)' }}
                  >
                    <Check size={12} style={{ color: '#34d399' }} />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Accept */}
          <button
            onClick={handleAccept}
            className="w-full py-4 rounded-2xl font-extrabold text-base uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 mb-3 relative overflow-hidden"
            style={{
              backgroundColor: '#34d399',
              color: '#0B1120',
              boxShadow: '0 8px 30px rgba(52,211,153,0.3)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              SIM! QUERO O KIT PREMIUM
              <ArrowRight size={18} />
            </span>
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                animation: 'shimmerBtn 3s infinite',
              }}
            />
          </button>

          {/* Decline */}
          <button
            onClick={handleDecline}
            className="w-full text-center text-gray-500 text-xs underline transition-colors hover:text-gray-400 py-2"
          >
            NÃO! QUERO O KIT BÁSICO
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInItem {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerBtn {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}