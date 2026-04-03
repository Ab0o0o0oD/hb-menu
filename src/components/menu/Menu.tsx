import React from 'react';
import { Tabs } from '@/components/ui/Tabs.tsx';
import { useLang } from '@/i18n/LangContext';

export const Menu: React.FC = () => {
  const { t } = useLang();

  return (
    <div id="menu-section" className="min-h-screen pt-10 h-auto flex items-start justify-start flex-col">
      <h1 className="text-3xl font-bold mb-5 text-hb-gold md:4px lg:text-start text-center">
        {t.menu.heading}
      </h1>
      <p className="text-white/60 text-sm mb-6">{t.menu.subtitle}</p>
      <Tabs />
    </div>
  );
};
