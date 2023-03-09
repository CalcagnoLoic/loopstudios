import { Header } from "./Header";
import { Section } from "./Section";
import { Footer } from "./Footer";
import { CreationMobile } from "./Creation_mobile";
import { CreationDesktop } from "./CreationDesktop";

const App = () => {
  return(
    <div className="font-josephin">
      <header className="h-screen bg-no-repeat bg-cover sm:h-[600px] sm:w-full">
        <Header />
      </header>
      <main>
        <Section />
        <div className="md:hidden p-5 sm:px-16 md:px-32 xl:px-40 ">
          <CreationMobile />
        </div>
        <div className="hidden md:grid sm:px-16 md:px-32 xl:px-40">
          <CreationDesktop />
        </div>
      </main>
      <footer className="bg-Black p-5 md:px-32 xl:px-40 flex flex-col lg:flex-row lg:justify-between">
        <Footer />
      </footer>
    </div>
  )
}

export { App }