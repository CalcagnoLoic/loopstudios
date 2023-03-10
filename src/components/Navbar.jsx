import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';


const Navbar = () => {
    return (

        
        <nav className='mb-24 sm:mb-20 md:mb-28 xl:mb-32 p-5 sm:px-16 md:px-32 xl:px-40 flex justify-between pt-8'>
            <img src={logo} alt="Logo loopstudio" className='w-36'/>
            <img src={hamburger} alt="Logo menu hamburger" className='h-4 hover:cursor-pointer md:hidden'/>
            <div className='hidden md:flex '>
                <div className="text-White md:flex md:gap-10">
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-5 hover:after:mx-auto" href='/'>About</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-7 hover:after:mx-auto" href='/'>Careers</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-5 hover:after:mx-auto" href='/'>Event</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-8 hover:after:mx-auto" href='/'>Products</a>
                    <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-8 hover:after:mx-auto" href='/'>Support</a>
                </div>
            </div>
        </nav>
    )
}

export { Navbar }