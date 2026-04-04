import React from 'react';
import { Link } from 'react-router-dom';
import landing from '@/assets/landing-image.png';
import { useLang } from '@/i18n/LangContext';

export const LandingSection: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 min-h-[70svh] md:min-h-0 justify-center">
      <div className="w-full md:w-1/2 flex justify-center text-center md:text-left">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-white">
            {t.landing.welcomeTo} <span className="text-hb-gold">Hungry Birds</span>
          </h1>
          <p className="text-white/50 lg:text-lg font-normal mb-10">
            {t.landing.subtitle}
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/menu"
              className="inline-flex border border-hb-gold hover:bg-hb-gold hover:text-hb-navy justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-hb-gold transition-colors"
            >
              {t.landing.cta}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <div className="relative max-w-md mx-auto aspect-square overflow-hidden rounded-b-full -rotate-8">
          <img
            src={landing}
            alt={t.landing.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
