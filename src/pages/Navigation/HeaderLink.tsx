'use client';
import { useState } from 'react';
import type { HeaderItem } from '@/types/menu.ts';

export const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a
        href={item.href}
        className={
          'text-xl flex font-medium duration-300 text-black/50 dark:text-white/50 hover:text-primary dark:hover:text-primary'
        }
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </a>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => (
            <a
              key={index}
              href={subItem.href}
              className={'block px-4 py-2 text-black dark:text-white hover:bg-primary'}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
