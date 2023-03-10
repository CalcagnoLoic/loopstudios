import interactive_mobile from '../assets/images/mobile/image-interactive.jpg';
import interactive_desktop from '../assets/images/desktop/image-interactive.jpg';

const Section = () => {
    return (
        <div className="p-5 mt-20 xl:my-20 md:px-32 xl:px-40 flex flex-col xl:flex-row justify-center xl:justify-start items-center xl:p-0 xl:relative">
            <img src={interactive_mobile} alt="Illutration of interactive VR" className='xl:hidden'/>
            <img src={interactive_desktop} alt="Illutration of interactive VR" className='hidden xl:block xl:w-4/6 xl:relative'/>
            <div className='px-5 xl:p-0 xl:pt-20 xl:pr-40 xl:pl-20 xl:absolute bottom-0 right-0 xl:bg-white xl:w-1/2 xl:text-left'>
                <h2 className='uppercase text-center text-4xl mt-8 font-light mb-4 xl:text-5xl xl:text-start'>The leader in interactive vr</h2>
                <p className='text-center text-Dark-Gray xl:text-start font-alata '>Founded in 2011, Loopstudios has been producing world class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
            
        </div>
    )
}

export { Section }