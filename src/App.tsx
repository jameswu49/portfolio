import React from 'react';
import Opening from './components/opening';
import Header from './components/header';
import SkillSet from './components/skillset';
import Message from './components/message';
import Footer from './components/footer';

function App() {
  return (
    <section>
      <Header />
      <Opening />
      {/* <SkillSet /> */}
      <Message />
      <Footer />
    </section>
  )
}

export default App;
