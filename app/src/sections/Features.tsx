import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, ShieldCheck, Leaf, Heart } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Truck,
  ShieldCheck,
  Leaf,
  Heart,
};

const Features = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    { icon: 'ShieldCheck', titleKey: 'features.opensource.title', descKey: 'features.opensource.description' },
    { icon: 'Truck', titleKey: 'features.maintenance.title', descKey: 'features.maintenance.description' },
    { icon: 'Leaf', titleKey: 'features.community.title', descKey: 'features.community.description' },
    { icon: 'Heart', titleKey: 'features.free.title', descKey: 'features.free.description' },
  ];

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
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-[200px]"
      style={{ backgroundColor: 'rgba(139, 109, 75, 0.05)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.titleKey}
                className={`p-8 lg:p-[63px] border-b md:border-b-0 md:border-r border-[#e1e1e1] last:border-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {IconComponent && (
                  <IconComponent
                    size={36}
                    strokeWidth={1.2}
                    className="text-[#8b6d4b] mb-6"
                  />
                )}
                <h3 className="font-serif text-2xl lg:text-[36px] text-black mb-4 leading-tight">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-[#696969] text-base leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
