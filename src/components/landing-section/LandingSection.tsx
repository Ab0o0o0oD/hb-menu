import React from 'react';
import landing from '@/assets/landing-image.png';

export const LandingSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8">
      <div className="w-full md:w-1/2 flex justify-center text-center md:text-left">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-white">
            Welcome to <span className="text-hb-gold">Hungry Birds</span>
          </h1>
          <p className="text-white/50 lg:text-lg font-normal mb-10">
            Taste the Authentic Syrian Delight! Indulge in the rich flavors of juicy Shawarma, golden Crispy bites, and
            mouthwatering Falafel — all made fresh, the Syrian way. Your cravings, our passion!
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#menu-section"
              className="inline-flex border border-hb-gold hover:bg-hb-gold hover:text-hb-navy justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-hb-gold transition-colors"
            >
              Explore our menu
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <div className="relative max-w-md mx-auto aspect-square overflow-hidden rounded-b-full -rotate-8">
          <img
            src={landing}
            alt="Hungry Birds dishes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
