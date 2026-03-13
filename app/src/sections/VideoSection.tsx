import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { videoSectionConfig } from '../config';

const VideoSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:flex-row"
    >
      {/* Image Side */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${videoSectionConfig.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Side */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
        style={{ backgroundColor: 'rgba(243, 239, 239, 0.49)' }}
      >
        <div className="max-w-lg">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#8b6d4b] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {t('videoSection.tag')}
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-[54px] text-black leading-tight mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms', lineHeight: '1.2' }}
          >
            {t('videoSection.heading')}
          </h2>

          <p
            className={`text-[#696969] text-lg leading-relaxed mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {t('videoSection.paragraph1')}
          </p>

          <p
            className={`text-[#696969] text-lg leading-relaxed mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {t('videoSection.paragraph2')}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8b6d4b] text-white font-light tracking-widest text-sm btn-hover"
            >
              {t('videoSection.ctaText')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
