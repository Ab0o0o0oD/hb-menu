import type { HeaderItem } from '@/types/menu.ts';
import type { translations } from '@/i18n/translations';

type TranslationValues = (typeof translations)[keyof typeof translations];

export const getHeaderData = (t: TranslationValues): HeaderItem[] => [
  { label: t.nav.home, href: '#home-section' },
  { label: t.nav.menu, href: '#menu-section' },
  { label: t.nav.aboutUs, href: '#footer' },
];
