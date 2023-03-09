import { useState } from "react"
import { dataCreationDesktop } from "../data/creationMobile"


const CreationDesktop = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCreationDesktop)

    return (
        <>
            <h2 className="uppercase text-center text-4xl mt-12 font-light mb-8 lg:mt-24 md:text-start">Our creations</h2>

            <div className="grid grid-cols-4 gap-3">
                {cards.map(({id, image, text}) => (
                    <div key={id} className="relative hover:cursor-pointer hover:text-Black">
                        <img src={image} alt="Illustration for our creation's section" className="relative mb-5 brightness-75"/>
                        <p className="uppercase leading-6 font-light text-2xl text-White w-36 absolute z-10 top-80 left-8">{text}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center">
                <button className="uppercase border-2 border-black w-1/3 py-2 mb-10 font-alata hover:cursor-pointer hover:text-White hover:bg-Black duration-1000 text-lg">see all</button>           
            </div>
        </>
    )
}

export { CreationDesktop }