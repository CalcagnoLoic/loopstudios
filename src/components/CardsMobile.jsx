import { useState } from "react"
import { dataCreationMobile } from "../data/creationMobile"


const CardsMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCreationMobile)

    return (
        <>
            <section className="">
                {cards.map(({id, image, text}) => (
                    <article key={id} className="relative">
                        <div>
                            <img src={image} alt="Illustration for our creation's section" className="pb-5"/>
                        </div>
                        <p className="absolute bottom-0 pl-5 pb-5">{text}</p>
                    </article>
                ))}
            </section>
        </>
    )
}

export { CardsMobile }