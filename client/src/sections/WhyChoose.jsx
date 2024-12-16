import React, { useEffect } from 'react'
import whyimg from '../assets/images/back.jpeg'
import { FaAngleDoubleRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhyChoose = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
   <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{backgroundImage:`url(${whyimg})`}}>
<div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full'>
  <h1 className='text-themeyellow text-4xl font-bold'>WORKING HOURS</h1>
  <div className='flex flex-col justify-center items-center gap-4'>
    <p className='text-xl text-black font-lg'>SUNDAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8AM - 10PM</p>
    <p className='text-xl text-black font-lg'>MONDAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 9PM</p>
    <p className='text-xl text-black font-lg'>TUESDAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 9PM</p>
    <p className='text-xl text-black font-lg'>WEDNESDAY &nbsp;10AM - 9PM</p>
    <p className='text-xl text-black font-lg'>THURSDAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 9PM</p>
    <p className='text-xl text-black font-lg'>FRIDAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 9PM</p>
    <p className='text-xl text-black font-lg'>SATURDAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 9PM</p>
  </div>
  <button className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6'>BOOK ONLINE</button>
</div>
<div data-aos="slide-up" data-aos-delay="200" className='md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit'>
  <h1 className='text-3xl font-bold text-white text-center'>Why Choose Us</h1>
  <p className='text-2xl font-semibold text-white text-center'>Beauty is Our Art, Your Satisfaction is Our Masterpiece</p>
<div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
  <div id='icon-box' className='flex justify-center items-center gap-3'>
    <FaAngleDoubleRight className='text-white size-6'/>
<h1 className='text-xl text-white font-bold'>Always Welcome our envirnment</h1>
  </div>
  <div id='icon-box' className='flex justify-center items-center gap-3'>
    <FaAngleDoubleRight className='text-white size-6'/>
<h1 className='text-xl text-white font-bold'>Recognized professional experties</h1>
  </div>
  <div id='icon-box' className='flex justify-center items-center gap-3'>
    <FaAngleDoubleRight className='text-white size-6'/>
<h1 className='text-xl text-white font-bold'>Personalized and customized approach</h1>
  </div>
  <div id='icon-box' className='flex justify-center items-center gap-3'>
    <FaAngleDoubleRight className='text-white size-6'/>
<h1 className='text-xl text-white font-bold'>All surfaces and tools are cleaned, disinfected before and after using</h1>
  </div>
  <div id='icon-box' className='flex justify-center items-center gap-3'>
    <FaAngleDoubleRight className='text-white size-6'/>
<h1 className='text-xl text-white font-bold'>We work only with high-quality, hypoallergenic premium products</h1>
  </div>
</div>
</div>
   </section>
  )
}

export default WhyChoose
