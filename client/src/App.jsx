import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import WhyChoose from './sections/WhyChoose'
import Pricing from './sections/Pricing'
import Gallary from './sections/Gallary'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = ()=> {
  return (
   <>
   <Header/>
   <Hero/>
   <WhyChoose/>
   <Pricing/>
   <Gallary/>
   <Testimonial/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
