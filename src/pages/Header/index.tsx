import { useState } from 'react';
import { Logo } from '@/pages/Header/Logo.tsx';
import { getHeaderData } from '@/pages/Navigation/menuData.tsx';
import { HeaderLink } from '@/pages/Navigation/HeaderLink.tsx';
import { useLang } from '@/i18n/LangContext';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, toggleLang } = useLang();
  const headerData = getHeaderData(t);

  return (
    <div>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
        <Logo />
        <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-hb-gold px-3 py-1 text-sm font-semibold text-hb-gold hover:bg-hb-gold hover:text-hb-navy transition-colors"
            aria-label="Switch language"
          >
            {t.langToggle}
          </button>
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 py-6 bg-hb-navy/95 rounded-b-xl mt-2">
          {headerData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg font-medium text-white/70 hover:text-hb-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};
