import { useEffect, useRef, useState } from 'react';
import menu from '@/menu.ts';
import type { MenuCategory, MenuItem } from '@/menu.ts';
import { useLang } from '@/i18n/LangContext';

const categoryKeys = Object.keys(menu);

const MenuItemRow = ({ item, index }: { item: MenuItem; index: number }) => (
  <div className="flex justify-between items-start py-3 border-b border-white/10 last:border-b-0">
    <div className="flex-1 pr-4">
      <div className="flex items-baseline gap-2">
        <span className="text-hb-gold font-bold text-sm">{index + 1}.</span>
        <span className="text-white font-semibold text-sm md:text-base">{item.name}</span>
      </div>
      {item.description && (
        <p className="text-white/60 text-xs md:text-sm mt-1 ml-5">{item.description}</p>
      )}
      {item.allergens && (
        <span className="text-white/40 text-xs mt-0.5 ml-5">({item.allergens})</span>
      )}
    </div>
    <span className="text-hb-gold font-bold text-sm md:text-base whitespace-nowrap">{item.price}</span>
  </div>
);

const CategoryContent = ({ category }: { category: MenuCategory }) => {
  const { t } = useLang();
  const subcategories = category.items.reduce(
    (acc, item) => {
      const sub = item.subcategory || '_default';
      if (!acc[sub]) acc[sub] = [];
      acc[sub].push(item);
      return acc;
    },
    {} as Record<string, MenuItem[]>,
  );

  const hasSubcategories = Object.keys(subcategories).some((k) => k !== '_default');

  return (
    <div className="mt-4">
      {category.subtitle && (
        <p className="text-hb-gold/80 text-sm mb-4 italic">{category.subtitle}</p>
      )}
      {hasSubcategories
        ? Object.entries(subcategories).map(([subName, items]) => (
            <div key={subName} className="mb-6">
              <h3 className="text-hb-gold text-sm font-bold uppercase tracking-wider mb-2 border-b border-hb-gold/30 pb-1">
                {subName}
              </h3>
              {items.map((item, i) => (
                <MenuItemRow key={i} item={item} index={i} />
              ))}
            </div>
          ))
        : category.items.map((item, i) => <MenuItemRow key={i} item={item} index={i} />)}
      {category.extras && (
        <div className="mt-4 p-3 bg-hb-navy-light/50 rounded-lg">
          <p className="text-hb-gold text-xs font-semibold">{t.menu.extras}</p>
          <p className="text-white/70 text-xs mt-1">{category.extras}</p>
        </div>
      )}
    </div>
  );
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(categoryKeys[0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollIndicators = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollIndicators();
    el.addEventListener('scroll', updateScrollIndicators, { passive: true });
    window.addEventListener('resize', updateScrollIndicators);
    return () => {
      el.removeEventListener('scroll', updateScrollIndicators);
      window.removeEventListener('resize', updateScrollIndicators);
    };
  }, []);

  const hasUserInteracted = useRef(false);

  const handleTabClick = (key: string) => {
    hasUserInteracted.current = true;
    setActiveTab(key);
  };

  useEffect(() => {
    if (!hasUserInteracted.current) return;
    const btn = tabRefs.current[activeTab];
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-hb-navy/90 to-transparent z-10 pointer-events-none transition-opacity duration-200 lg:hidden ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-hb-navy/90 to-transparent z-10 pointer-events-none transition-opacity duration-200 lg:hidden ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto pb-3 lg:flex-wrap lg:overflow-x-visible scrollbar-hide"
          role="tablist"
          aria-label="Menu categories"
        >
          {categoryKeys.map((key) => {
            const isActive = activeTab === key;
            const label = menu[key].title.split(' / ')[0];
            return (
              <button
                key={key}
                ref={(el) => { tabRefs.current[key] = el; }}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-hb-red text-white border-hb-red shadow-lg shadow-hb-red/30'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-hb-gold/60 hover:text-white'
                }`}
                onClick={() => handleTabClick(key)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          {menu[activeTab].title}
        </h2>
        <CategoryContent category={menu[activeTab]} />
      </div>
    </div>
  );
};
