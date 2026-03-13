import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { aboutConfig } from '../config';

interface AboutSectionProps {
  id: string;
  image: string;
  contentBg: string;
  textColor: string;
  reverse?: boolean;
  children: React.ReactNode;
}

const AboutSection = ({ id, image, contentBg, textColor, reverse, children }: AboutSectionProps) => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`min-h-screen flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      {/* Image Side */}
      <div
        className="w-full lg:w-3/5 h-[50vh] lg:h-auto min-h-[400px] bg-cover bg-top bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content Side */}
      <div
        className="w-full lg:w-2/5 flex items-center justify-center p-8 md:p-12 lg:p-16"
        style={{ backgroundColor: contentBg, color: textColor }}
      >
        <div
          className={`max-w-md transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative">
      {/* Section 1 - About Me */}
      <AboutSection
        id="about-0"
        image={aboutConfig.sections[0]?.image || '/images/about-opensource.jpg'}
        contentBg="#1a1a2e"
        textColor="#ffffff"
        reverse={false}
      >
        <span className="inline-block mb-4 text-sm tracking-[0.2em] font-medium uppercase opacity-70">
          {t('about.section1.tag')}
        </span>
        <h2 className="font-serif text-3xl md:text-[40px] leading-tight mb-6">
          {t('about.section1.heading')}
        </h2>
        <p className="text-lg font-light leading-relaxed opacity-90 mb-6">
          {t('about.section1.paragraph1')}
        </p>
        <p className="text-lg font-light leading-relaxed opacity-90 mb-6">
          {t('about.section1.paragraph2')}
        </p>
        <p className="text-lg font-light leading-relaxed opacity-90 mb-6">
          {t('about.section1.paragraph3')}
        </p>
      </AboutSection>

      {/* Section 2 - Philosophy */}
      <AboutSection
        id="about-1"
        image={aboutConfig.sections[1]?.image || '/images/opensource-impact.jpg'}
        contentBg="#16213e"
        textColor="#ffffff"
        reverse={true}
      >
        <span className="inline-block mb-4 text-sm tracking-[0.2em] font-medium uppercase opacity-70">
          {t('about.section2.tag')}
        </span>
        <h2 className="font-serif text-3xl md:text-[40px] leading-tight mb-6">
          {t('about.section2.heading')}
        </h2>
        <p className="text-lg font-light leading-relaxed opacity-90 mb-6">
          &ldquo;{t('about.section2.quote')}&rdquo;
        </p>
        <p className="text-base font-light opacity-70">
          {t('about.section2.attribution')}
        </p>
      </AboutSection>

      {/* Vertical Navigation Dots */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => {
              const element = document.getElementById(`about-${index}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-3 h-3 rounded-full border border-white/50 bg-transparent hover:bg-white/30 transition-colors"
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
