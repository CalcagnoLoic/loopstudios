import { Header } from "./Header";
import { Section } from "./Section";
import { Footer } from "./Footer";

const App = () => {
  return(
    <div className="font-josephin">
      <header className="h-screen bg-no-repeat bg-cover sm:max-md:h-fit sm:w-full">
        <Header />
      </header>
      <main>
        <Section />
      </main>
      <footer className="bg-Black p-5 md:px-32 xl:px-40 flex flex-col lg:flex-row lg:justify-between">
        <Footer />
      </footer>
    </div>
  )
}

export { App }