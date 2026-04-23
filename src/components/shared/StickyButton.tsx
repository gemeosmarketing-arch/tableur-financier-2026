import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/gp7byk3';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples(prev => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    const params = window.location.search;
    const joiner = CHECKOUT_URL.includes('?') ? '&' : '?';
    window.location.href = CHECKOUT_URL + (params ? joiner + params.slice(1) : '');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-gray-900/95 via-gray-900/90 to-transparent backdrop-blur-sm md:hidden">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm font-medium">
            R$ 14,90 - Acesso Imediato
          </span>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-gray-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={handleClick}
          className="btn-click-effect w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white font-bold py-4 px-8 text-base rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/30 select-none"
        >
          {ripples.map(ripple => (
            <span
              key={ripple.id}
              className="btn-ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                background: 'rgba(255, 255, 255, 0.35)',
              }}
            />
          ))}
          COMPRAR AGORA
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
