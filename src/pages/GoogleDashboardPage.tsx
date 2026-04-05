import { useLang } from '@/i18n/LangContext';
import { ProtectedRoute } from '@/components/ui/ProtectedRoute';

const LOOKER_STUDIO_URL =
  'https://lookerstudio.google.com/embed/reporting/15c2c974-0c53-4029-ab96-11b8ad2a268f/page/kIV1C';

export const GoogleDashboardPage = () => {
  const { t } = useLang();

  return (
    <ProtectedRoute>
      <div className="pb-12">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-hb-gold mb-4">{t.googleDashboard.heading}</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.googleDashboard.subtitle}</p>
        </section>

        <section className="py-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src={LOOKER_STUDIO_URL}
              title={t.googleDashboard.heading}
              className="w-full border-0"
              style={{ height: '2125px' }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};
