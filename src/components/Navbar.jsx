import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import { dataNavbar } from '../data/dataNavbar';
import { useEffect, useState } from 'react';

const Navbar = () => {
    // eslint-disable-next-line
    const [navbar, setNavbar] = useState(dataNavbar);

    // eslint-disable-next-line
    const [menu, setMenu] = useState(false);

    // eslint-disable-next-line no-lone-blocks
    {/* Empêcher le scroll lorsque le menu est ouvert*/}
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [menu])

    return (
        <>
            <div className='flex justify-between p-5 sm:px-16 md:px-32 xl:px-40 z-30'>
                <img src={logo} alt="Logo loopstudio" className='w-36 z-20'/>

                <div onClick={() => setMenu(!menu)} className="hover:cursor-pointer md:hidden z-20">
                    <img src={hamburger} alt="Logo menu hamburger" className={`${menu === true ? 'hidden' : '' }`}/>
                    <img src={close} alt="Logo menu closed" className={`${menu === false ? 'hidden' : '' }`}/>
                </div>

                <nav className={`fixed top-[-100vh] left-0 right-0 h-screen bg-Black transition-all duration-700 md:hidden ${menu === true ? 'top-[0]' : ''}`}>
                    <div className="px-5 flex flex-col justify-center items-start h-full text-Dark-Gray text-4xl uppercase">
                        {navbar.map(({id, text}) => (
                            <a className="py-5" href='/' key={id}>{text}</a>
                        ))}
                    </div>
                </nav>

                <nav className='hidden md:flex'>
                    <div className="text-White md:flex md:gap-10">
                        {navbar.map(({id, text}) => (
                            <a className="self-center hover:after:content-[''] hover:after:block hover:after:bg-White hover:after:h-[2px] hover:after:w-5 hover:after:mx-auto" href='/' key={id}>{text}</a>
                        ))}
                    </div>
                </nav>
            </div>

            
        </>
        
    )
}

export { Navbar }