import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import { Header } from '@/pages/Header';
import { Footer } from '@/components/footer/Footer.tsx';
import background from '@/assets/background.png';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-screen bg-hb-navy/85">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 flex flex-col gap-5">
          <section className="text-center text-white">
            <Header />
          </section>
          <Outlet />
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
