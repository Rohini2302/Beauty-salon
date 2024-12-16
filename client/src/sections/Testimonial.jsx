import React, { useEffect } from 'react'
import Client1 from '../assets/images/client1.jpg'
import Client2 from '../assets/images/client2.jpg'
import Client3 from '../assets/images/client3.jpg'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'

const clients = [
  {
    image: Client1,
    title: 'Riya Sharma',
    para: ' its the best beauty salon Ive ever been to.The staff is incredibly skilled and friendly, i want to go again & again!'
  },
  {
    image: Client2,
    title: 'Ananya Patel',
    para: ' Very pleasant atmosphere, especially considering the difficult times we are all facing with the pandemic. '
  },
  {
    image: Client3,
    title: 'Vartika Jha',
    para: 'Easy appointments, welcoming staff, talented employees! This is the only salon that I trust to properly with my hair.'
  },
]

const Testimonial = ()=>  {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
   <section id='testimonial' className='w-full md;px-20 md:h-[90vh] h-fit px-10 py-22 flex flex-col justify-center items-center gap-6 bg-orange-200'>
<h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>What our Customers says...</h1>
  <div id='clients' className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6'>
{
  clients.map((item, index) => (
     <div data-aos="slide-up" data-aos-delay-100 id='main-box' key={index} className='w-full bg-white p-14 flex flex-col justify-between items-center gap-6 rounded-3xl'>
      <div id='top' className='flex justify-between items-center gap-8 w-full'>
<div className='flex justify-center items-center gap-4 relative'>
  <BiSolidQuoteAltLeft className='size-20 text-[#1caf7e] absolute left-0 opacity-20'/>
  <h1 className='text-2xl text-black font-bold'>{item.title}</h1>
</div>
<img src={item.image} alt='' className='w-[120px] hb-[120px] transform hover:scale-110 transition duration-300 cursor-pointer rounded-full'/>
      </div>
      <div id='bottom' className='w-full'>
        <p className='text-end text-lg text-gray-600 font-small'>{item.para}</p>
      </div>
     </div>
  ))
}
  </div>
   </section>
  )
}

export default Testimonial

