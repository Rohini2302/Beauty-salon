import React, { useEffect } from 'react'
import gal1 from '../assets/images/pic1.jpeg'
import gal2 from '../assets/images/pic2.jpeg'
import gal3 from '../assets/images/pic3.jpeg'
import gal4 from '../assets/images/pic4.jpeg'
import gal5 from '../assets/images/pic5.jpeg'
import gal6 from '../assets/images/pic-6.jpeg'
import backimg from '../assets/images/back2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Gallary = () => {

useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <>
     <section  id='about' className='w-full bg:transparent md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-20 bg-cover bg-center' style={{backgroundImage:`url(${backimg})`}}>

<h1 data-aos="zoom-in" className='text-6xl text-black font-bold'>Experience the Best</h1>
  
     <div className='w-full flex flex-col justify-center items-center'>
      <div className='lg:w-[90%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 md:-mb[540px]'>
        <img data-aos="zoom-out" data-aos-delay="200" src={gal1} alt='' className=' w-[400px] h-[350px]'/>
        <img data-aos="zoom-out" data-aos-delay="200" src={gal2} alt='' className=' w-[400px] h-[350px]'/>
        <img data-aos="zoom-out" data-aos-delay="200" src={gal3} alt='' className=' w-[400px] h-[350px]'/>
        <img data-aos="zoom-out" data-aos-delay="200" src={gal4} alt='' className=' w-[400px] h-[350px]'/>
        <img data-aos="zoom-out" data-aos-delay="200" src={gal5} alt='' className=' w-[400px] h-[350px]'/>
        <img data-aos="zoom-out" data-aos-delay="200" src={gal6} alt='' className='w-[400px] h-[350px]'/>
     
      </div>



     </div>
     </section>
    </>
  )
}

export default Gallary
