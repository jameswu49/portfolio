import React from 'react';
import Opening from './components/opening';
import Header from './components/header';
import SkillSet from './components/skillset';
import About from './components/about';
import MyProjects from './components/my-projects';
import Message from './components/message';
import Footer from './components/footer';

function App() {
  return (
    <section>
      <Header />
      <Opening />
      {/* <SkillSet /> */}
      <About />
      <MyProjects />
      <Message />
      <Footer />
    </section>
  )
}

export default App;
