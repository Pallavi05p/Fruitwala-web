import React from 'react';
import lemons from '/lemons.png';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 " id='contactus'>
    
      {/* Responsive Image Container */}
      <div className="relative sm:w-full mx-5 md:mx-16 max-h-[500px]">
        
        
        <img
          className="rotate-90 sm:w-full sm:rotate-0 sm:h-full xs:object-cover "
          src={lemons}
          alt="Lemons"
        />
        <div className="absolute inset-0 flex items-center justify-center sm:px- md:px-0">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 bg-opacity-90">
     
            <div className="h-[327px] w-[330px] sm:w-96 px-10 pt-10 mt-5 rounded-[11px] bg-[#659921D6] opacity-80 text-white">
              <h1 className="text-[28px] pb-2 leading-[48px] font-medium tracking-wide">
                Get in Touch with <span className="text-yellow-300">FreshFruitWala!</span>
              </h1>
              <p className="text-[16px] leading-[32px] text-[#FFF4B8]">
                We’d love to hear from you! Whether you have a query, need assistance, or just want to know more about our farm-fresh fruits, feel free to reach out.
              </p>
            </div>

            {/* Form Section - Adjusted for Responsiveness */}
            <div className="w-[450px] max-w-full bg-green-800 rounded-[22px] p-8 flex flex-col shadow-lg">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-4 rounded-lg bg-[linear-gradient(90deg,_rgba(50,100,10,0.8)_0%,_rgba(169,169,169,0.5)_100%)] text-green-900 placeholder-green-900 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 rounded-lg bg-[linear-gradient(90deg,_rgba(50,100,10,0.8)_0%,_rgba(169,169,169,0.5)_100%)] text-green-900 placeholder-green-900 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Contact No"
                className="w-full p-3 mb-4 rounded-lg bg-[linear-gradient(90deg,_rgba(50,100,10,0.8)_0%,_rgba(169,169,169,0.5)_100%)] text-green-900 placeholder-green-900 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 mb-4 rounded-lg bg-[linear-gradient(90deg,_rgba(50,100,10,0.8)_0%,_rgba(169,169,169,0.5)_100%)] text-green-900 placeholder-green-900 focus:outline-none"
              />
              <button className="py-3 font-bold text-green-900 transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500">
                Send Enquiry
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
