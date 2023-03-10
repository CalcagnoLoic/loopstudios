import interactive_mobile from '../assets/images/mobile/image-interactive.jpg';
import interactive_desktop from '../assets/images/desktop/image-interactive.jpg';

const Section = () => {
    return (
        <div className="p-5 md:px-32 xl:px-40 mt-16 xl:mt-20 flex flex-col xl:flex-row">
            <img src={interactive_mobile} alt="Illutration of interactive VR" className='md:hidden self-center'/>
            <img src={interactive_desktop} alt="Illutration of interactive VR" className='hidden md:block z-0'/>
            <div className='z-10 lg:border-2 lg:border-white lg:bg-white  xl:max-w-xl xl:pl-20 xl:pt-12 xl:top-[123%] xl:left-[50%]'>
                <h2 className='uppercase text-center text-4xl mt-8 font-light mb-4 xl:text-5xl xl:text-start'>The leader in interactive vr</h2>
                <p className='text-center text-Dark-Gray xl:text-start font-alata'>Founded in 2011, Loopstudios has been producing world class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
            
        </div>
    )
}

export { Section }