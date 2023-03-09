import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import twitter from '../assets/images/icon-twitter.svg';

const Footer = () => {
    return (
        <footer className="bg-Black p-5 md:px-32 xl:px-40 flex flex-col lg:flex-row lg:justify-between">
            <div className='self-center mb-5 lg:mb-0'>
                <img src={logo} alt="Logo Loopstudio" className='py-10 lg:mb-8 lg:py-0 '/>
                <ul className="text-White flex flex-col gap-5 lg:flex-row">
                    <li className='self-center'>About</li>
                    <li className='self-center'>Careers</li>
                    <li className='self-center'>Event</li>
                    <li className='self-center'>Products</li>
                    <li className='self-center'>Support</li>
                </ul>
            </div>
            <div className='flex flex-col py-10'>
                <div className='flex gap-5 self-center mb-5 lg:self-end lg:mb-9'>
                    <img src={facebook} alt="Logo facebook" />
                    <img src={twitter} alt="Logo twitter" />
                    <img src={pinterest} alt="Logo pinterest" />
                    <img src={instagram} alt="Logo instagram" />
                </div>
                <p className='text-Very-Dark-Gray self-center'>&copy; 2021 Loopstudios. All rights reserved</p>
            </div>
        </footer>
    )
}

export { Footer }