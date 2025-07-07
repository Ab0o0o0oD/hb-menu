import { Logo } from '@/pages/Header/Logo.tsx';
import { headerData } from '@/pages/Navigation/menuData.tsx';
import { HeaderLink } from '@/pages/Navigation/HeaderLink.tsx';

export const Header = () => {
  return (
    <div className="">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
        <Logo />
        <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};
