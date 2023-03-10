import { CardsMobile } from "./CardsMobile"
import { CardsDesktop } from "./CardsDesktop"
import { Button } from "./Button"

const Creations = () => {

    return (
        <>
            <div className="md:flex justify-between p-5 sm:px-16 md:px-32 xl:px-40 self-baseline">
                <h2 className="uppercase text-center text-4xl mt-12 font-light mb-8">Our creations</h2>
                <div className="hidden md:block self-center md:w-1/2">
                    <Button />
                </div>
            </div>

            <div className="block md:hidden p-5 sm:px-16 md:px-32 xl:px-40">
                <CardsMobile />
            </div>
            <div className="hidden md:block p-5 sm:px-16 md:px-32 xl:px-40">
                <CardsDesktop />
            </div>

            <div className="md:hidden">
                <Button />
            </div>
        </>
    )
}

export { Creations }