import logo from '../../assets/logooo.png';
export const Logo = () => {
  return (
    <a href="/" className="flex items-center text-white text-2xl font-semibold gap-4">
      <img src={logo} alt="Hungry Birds logo" className="object-contain h-20 w-auto" />
    </a>
  );
};
