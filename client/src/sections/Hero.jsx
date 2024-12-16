import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePhoneAndroid, MdEmail } from 'react-icons/md';
import sissor from '../assets/images/haircut.png';
import menshair from '../assets/images/spa.jpg';
import trimmer from '../assets/images/makeup.jpg';
import womenhair from '../assets/images/nails.png';
import homeimg from '../assets/images/homeimg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReservationForm from './ReservationForm';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  // Function to open the form
  const openForm = () => {
    setShowForm(true);
  };

  // Function to close the form
  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <div
        className={`hero text-white flex items-center justify-center h-screen transition-all duration-300 ${
          showForm ? 'backdrop-blur-md' : ''
        }`}
      >
        <section
          id="hero"
          className='w-full h-full md:px--20 px-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center' 
          style={{ backgroundImage: `url(${homeimg})` }}
        >
          <div id="content-box" className="flex flex-col justify-center items-start gap-10 ">
            <h1 data-aos="zoom-in" className="text-2xl py-5 text-white font-semibold">
              WELCOME TO
            </h1>
            <h1 data-aos="zoom-in" className="text-4xl py-1 text-white font-bold">
              Blossom Beauty
              <br />
              Create the beauty
              <br />
              that moves the world..!
            </h1>
            <div data-aos="slide-up" id="icon-list" className="flex flex-col justify-center items-start gap-6">
              <div id="icon-box" className="flex justify-center items-center gap-3">
                <FaLocationDot className="text-white size-6" />
                <h1 className="text-l text-white font-semibold">254 W 27ST ST, INDIA, NI 10011</h1>
              </div>
              <div id="icon-box" className="flex justify-center items-center gap-3">
                <MdOutlinePhoneAndroid className="text-white size-6" />
                <h1 className="text-l text-white font-semibold">+91 883 032 2912 / +91 873 456 2932</h1>
              </div>
              <div id="icon-box" className="flex justify-center items-center gap-3">
                <MdEmail className="text-white size-6" />
                <h1 className="text-l text-white font-semibold">beautyblossom34@gmail.com</h1>
              </div>
            </div>
            <button
              data-aos="zoom-in"
              onClick={openForm}
              className="px-3 py-2 rounded-xl border-2 border-orange-100 text-orange-200 font-semibold text-lg hover:bg-orange-200 hover:text-black"
            >
              RESERVATION
            </button>
          </div>
          <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full">
            {/* You can add an image here if needed */}
            {/* <img src={heroimg} alt="" className="rounded-xl w-full md:h-[700px] h-[500px]" /> */}
          </div>
        </section>
      </div>

      {/* Display the Reservation Form if showForm is true */}
      {showForm && <ReservationForm closeForm={closeForm} />}

      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120] px-10 py-10 gap-10">
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
          <img
            src={sissor}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Haircut</h1>
          <button className="px-5 py-2 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white">
            More
          </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
          <img
            src={menshair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Spa</h1>
          <button className="px-5 py-2 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white">
            More
          </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
          <img
            src={trimmer}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Makeup</h1>
          <button className="px-5 py-2 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white">
            More
          </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
          <img
            src={womenhair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Nail Art</h1>
          <button className="px-5 py-2 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white">
            More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
