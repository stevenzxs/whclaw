import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { footerConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Instagram,
  Facebook,
  Twitter,
};

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!footerConfig.brandName) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-6">{footerConfig.brandName}</h3>
            <p className="text-[#696969] font-light text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              {footerConfig.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                if (!IconComponent) return null;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-[#696969] hover:text-[#8b6d4b] transition-all duration-300 hover:scale-90"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Groups */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">{t('footer.links.resources')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('#products'); }} className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.opensource')}
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('#products'); }} className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.tutorials')}
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.github')}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.docs')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">{t('footer.links.connect')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.about')}
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('#blog'); }} className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.blog')}
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#696969] text-base font-light link-hover inline-block">
                  {t('footer.links.linkedin')}
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#696969] text-base font-light link-hover inline-block">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {t('footer.newsletter.heading') && (
            <div className="lg:col-span-1">
              <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">{t('footer.newsletter.heading')}</h4>
              <p className="text-[#696969] text-sm font-light mb-4">
                {t('footer.newsletter.description')}
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={t('footer.newsletter.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#8b6d4b] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#8b6d4b] text-white text-sm font-light tracking-wider btn-hover"
                >
                  {isSubscribed ? (
                    <span>{t('footer.newsletter.success')}</span>
                  ) : (
                    <>
                      <span>{t('footer.newsletter.button')}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#333] text-xs uppercase tracking-wider font-medium">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#696969] text-xs hover:text-black transition-colors">
                {t('footer.legal.license')}
              </a>
              <a href="#" className="text-[#696969] text-xs hover:text-black transition-colors">
                {t('footer.legal.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
