import { useState, useRef } from 'react';
import { Check, Play, Shield, Zap } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
  if (videoRef.current) {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      const realProgress = current / duration;
const easedProgress = Math.pow(realProgress, 0.3);
      setProgress(easedProgress * 100);
    }
  }
};

  const handleVideoEnd = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden py-10 md:py-14">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">

          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-primary-400 text-xs md:text-sm font-semibold tracking-wide">
              +12.852 personnes ont gagné plus d'argent
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 px-2">
            <span className="text-gray-200">CE TABLEUR</span>
            <br />
            <span className="text-gray-200">VA VOUS DONNER</span>
            <br />
            <span className="text-primary-400 underline underline-offset-4 decoration-primary-400/50 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              PLUS D'ARGENT 
            </span>
            <br />
            <span className="text-white">À LA FIN DU MOIS!</span>
          </h1>

         

          {/* Video */}
          <div className="mb-6 md:mb-8 max-w-sm mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-white/5">
              <video
                ref={videoRef}
                src="https://i.imgur.com/lTACeG3.mp4"
                poster="thumb.jpeg"
                className="w-full aspect-[9/16] object-cover"
                playsInline
                onClick={() => {
  if (isPlaying) {
    videoRef.current?.pause();
    setIsPlaying(false);
  } else {
    handlePlayVideo();
  }
}}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
              />
              {!isPlaying && (
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer transition-all duration-300 hover:bg-black/30"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-500 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-primary-500/30 transition-transform duration-300 hover:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                  </div>
                  <span className="text-white text-sm md:text-base font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                    Cliquez pour activer le son
                  </span>
                </button>
              )}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/50">
                  <div
                    className="h-full bg-primary-500 transition-all"
                    style={{
                      width: `${progress}%`,
                      transitionDuration: progress < 30 ? '100ms' : progress < 60 ? '300ms' : '800ms',
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="pb-2 md:pb-4">
            <CTAButton>
              QUERO ACESSAR AGORA
            </CTAButton>
          </div>

          {/*    Trust badges 
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm">
              <Shield className="w-3.5 h-3.5 text-primary-400" />
              Compra 100% segura
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm">
              <Check className="w-3.5 h-3.5 text-primary-400" />
              7 dias de garantia
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm">
              <Zap className="w-3.5 h-3.5 text-primary-400" />
              Acesso imediato
            </span>
          </div> */}

        </div>
      </div>
    </section>
  );
}
