import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';
import shawarma from '@/assets/shawarmarull.jpg';
import falafel from '@/assets/falafel-rull.jpeg';
import crispy from '@/assets/cripsy-rull.png';

const dishes = [
  { image: shawarma, key: 'shawarma' as const },
  { image: falafel, key: 'falafel' as const },
  { image: crispy, key: 'crispy' as const },
];

export const SpecialtiesSection = () => {
  const { t } = useLang();

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-hb-gold mb-3">
          {t.specialties.heading}
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          {t.specialties.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => {
          const info = t.specialties.items[dish.key];
          return (
            <Link
              key={dish.key}
              to="/menu"
              className="group relative overflow-hidden rounded-2xl bg-hb-navy-light/40 border border-white/10 hover:border-hb-gold/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={info.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{info.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{info.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
