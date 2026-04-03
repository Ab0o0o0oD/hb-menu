import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';

export const CtaBanner = () => {
  const { t } = useLang();

  return (
    <div className="py-12">
      <div className="rounded-2xl bg-gradient-to-r from-hb-red/20 to-hb-gold/10 border border-hb-gold/20 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t.ctaBanner.heading}
        </h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          {t.ctaBanner.subtitle}
        </p>
        <Link
          to="/menu"
          className="inline-flex border-2 border-hb-gold bg-hb-gold text-hb-navy hover:bg-transparent hover:text-hb-gold justify-center rounded-full text-lg font-semibold items-center py-4 px-10 transition-colors duration-300"
        >
          {t.ctaBanner.cta}
        </Link>
      </div>
    </div>
  );
};
