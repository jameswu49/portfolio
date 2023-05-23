import React, { useRef } from 'react';
import Opening from './components/opening';
import SideNav from './components/side-nav';
import Header from './components/header';
import SkillSet from './components/skillset';
import About from './components/about';
import MyProjects from './components/my-projects';
// import Message from './components/message';
import { Email } from './components/email';
import Footer from './components/footer';

function App() {
  const first = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const projectProps = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLDivElement>(null);


  return (
    <div className='contain'>
      {/* <Header /> */}
      {/* <SideNav first={first} about={about} projectProps={projectProps} form={form} /> */}
      <Opening first={first} />
      {/* <SkillSet /> */}
      <About about={about} />
      <MyProjects projectProps={projectProps} />
      {/* <Message form={form} /> */}
      <Email />
      <Footer />
    </div>
  )
}

export default App;
