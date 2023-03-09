import { Header } from "./Header";
import { Section } from "./Section";

const App = () => {
  return(
    <div className="font-josephin">
      <header className="h-screen bg-no-repeat bg-cover sm:max-md:h-fit sm:w-full">
        <Header />
      </header>
      <main>
        <Section />
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export { App }