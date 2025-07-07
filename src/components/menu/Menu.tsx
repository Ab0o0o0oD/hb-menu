import React from 'react';
import { Tabs } from '@/components/ui/Tabs.tsx';

export const Menu: React.FC = () => {
  return (
    <div id="menu-section" className="min-h-screen pt-10 h-auto flex items-start justify-start flex-col text-white">
      <h1 className="text-3xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
        Our Menu:
      </h1>
      <Tabs />
    </div>
  );
};
