import Opening from "./components/opening";
import About from "./components/about";
import Projects from "./components/projects";
import Email from "./components/email";
import Testimonies from "./components/testimonials";
import Footer from "./components/footer";

function App() {
  return (
    <section className="contain">
      <Opening />
      <hr className="border-1 border-black" />
      <About />
      <hr className="border-1 border-black my-5" />
      <Projects />
      <hr className="border-1 border-black my-5" />
      <Testimonies />
      <hr className="border-1 border-black my-5" />
      <Email />
      <Footer />
    </section>

  )
}

export default App;