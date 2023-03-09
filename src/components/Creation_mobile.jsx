import { useState } from "react"
import { dataCreationMobile } from "../data/creationMobile"


const CreationMobile = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCreationMobile)

    return (
        <>
            <h2 className="uppercase text-center text-4xl mt-12 font-light mb-8">Our creations</h2>

            <div className={`bg-cover bg-center bg-no-repeat h-36 md:h-[36rem] md:w-calc relative hover:text-black text-white transition-all ease-in-out duration-300`}>
                {cards.map(({id, image, text}) => (
                    <div key={id} >
                        <img src={image} alt="Illustration for our creation's section" />
                        <p >{text}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center">
                <button className="uppercase border-2 border-black w-1/3 py-2 mb-10 font-alata hover:cursor-pointer hover:text-White hover:bg-Black duration-1000 text-lg">see all</button>           
            </div>
        </>
    )
}

export { CreationMobile }