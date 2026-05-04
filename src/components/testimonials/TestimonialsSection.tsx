import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '@/i18n/LangContext';
import herslebSkoleLogo from '@/assets/client-logo-hersleb-skole.png';
import microsoftLogo from '@/assets/client-logo-microsoft.png';
import rodeKorsLogo from '@/assets/client-logo-rode-kors.png';
import ankerStudentboligLogo from '@/assets/client-logo-anker-studentbolig-.png';

/**
 * Map of client name -> logo image URL.
 * Add entries here as logos become available. Names should match the
 * `name` field of a client item in `translations.ts`. Clients without an
 * entry will render an initial-based fallback tile.
 */
const CLIENT_LOGOS: Record<string, string> = {
    'Hersleb skole': herslebSkoleLogo,
    'Microsoft': microsoftLogo,
    'Røde Kors': rodeKorsLogo,
    'Anker Studentbolig': ankerStudentboligLogo,
};

export const TestimonialsSection = () => {
    const { t } = useLang();
    const { heading, subtitle, items, prev, next } = t.catering.clients;

    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const scrollByDirection = useCallback((direction: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;
        const firstCard = track.children[0] as HTMLElement | undefined;
        const step = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth;
        track.scrollBy({ left: step * direction, behavior: 'smooth' });
    }, []);

    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const clamped = Math.max(0, Math.min(index, items.length - 1));
        const card = track.children[clamped] as HTMLElement | undefined;
        if (card) {
            track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
        }
    }, [items.length]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let frame = 0;
        const updateState = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const center = track.scrollLeft + track.clientWidth / 2;
                let closest = 0;
                let closestDist = Infinity;
                Array.from(track.children).forEach((child, i) => {
                    const el = child as HTMLElement;
                    const childCenter = el.offsetLeft - track.offsetLeft + el.offsetWidth / 2;
                    const dist = Math.abs(childCenter - center);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = i;
                    }
                });
                setActiveIndex(closest);
                setAtStart(track.scrollLeft <= 1);
                setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
            });
        };

        updateState();
        track.addEventListener('scroll', updateState, { passive: true });
        window.addEventListener('resize', updateState);
        return () => {
            track.removeEventListener('scroll', updateState);
            window.removeEventListener('resize', updateState);
            cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        if (isPaused || items.length <= 1) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const interval = setInterval(() => {
            const track = trackRef.current;
            if (!track) return;
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollByDirection(1);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused, items.length, scrollByDirection]);

    if (items.length === 0) return null;

    return (
        <section className="py-12" aria-labelledby="clients-heading">
            <h2 id="clients-heading" className="text-3xl md:text-4xl font-bold text-hb-gold text-center mb-3">
                {heading}
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-10">{subtitle}</p>

            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocusCapture={() => setIsPaused(true)}
                onBlurCapture={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                <div
                    ref={trackRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label={heading}
                >
                    {items.map((client, idx) => {
                        const logoSrc = CLIENT_LOGOS[client.name];
                        const initials = client.name
                            .split(' ')
                            .map((w) => w[0])
                            .join('')
                            .slice(0, 2)
                            .toUpperCase();
                        return (
                          <article
                            key={`${client.name}-${idx}`}
                            className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[calc((100%-3rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-white/5 border border-white/10 hover:border-hb-gold/30 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-colors"
                            aria-roledescription="slide"
                            aria-label={`${idx + 1} / ${items.length}`}
                          >
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white border border-white/10 flex items-center justify-center mb-6 overflow-hidden">
                              {logoSrc ? (
                                <img
                                  src={logoSrc}
                                  alt={client.logoAlt}
                                  className="w-full h-full object-contain p-1"
                                  loading="lazy"
                                />
                              ) : (
                                <span className="text-2xl md:text-3xl font-bold text-hb-navy/70" aria-hidden="true">
                                  {initials}
                                </span>
                              )}
                            </div>
                            <p className="text-white/80 leading-relaxed italic">&ldquo;{client.feedback}&rdquo;</p>
                          </article>
                        );
                    })}
                </div>

                <button
                    type="button"
                    onClick={() => scrollByDirection(-1)}
                    disabled={atStart}
                    aria-label={prev}
                    className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 w-11 h-11 items-center justify-center rounded-full bg-hb-navy/80 border-2 border-hb-gold text-hb-gold hover:bg-hb-gold hover:text-hb-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors backdrop-blur-sm z-10"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => scrollByDirection(1)}
                    disabled={atEnd}
                    aria-label={next}
                    className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 w-11 h-11 items-center justify-center rounded-full bg-hb-navy/80 border-2 border-hb-gold text-hb-gold hover:bg-hb-gold hover:text-hb-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors backdrop-blur-sm z-10"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label={heading}>
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === idx}
                        aria-label={`${idx + 1} / ${items.length}`}
                        onClick={() => scrollToIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                            activeIndex === idx ? 'w-8 bg-hb-gold' : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};
