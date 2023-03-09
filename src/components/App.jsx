import { Header } from "./Header";
import { Section } from "./Section";
import { Footer } from "./Footer";
import { Creations } from "./Creations";

const App = () => {
  return(
    <div className="font-josephin">
      <Header />
      <main>
        <Section />
        <Creations />
      </main>
      <Footer />
    </div>
  )
}

export { App }