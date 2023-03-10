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
                <div className="text-White flex flex-col gap-5 lg:flex-row">
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-5 hover:after:mx-auto" href='/'>About</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-7 hover:after:mx-auto" href='/'>Careers</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-5 hover:after:mx-auto" href='/'>Event</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-8 hover:after:mx-auto" href='/'>Products</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-8 hover:after:mx-auto" href='/'>Support</a>
                </div>
            </div>
            <div className='flex flex-col py-10'>
                <div className='flex gap-5 self-center mb-5 lg:self-end lg:mb-9 relative'>
                    <div className='hover:cursor-pointer hover:border-b-2 hover:border-White hover:pb-1'>
                        <img src={facebook} alt="Logo facebook" />
                    </div>
                    <div className='hover:cursor-pointer hover:border-b-2 hover:border-White hover:pb-1'>
                        <img src={twitter} alt="Logo twitter" />
                    </div>
                    <div className='hover:cursor-pointer hover:border-b-2 hover:border-White hover:pb-1'>
                        <img src={pinterest} alt="Logo pinterest" />
                    </div>
                    <div className='hover:cursor-pointer hover:border-b-2 hover:border-White hover:pb-1'>
                        <img src={instagram} alt="Logo instagram" />
                    </div>
                </div>
                <p className='text-Very-Dark-Gray self-center'>&copy; 2021 Loopstudios. All rights reserved</p>
            </div>
        </footer>
    )
}

export { Footer }