import { useLang } from '@/i18n/LangContext';
import { ProtectedRoute } from '@/components/ui/ProtectedRoute';

const UMAMI_SHARE_URL = import.meta.env.VITE_UMAMI_SHARE_URL || '';

const getEmbedUrl = (url: string): string => {
  if (!url) return '';
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}embed=true`;
};

export const DashboardPage = () => {
  const { t } = useLang();

  return (
    <ProtectedRoute>
      <div className="pb-12">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-hb-gold mb-4">{t.dashboard.heading}</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.dashboard.subtitle}</p>
        </section>

        {UMAMI_SHARE_URL ? (
          <section className="py-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <iframe
                src={getEmbedUrl(UMAMI_SHARE_URL)}
                title={t.dashboard.heading}
                className="w-full border-0"
                style={{ height: '80vh', minHeight: '600px' }}
                loading="lazy"
              />
            </div>
          </section>
        ) : (
          <section className="py-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-hb-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-hb-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t.dashboard.setup.heading}</h2>
              <p className="text-white/60 mb-6">{t.dashboard.setup.description}</p>
              <div className="bg-black/40 rounded-lg p-4 text-left">
                <p className="text-white/40 text-sm font-mono mb-2"># .env</p>
                <p className="text-hb-gold text-sm font-mono">VITE_UMAMI_SHARE_URL=https://cloud.umami.is/share/...</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </ProtectedRoute>
  );
};
