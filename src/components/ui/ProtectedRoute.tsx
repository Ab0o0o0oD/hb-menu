import { useState, type FC, type ReactNode } from 'react';
import { useLang } from '@/i18n/LangContext';

const DASHBOARD_PASSWORD = import.meta.env.VITE_DASHBOARD_PASSWORD || 'hungrybirds2026';
const SESSION_KEY = 'hb_dashboard_auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { t } = useLang();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center py-24">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-hb-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-hb-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-hb-gold">{t.dashboard.login.heading}</h1>
          <p className="text-white/60 mt-2">{t.dashboard.login.subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder={t.dashboard.login.placeholder}
              className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">{t.dashboard.login.error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 border-2 border-hb-gold bg-hb-gold text-hb-navy hover:bg-transparent hover:text-hb-gold rounded-full font-bold transition-all"
          >
            {t.dashboard.login.submit}
          </button>
        </form>
      </div>
    </div>
  );
};
