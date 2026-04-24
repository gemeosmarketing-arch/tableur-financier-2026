import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const feedbackSlides = [
  [{ src: '/feedback-carlos.webp', alt: 'Feedback do Carlos' }],
  [
    { src: '/feedback-cassia.webp', alt: 'Feedback da Cassia' },
    { src: '/feedback-gustavo.webp', alt: 'Feedback do Gustavo' },
  ],
  [{ src: '/feedback-liliane.webp', alt: 'Feedback da Liliane' }],
];

interface FeedbackCarouselProps {
  variant?: 'dark' | 'light';
}

export function FeedbackCarousel({ variant = 'dark' }: FeedbackCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % feedbackSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + feedbackSlides.length) % feedbackSlides.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const isDark = variant === 'dark';

  return (
    <div className="mt-12 md:mt-16">
      <div className="text-center mb-8 md:mb-8">
  <h3 className="text-3xl md:text-4xl font-bold">
    <span className={isDark ? 'text-white' : 'text-gray-900'}>Découvrez ceux qui ont déjà </span>
    <span className="text-primary-400">transformé</span>
    <br />
    <span className={isDark ? 'text-white' : 'text-gray-900'}>leurs finances</span>
  </h3>
</div>

      <div className="relative max-w-[420px] mx-auto">
        <div
          className="overflow-hidden rounded-xl shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {feedbackSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`w-full flex-shrink-0 min-h-[560px] flex items-center justify-center p-3 ${
                  isDark ? 'bg-gray-800/50' : 'bg-gray-100'
                }`}
              >
                <div className="flex flex-col gap-3 w-full">
                  {slide.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Proximo"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {feedbackSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-primary-500 scale-110'
                  : isDark
                  ? 'bg-white/40 hover:bg-white/60'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
