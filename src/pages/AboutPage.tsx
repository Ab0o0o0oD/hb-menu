import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';
import collageDishes from '@/assets/collage-dishes.png';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.5!2d10.757!3d59.913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7be3b3af7b%3A0x0!2sStorgata%2053D%2C%200182%20Oslo!5e0!3m2!1sno!2sno!4v1700000000000!5m2!1sno!2sno';

export const AboutPage = () => {
  const { t } = useLang();

  return (
    <div className="pb-12">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-hb-gold mb-4">{t.aboutPage.heading}</h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.aboutPage.subtitle}</p>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={collageDishes}
              alt={t.aboutPage.story.imageAlt}
              className="w-full max-w-sm md:max-w-md rounded-2xl object-cover aspect-square transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-3xl font-bold text-hb-gold mb-4">{t.aboutPage.story.heading}</h2>
            <p className="text-white/60 leading-relaxed mb-4">{t.aboutPage.story.p1}</p>
            <p className="text-white/60 leading-relaxed">{t.aboutPage.story.p2}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hb-gold text-center mb-10">{t.aboutPage.values.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(['authenticity', 'quality', 'community'] as const).map((value) => (
            <div key={value} className="bg-white/5 border border-white/10 hover:border-hb-gold/30 rounded-2xl p-6 transition-colors text-center">
              <div className="w-12 h-12 bg-hb-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-hb-gold">
                {value === 'authenticity' && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )}
                {value === 'quality' && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )}
                {value === 'community' && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.aboutPage.values.items[value].title}</h3>
              <p className="text-white/60">{t.aboutPage.values.items[value].description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hb-gold text-center mb-10">{t.aboutPage.findUs.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title={t.aboutPage.findUs.heading}
              className="w-full border-0"
              style={{ height: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-hb-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-hb-gold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold">{t.aboutPage.findUs.address.label}</h3>
                <p className="text-white/60">Storgata 53 D, 0182 Oslo</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-hb-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-hb-gold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold">{t.aboutPage.findUs.phone.label}</h3>
                <a href="tel:+4792244972" className="text-hb-gold hover:text-hb-gold/80 transition-colors">+47 922 44 972</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-hb-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 text-hb-gold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold">{t.aboutPage.findUs.hours.label}</h3>
                <p className="text-white/60">{t.aboutPage.findUs.hours.weekdays}</p>
                <p className="text-white/60">{t.aboutPage.findUs.hours.weekends}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hb-gold mb-6">{t.aboutPage.cta.heading}</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-lg">{t.aboutPage.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="inline-block px-8 py-3 border-2 border-hb-gold bg-hb-gold text-hb-navy hover:bg-transparent hover:text-hb-gold rounded-full font-bold transition-all">
              {t.aboutPage.cta.menuButton}
            </Link>
            <Link to="/catering" className="inline-block px-8 py-3 border-2 border-hb-gold bg-transparent text-hb-gold hover:bg-hb-gold hover:text-hb-navy rounded-full font-bold transition-all">
              {t.aboutPage.cta.cateringButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
