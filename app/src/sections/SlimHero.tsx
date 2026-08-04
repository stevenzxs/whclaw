import { useTranslation } from 'react-i18next';

const SlimHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-[#faf8f5] to-white border-b border-[#f0ebe3]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20 text-center">
        <span className="text-sm tracking-[0.2em] text-[#8b6d4b] font-medium uppercase">
          {t('feed.tag')}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-black mt-4">
          {t('feed.heading')}
        </h1>
        <p className="text-[#696969] text-lg mt-4 max-w-2xl mx-auto">
          {t('feed.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default SlimHero;
