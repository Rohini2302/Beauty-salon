import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};


  const closeMenu = () =>{
    setIsMenuOpen(false);
  }

  const navItems = [
    { link: 'Home', path: 'home'},
    { link: 'About', path: 'about'},
    { link: 'Pricing', path: 'pricing'},
    { link: 'Testimonial', path:'testimonial'},
    { link: 'Contact', path: 'contact'},
    
  ]
  return (
 
    <nav className='flex justify-between items-center gap-4 py-2 px-3 lg:px-8  top-0 z-30 sticky bg-slate-50'>
      <div id='logo'>
    <h1 data-aos="fade-right" className='duration-200 hover:scale-105 text-4xl font-bold text-black'><a href='#'>Blossom <span className='italic text-pink-400'>Beauty</span> </a></h1>
   </div>
   <ul className=' lg:flex items-center justify-center gap-6 font-semibold text-base hidden'>
    {navItems.map(({ link, path }) => (
      <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-200 hover:text-black' to={path} spy={true} offset={-100} smooth={true} >{link}</Link>
    ))}
   
   </ul>
   <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
  <div>
    {isMenuOpen ? (
      <FaXmark className='text-black text-2xl cursor-pointer' />
    ) : (
      <FaBars className='text-black text-2xl cursor-pointer' />
    )}
  </div>
</div>

    <div className={`${isMenuOpen ? 'flex' : 'hidden' } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path}) => (
<Link key={path} className='text-black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-300 hover:text-black' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
            ))}  
        </ul>
    </div>
  
    </nav>

   
  );
}

export default Header
