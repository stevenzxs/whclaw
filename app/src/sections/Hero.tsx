import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { heroConfig } from '../config';

const Hero = () => {
  if (!heroConfig.backgroundImage) return null;

  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#subhero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleLines = t('hero.title').split('\n');

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${heroConfig.backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase">
            {t('hero.tagline')}
          </span>
        </div>

        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-4 bg-[#8b6d4b] text-white font-light tracking-widest text-sm btn-hover"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce transition-opacity duration-1000 ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
