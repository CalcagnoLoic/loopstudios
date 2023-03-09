import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';

const Navbar = () => {
    return (
        <nav className='mb-24 sm:mb-2 md:mb-28 xl:mb-32 p-5 md:px-32 xl:px-40 flex justify-between pt-8'>
            <img src={logo} alt="Logo loopstudio" className='w-36'/>
            <img src={hamburger} alt="Logo menu hamburger" className='h-4 hover:cursor-pointer md:hidden'/>
            <div className='hidden md:flex '>
                <ul className='text-White md:flex md:gap-10'>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
        </nav>
    )
}

export { Navbar }