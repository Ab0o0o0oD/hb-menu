import { Link } from 'react-router-dom';
import logo from '../../assets/logooo.png';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center text-white text-2xl font-semibold gap-4">
      <img src={logo} alt="Hungry Birds logo" className="object-contain h-20 w-auto" />
    </Link>
  );
};
