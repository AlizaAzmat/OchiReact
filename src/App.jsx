import React from 'react';
import LandingPage from  './components/LandingPage';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Trio from './components/Trio';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';
function App() {
  

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
     <Trio/>
      <Footer/>
    </div>
  )
}

export default App