import { useLang } from '@/i18n/LangContext';

const icons = {
  fresh: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4.97 0-9-2.69-9-6v-2c0-3.31 4.03-6 9-6s9 2.69 9 6v2c0 3.31-4.03 6-9 6z" />
      <path d="M12 8V2" />
      <path d="M8 4c1.5 1.5 2.5 3 4 6" />
      <path d="M16 4c-1.5 1.5-2.5 3-4 6" />
    </svg>
  ),
  recipe: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 11h.01M11 15h.01M16 16a5 5 0 1 0-7.95-4" />
      <path d="M8 14a5 5 0 0 0 9 3" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  fast: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const featureKeys = ['fresh', 'recipe', 'fast'] as const;

export const WhyUsSection = () => {
  const { t } = useLang();

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-hb-gold mb-3">
          {t.whyUs.heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureKeys.map((key) => {
          const feature = t.whyUs.features[key];
          return (
            <div
              key={key}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-hb-gold/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-hb-gold/10 flex items-center justify-center text-hb-gold mb-5">
                {icons[key]}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
