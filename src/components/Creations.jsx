import { CardsMobile } from "./CardsMobile"
import { CardsDesktop } from "./CardsDesktop"

const Creations = () => {

    return (
        <>
            <h2 className="uppercase text-center text-4xl mt-12 font-light mb-8">Our creations</h2>

            <div className="md:hidden">
                <CardsMobile />
            </div>
            <div className="hidden md:grid">
                <CardsDesktop />
            </div>

            <div className="flex justify-center items-center">
                <button className="uppercase border-2 border-black w-1/3 py-2 mb-10 font-alata hover:cursor-pointer hover:text-White hover:bg-Black duration-1000 text-lg">see all</button>           
            </div>
        </>
    )
}

export { Creations }