import { Menu } from '@/components/menu/Menu.tsx';
import { useLang } from '@/i18n/LangContext';

export const MenuPage = () => {
  const { t } = useLang();

  return (
    <section>
      <title>{t.seo.menu.title}</title>
      <meta name="description" content={t.seo.menu.description} />
      <link rel="canonical" href="https://hungry-birds.no/menu" />
      <Menu />
    </section>
  );
};
