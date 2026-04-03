import React from 'react';
import { Tabs } from '@/components/ui/Tabs.tsx';

export const Menu: React.FC = () => {
  return (
    <div id="menu-section" className="min-h-screen pt-10 h-auto flex items-start justify-start flex-col">
      <h1 className="text-3xl font-bold mb-5 text-hb-gold md:4px lg:text-start text-center">
        Restaurant Meny
      </h1>
      <p className="text-white/60 text-sm mb-6">En smak du aldri glemmer</p>
      <Tabs />
    </div>
  );
};
