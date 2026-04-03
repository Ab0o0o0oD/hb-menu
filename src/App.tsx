import { useEffect } from 'react';
import './App.css';
import { Header } from '@/pages/Header';
import { Footer } from '@/components/footer/Footer.tsx';
import { LandingSection } from '@/components/landing-section/LandingSection.tsx';
import { Menu } from '@/components/menu/Menu.tsx';
import { HalfGridWithImg } from '@/components/ui/HalfGridWithImg.tsx';
import { useLang } from '@/i18n/LangContext';
import collageDishes from '@/assets/collage-dishes.png';
import background from '@/assets/background.png';

function App() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-screen bg-hb-navy/85">
        <div className="mx-auto max-w-7xl px-5 py-1 md:px-10 flex flex-col gap-5">
          <section className="text-center text-white">
            <Header />
          </section>
          <section>
            <LandingSection />
          </section>
          <section>
            <HalfGridWithImg
              image={collageDishes}
              title={t.about.title}
              description={t.about.description}
            />
          </section>
          <section>
            <Menu />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
