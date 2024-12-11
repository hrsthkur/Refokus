import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-full bg-zinc-900 font-regular font-["Satoshi_Variable"]'>
    
      <Navbar></Navbar>
      <Work></Work>
    <Stripes />
    <Products />
    <Marquees />
   <Cards></Cards>
   <Footer></Footer>
    </div>
  )
}

export default App