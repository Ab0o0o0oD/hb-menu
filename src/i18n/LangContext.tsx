import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang } from '@/i18n/translations';

type TranslationValues = (typeof translations)[Lang];

interface LangContextType {
    lang: Lang;
    t: TranslationValues;
    toggleLang: () => void;
}

const STORAGE_KEY = 'hb-lang';

const getInitialLang = (): Lang => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'nb') return stored;
    } catch {}
    return 'nb';
};

const LangContext = createContext<LangContextType>({
    lang: 'nb',
    t: translations.nb,
    toggleLang: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>(getInitialLang);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === 'nb' ? 'en' : 'nb';
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch {}
            document.documentElement.lang = next === 'nb' ? 'nb' : 'en';
            return next;
        });
    }, []);

    return (
        <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
