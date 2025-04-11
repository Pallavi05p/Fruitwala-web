import React from 'react';
import about from "../assets/about.svg"
const About = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-2 bg-white md:flex-row " id='about'>
      {/* Left Side - Text Content */}
      <div className="px-20 space-y-4 md:w-1/2 ">
        <h2 className="text-green-800 text-7xl font-lalezar">About Us</h2>
        <h3 className="text-2xl leading-loose text-yellow-500 font-poppins">
          Welcome to FreshFruitWala – Bringing Farm-Fresh Fruits to Your Doorstep!
        </h3>
        <p className="text-xl leading-loose text-gray-600">
          At FreshFruitWala, we believe in delivering the freshest, highest-quality fruits
          directly from our farms to your home. Our mission is to connect consumers with
          natural, pesticide-free, and organic fruits, ensuring health and freshness in every bite.
        </p>
        <button className="px-10 py-5 text-2xl font-semibold text-green-900 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500">
          Download App
        </button>
      </div>
      
      {/* Right Side - Image */}
      <div className="relative mt-8 md:w-1/2 md:mt-0">
        <img
          src={about}
          alt="Fresh Fruits"
          className="object-cover w-full "
        />
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </div>
    </section>
  );
};

export default About;
