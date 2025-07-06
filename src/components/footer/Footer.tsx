import insta from '../../assets/ig-instagram-icon.svg'
import tiktok from '../../assets/tiktok-color-icon.svg'
import whatsapp from '../../assets/wa-whatsapp-icon.svg'
import facebook from '../../assets/facebook-round-color-icon.svg'
export const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10" id="footer">

            {/*<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">*/}
            {/*    <a className="hover:text-gray-900" href="#">Home</a>*/}
            {/*    <a className="hover:text-gray-900" href="#">About</a>*/}
            {/*    <a className="hover:text-gray-900" href="#">Services</a>*/}
            {/*    <a className="hover:text-gray-900" href="#">Media</a>*/}
            {/*    <a className="hover:text-gray-900" href="#">Gallery</a>*/}
            {/*    <a className="hover:text-gray-900" href="#">Contact</a>*/}
            {/*</nav>*/}
            <div className="flex flex-col items-center space-y-5">
            <h2 className="text-xl">follow us:</h2>
            <div className="flex justify-center space-x-5">
                <a href="https://www.facebook.com/profile.php?id=100091118036830" target="_blank"
                   rel="noopener noreferrer">
                    <img src={facebook} alt={'facebook'} className="w-6 h-6"/>
                </a>
                <a href="https://tiktok.com/@hungrybird.food" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt={'instagram'} className="w-6 h-6"/>
                </a>
                <a href="https://instagram.com/hungrybird.food/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt={'tiktok'} className="w-6 h-6"/>
                </a>
                <a href="https://wa.me/+4741133081" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt={'whatsapp'} className="w-6 h-6"/>
                </a>
            </div>
            </div>
            <p className="text-center text-gray-700 font-medium">&copy; 2025 Hungry birds AS. All rights reservered.</p>
        </footer>
    )
}