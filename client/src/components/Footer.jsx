import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-gray-800 px-4 md:px-16 lg:px-28 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
             <div>
                <h1 className='text-lg font-bold mb-4 text-white '>Blossom <span className='italic text-pink-400'>Beauty</span> </h1>
                <p className='text-gray-300'>A commitment to providing a relaxing and welcoming environment </p>
             </div>
            <div>
              <h2 className='text-lg font-bold mb-4 text-white'>Quick link</h2>
              <ul>
                   <li><a href='home' className='hover:underline text-gray-300'>Home</a></li>
                   <li><a href='about' className='hover:underline text-gray-300'>About</a></li>
                   <li><a href='testimonial' className='hover:underline text-gray-300'>Testimonial</a></li>
                   <li><a href='contact' className='hover:underline text-gray-300'>Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-4 text-white'>Social Media</h2>
              <ul className='flex space-x-4'>
                   <li>{ " " }
                    <FaFacebookF className='text-blue-500'/>
                    <a href='' id='icon-box' className='hover:underline text-gray-300 p-4 rounded-full cursor-pointer'></a></li>{ " " }
                   <li>{ " " }
                    <FaTwitter className='text-sky-500'/>
                    <a href='' id='icon-box'className='hover:underline text-gray-300 p-4 rounded-full cursor-pointer'></a></li>{ " " }
                   <li>{ " " }
                    <FaInstagram className='text-orange-500'/>
                    <a href='' id='icon-box' className='hover:underline text-gray-300 p-4 rounded-full cursor-pointer'></a></li>{ " " }
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer

