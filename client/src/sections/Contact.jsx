import React, { useEffect, useState } from 'react';
import contactimg from '../assets/images/contactimg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/contact', contactData);
      setStatus('Your message has been sent successfully!');
    } catch (error) {
      setStatus('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start">
      <div
        data-aos="zoom-in"
        id="img-box"
        className="w-full bg-cover bg-center h-[700px] sm:h-[500px]"
        style={{ backgroundImage: `url(${contactimg})` }}
      ></div>

      <div
        id="form-box"
        className="bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px] sm:h-auto"
      >
        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-white text-6xl font-bold text-center">
          Contact Us
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          {/* Name Input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 text-black font-semibold"
            aria-label="Name"
          />
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your valid Email Address"
            className="w-full p-3 text-black font-semibold"
            aria-label="Email"
          />
          {/* Message Textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here...."
            className="w-full p-3 text-black"
            rows="5"
            aria-label="Message"
          ></textarea>
          {/* Submit Button */}
          <input
            type="submit"
            value="Send Message"
            className="bg-red-500 cursor-pointer w-full font-semibold text-lg text-black p-3"
            onClick={handleSubmit}
          />

          {/* Status Message */}
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
