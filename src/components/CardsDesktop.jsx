import { useState } from "react"
import { dataCreationDesktop } from "../data/creationMobile"


const CardsDesktop = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCreationDesktop)

    return (
        <>
            <section className="grid grid-cols-4 gap-x-5 xl:gap-5 place-content-center">
                {cards.map(({id, image, text}) => (
                    <article key={id} className="relative hover:cursor-pointer hover:text-Black hover:opacity-60 transition-all ease-in-out duration-700">
                        <img src={image} alt="Illustration for our creation's section" className="mb-5"/>
                        <h3 className="absolute bottom-0 pl-5 lg:pl-8 pb-8 lg:pb-14 uppercase text-White w-5/6 lg:w-4/5 xl:w-4/7 text-lg lg:text-3xl font-light">{text}</h3>
                    </article>
                ))}
            </section>
        </>
    )
}

export { CardsDesktop }