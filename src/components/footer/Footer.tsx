import insta from '../../assets/ig-instagram-icon.svg';
import tiktok from '../../assets/tiktok-color-icon.svg';
import call from '../../assets/accept-call-icon.svg';
import facebook from '../../assets/facebook-round-color-icon.svg';
export const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10" id="footer">
      <div className="flex flex-col items-center space-y-2 text-white/70">
        <p className="text-sm">Oslo Storgate 53 D</p>
        <a href="tel:+4792244972" className="text-hb-gold hover:text-hb-gold/80 text-sm font-semibold">
          +47 922 44 972
        </a>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-xl text-white">Follow us:</h2>
        <div className="flex justify-center space-x-5">
          <a href="https://www.facebook.com/profile.php?id=100091118036830" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@hungry.birds.rest3" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/hung.rybirdsrestaurant/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="tel:+4792244972" target="_blank" rel="noopener noreferrer">
            <img src={call} alt="Call us" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="text-center text-white/40 font-medium">&copy; 2026 Hungry Birds AS. All rights reserved.</p>
    </footer>
  );
};
