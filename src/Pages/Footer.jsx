import React from 'react';
import { Link } from 'react-router-dom';
import wala from '/wala.png'; 
import Vector from '../assets/Vector.png';
import Mob from '../assets/mob.png';
import Email from '../assets/em.png';
import Logo from '/tech_surya.png';

function Footer() {
  return (
    <div className='text-center leading-[48px] h-screen bg-[linear-gradient(180deg,_#FFD700_0%,_#016133_100%)] w-full flex flex-col items-center justify-center'> 
      
      <h1 className='text-[30px] font-medium text-white tracking-[2%]'>
        🌱 FreshFruitWala – Farm to Your Home!
      </h1>
      <p className='text-[#016133] text-[28px] font-normal'>
        Bringing you fresh, natural, and farm-picked fruits with love!
      </p>

      <img src={wala} alt="FreshFruitWala Logo" className="w-32 h-auto mb-4" />

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <img src={Vector} alt="Location Icon" className="w-6 h-6" />
          <p className='text-[#FFF4B8] text-xl font-normal'>
            Chhatrapati Sambhajinagar, Maharashtra, India
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <img src={Mob} alt="Phone Icon" className="w-6 h-6" />
          <p className='text-[#FFF4B8] text-xl font-normal'>9889890989</p>
        </div>

        <div className="flex items-center justify-center gap-3 ">
          <img src={Email} alt="Email Icon" className="w-6 h-6" />
          <p className='text-lg text-[#FFF4B8] font-normal '>freshfruitwala@gmail.com</p>
        </div>
        <Link to="/privacy-policy"> 
  <button className='pb-6 text-[#FFF4B8] text-[18px] font-normal'>
    Privacy Policy | Terms & Conditions
  </button>
</Link>

      </div>

      <div className='border border-[#FFF4B8] w-[1190px] xl:mx-24 sm:mx-12 my-'></div>

      <div className='flex flex-col sm:flex-row justify-between text-[#FFFFFF] sm:pl-24 items-center sm:text-sm text-center sm:text-left w-full'>
        <p className='text-lg font-normal sm:text-base '>&copy; All rights reserved.</p>

        <div className='flex items-center mt-4 sm:px-24 sm:mt-0'>
          <p className='pl-10 mr-3 text-lg sm:text-base'>Developed By</p>
          
          
          <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer">
            <img className='mt-2 h-14 sm:h-12' src={Logo} alt="Tech Surya Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
