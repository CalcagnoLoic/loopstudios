import { Navbar } from "./Navbar"

const Header = () => {
    return (
        <header className="h-screen bg-no-repeat bg-cover sm:h-[600px] sm:w-full">
            <Navbar />
            <div className="p-5 sm:px-16 md:px-32 xl:px-40 flex justify-center md:justify-start">
                <h1 className="uppercase text-White border-2 border-White p-5 text-4xl max-w-xs font-light md:text-6xl md:max-w-lg xl:text-7xl xl:max-w-xl">Immersive experiences that deliver</h1>
            </div>
        </header>
    )
}

export { Header }