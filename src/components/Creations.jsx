import { CardsMobile } from "./CardsMobile"
import { CardsDesktop } from "./CardsDesktop"
import { Button } from "./Button"

const Creations = () => {

    return (
        <>
            <div className=" p-5 sm:px-16 md:px-32 xl:px-40 md:flex md:justify-between">
                <h2 className="uppercase text-center text-4xl mt-12 font-light mb-8 self-center">Our creations</h2>
                <div className="hidden md:block md:w-1/2 self-center">
                    <Button />
                </div>
            </div>

            <div className="block md:hidden p-5 sm:px-16 md:px-32 xl:px-40">
                <CardsMobile />
            </div>
            <div className="hidden md:block p-5 sm:px-16 md:px-32 xl:px-40">
                <CardsDesktop />
            </div>

            <div className="md:hidden mb-10">
                <Button />
            </div>
        </>
    )
}

export { Creations }