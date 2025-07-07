import './App.css';
import { Header } from '@/pages/Header';
import { Footer } from '@/components/footer/Footer.tsx';
import { LandingSection } from '@/components/landing-section/LandingSection.tsx';
import { Menu } from '@/components/menu/Menu.tsx';
import { HalfGridWithImg } from '@/components/ui/HalfGridWithImg.tsx';
import collageDishes from '@/assets/collage-dishes.png';

function App() {
  return (
    <div className="px-5 py-1 md:px-10 flex flex-col xl:px-100 gap-5">
      <section className={'text-center text-white'}>
        <Header />
      </section>
      <section>
        <LandingSection />
      </section>
      <section>
        <HalfGridWithImg
          image={collageDishes}
          title={'A Taste of Syria, Made with Love'}
          description={
            'We are passionate about bringing the finest flavors of Syria to your table.\n' +
            'Every dish is prepared with love, care, and a deep respect for tradition.\n' +
            'Explore our unique menu and become a part of our culinary journey.'
          }
        />
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
