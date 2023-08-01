import Header from "./components/header";
import Opening from "./components/opening";
import About from "./components/about";
import MyProjects from "./components/projects";
import Email from "./components/email";
import Footer from "./components/footer";

function App() {
  return (
    <section className="contain">
      {/* <Header /> */}
      <Opening />
      <About />
      <MyProjects />
      <Email />
      <Footer />
    </section>

  )
}

export default App;