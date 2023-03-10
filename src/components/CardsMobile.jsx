import { useState } from "react"
import { dataCreationMobile } from "../data/creationMobile"


const CardsMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCreationMobile)

    return (
        <>
            <section>
                {cards.map(({id, image, text}) => (
                    <article key={id} className="relative hover:cursor-pointer hover:text-Black hover:opacity-60 transition-all ease-in-out duration-700">
                        <img src={image} alt="Illustration for our creation's section" className="mb-5"/>
                        <div className="h-full absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black to-white brightness-[75%] opacity-20"></div>
                        <h3 className="absolute bottom-0 pl-5 pb-5 uppercase text-White text-2xl w-2/3">{text}</h3>
                        
                    </article>
                ))}
            </section>
        </>
    )
}

export { CardsMobile }