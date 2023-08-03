import Header from "./components/header";
import Opening from "./components/opening";
import About from "./components/about";
import Projects from "./components/projects-test";
import Email from "./components/email";
import Footer from "./components/footer";

function App() {
  return (
    <section className="contain">
      {/* <Header /> */}
      <Opening />
      <hr className="border-1 border-black" />
      <About />
      <hr className="border-1 border-black my-5" />
      <Projects />
      <hr className="border-1 border-black my-5" />
      <Email />
      <Footer />
    </section>

  )
}

export default App;