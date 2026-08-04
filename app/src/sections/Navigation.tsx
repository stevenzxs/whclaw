import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { navigationConfig } from '../config';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = keyword.trim();
    navigate(q ? `/?q=${encodeURIComponent(q)}` : '/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#f0ebe3]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 h-16 px-6 md:px-12">
        <Link to="/" className="font-serif text-2xl tracking-wide text-black shrink-0">
          {navigationConfig.brandName}
        </Link>

        <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-md relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={t('nav.searchPlaceholder')}
            className="w-full py-2 pl-4 pr-10 border border-[#e5e5e5] bg-[#fafafa] focus:outline-none focus:border-[#8b6d4b] font-light text-sm transition-colors"
          />
          <button
            type="submit"
            aria-label={t('nav.searchPlaceholder')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b6d4b] hover:opacity-70 transition-opacity"
          >
            <Search size={18} />
          </button>
        </form>

        <div className="flex items-center gap-5 shrink-0">
          <Link
            to="/"
            className="hidden md:inline text-sm tracking-wide text-[#333] hover:text-[#8b6d4b] transition-colors"
          >
            {t('nav.home')}
          </Link>
          <a
            href="https://github.com/alexchen-ai"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline text-sm tracking-wide text-[#333] hover:text-[#8b6d4b] transition-colors"
          >
            GitHub
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile search */}
      <div className="sm:hidden px-6 pb-3">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={t('nav.searchPlaceholder')}
            className="w-full py-2 pl-4 pr-10 border border-[#e5e5e5] bg-[#fafafa] focus:outline-none focus:border-[#8b6d4b] font-light text-sm transition-colors"
          />
          <button
            type="submit"
            aria-label={t('nav.searchPlaceholder')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b6d4b]"
          >
            <Search size={18} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
