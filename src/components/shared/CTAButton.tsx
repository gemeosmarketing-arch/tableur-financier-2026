import { useState } from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'normal' | 'large';
  className?: string;
  pulse?: boolean;
  scrollTo?: string;
  checkout?: boolean;
  checkoutUrl?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const rippleColors: Record<string, string> = {
  primary: 'rgba(255, 255, 255, 0.35)',
  secondary: 'rgba(255, 255, 255, 0.35)',
  white: 'rgba(16, 185, 129, 0.25)',
};

export function CTAButton({
  children,
  variant = 'primary',
  size = 'normal',
  className = '',
  pulse = true,
  scrollTo = 'o-que-voce-recebe',
  checkout = false,
  checkoutUrl,
}: CTAButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer btn-click-effect select-none relative overflow-hidden';

  const variantStyles = {
    primary: 'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white',
    secondary: 'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white',
    white: 'bg-white hover:bg-gray-150 active:bg-gray-300 text-gray-900',
  };

  const sizeStyles = {
    normal: 'px-8 py-4 text-base md:px-10 md:py-5 md:text-lg',
    large: 'px-10 py-5 text-lg md:px-12 md:py-6 md:text-xl',
  };

  const pulseClass = pulse ? 'animate-subtle-pulse' : '';

  const createRipple = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const buildCheckoutUrl = () => {
    if (!checkoutUrl) return '#';

    const params = window.location.search;
    const joiner = checkoutUrl.includes('?') ? '&' : '?';

    return checkoutUrl + (params ? joiner + params.slice(1) : '');
  };

  const handleCheckoutClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    createRipple(e);

    try {
      if (
        typeof window !== 'undefined' &&
        typeof (window as any).fbq === 'function'
      ) {
        (window as any).fbq('track', 'InitiateCheckout');
      }
    } catch (error) {
      console.error('Erro ao disparar InitiateCheckout:', error);
    }

    const url = buildCheckoutUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScrollClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    createRipple(e);

    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (checkout) {
    return (
      <a
        href={buildCheckoutUrl()}
        onClick={handleCheckoutClick}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${pulseClass} ${className}`}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="btn-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              background: rippleColors[variant],
            }}
          />
        ))}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleScrollClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${pulseClass} ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="btn-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            background: rippleColors[variant],
          }}
        />
      ))}
      {children}
    </button>
  );
}