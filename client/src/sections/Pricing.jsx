import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Pricing = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
   <section id='pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
    <h1 data-aos="zoom-in" className='text-5xl font-bold text-black text-center'>Our Pricing</h1>
    <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>

      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4  border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Regular Haircut</h1>
        <h1 className='text-2xl text-black font-semibold'>100</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Detoxifying</h1>
        <h1 className='text-2xl text-black font-semibold'>500</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Feather</h1>
        <h1 className='text-2xl text-black font-semibold'>350</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Hydrating Treatment</h1>
        <h1 className='text-2xl text-black font-semibold'>800</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>All types of Layer</h1>
        <h1 className='text-2xl text-black font-semibold'>200</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Manual Lymph-Draining</h1>
        <h1 className='text-2xl text-black font-semibold'>400</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Wedge</h1>
        <h1 className='text-2xl text-black font-semibold'>400</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>All Massage</h1>
        <h1 className='text-2xl text-black font-semibold'>700</h1>

      </div>
   
    </div>
    <h1 className=' flex '></h1>
    <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>

      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Bridal look</h1>
        <h1 className='text-2xl text-black font-semibold'>4000</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Daisy Nails</h1>
        <h1 className='text-2xl text-black font-semibold'>600</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Party</h1>
        <h1 className='text-2xl text-black font-semibold'>2000</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>White and Gold</h1>
        <h1 className='text-2xl text-black font-semibold'>500</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Basic</h1>
        <h1 className='text-2xl text-black font-semibold'>500</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Squoval Nails</h1>
        <h1 className='text-2xl text-black font-semibold'>300</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Traditional Look</h1>
        <h1 className='text-2xl text-black font-semibold'>3000</h1>

      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-4 border-b-2 border-pink-300 pb-6'>
        <h1 className='text-2xl text-gray-900 font-semibold'>Aesthetic Nails</h1>
        <h1 className='text-2xl text-black font-semibold'>400</h1>

      </div>
   
    </div>

   </section>
   
  )
}

export default Pricing
