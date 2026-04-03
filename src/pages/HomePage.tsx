import { LandingSection } from '@/components/landing-section/LandingSection.tsx';
import { HalfGridWithImg } from '@/components/ui/HalfGridWithImg.tsx';
import { SpecialtiesSection } from '@/components/specialties/SpecialtiesSection.tsx';
import { WhyUsSection } from '@/components/why-us/WhyUsSection.tsx';
import { CtaBanner } from '@/components/cta-banner/CtaBanner.tsx';
import { useLang } from '@/i18n/LangContext';
import collageDishes from '@/assets/collage-dishes.png';

export const HomePage = () => {
  const { t } = useLang();

  return (
    <>
      <section>
        <LandingSection />
      </section>
      <section>
        <SpecialtiesSection />
      </section>
      <section>
        <HalfGridWithImg
          image={collageDishes}
          title={t.about.title}
          description={t.about.description}
        />
      </section>
      <section>
        <WhyUsSection />
      </section>
      <section>
        <CtaBanner />
      </section>
    </>
  );
};
