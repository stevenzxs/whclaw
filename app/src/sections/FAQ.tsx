import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    { id: 1, question: t('faq.questions.q1.question'), answer: t('faq.questions.q1.answer') },
    { id: 2, question: t('faq.questions.q2.question'), answer: t('faq.questions.q2.answer') },
    { id: 3, question: t('faq.questions.q3.question'), answer: t('faq.questions.q3.answer') },
    { id: 4, question: t('faq.questions.q4.question'), answer: t('faq.questions.q4.answer') },
    { id: 5, question: t('faq.questions.q5.question'), answer: t('faq.questions.q5.answer') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#fafafa]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#8b6d4b] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('faq.tag')}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {t('faq.heading')}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`w-full flex items-center justify-between px-6 lg:px-8 py-5 bg-white border border-[#e9e9e9] text-left transition-shadow duration-300 hover:shadow-[0_1px_13px_rgba(161,161,161,0.16)] ${
                  openId === faq.id ? 'border-b-0' : ''
                }`}
              >
                <span className="font-sans text-lg text-[#3c3c3b] font-light pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border border-[#c3bab0] rounded-full transition-transform ${
                    openId === faq.id ? 'rotate-45' : ''
                  }`}
                  style={{ transition: 'transform 0.7s cubic-bezier(0.55, 0.055, 0.675, 0.19)' }}
                >
                  <Plus size={14} strokeWidth={1.5} className="text-[#8b6d4b]" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 lg:px-8 py-6 bg-white border border-t-0 border-[#e9e9e9]">
                  <p className="text-[#696969] text-base font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#8b6d4b] font-medium tracking-wide hover:gap-4 transition-all duration-300"
          >
            {t('faq.ctaText')}
            <span className="text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
