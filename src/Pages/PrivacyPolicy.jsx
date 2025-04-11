import React, { useState } from 'react';
import navI from '../assets/navI.png';
import wala from '/wala.png'; 
import bars from '/bars.png'; 

function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="text-[20px] font-normal font-poppins leading-[40px] text-[#333]">

      <div
        className="relative w-full h-[340px] bg-cover bg-center"
        style={{ backgroundImage: `url(${navI})` }}
      >
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full px-10">
          <img src={wala} alt="Logo" className="h-auto w-28" />
          <img src={bars} alt="Menu" className="w-12 h-auto" onClick={toggleMenu} />
        </div>
        {menuOpen && (
          <div className='absolute z-50 p-4 mt-2 bg-white rounded shadow-md top-full right-10'>
              <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#016133]">Home</a></li>
              <li><a href="/products" className="hover:text-[#016133]">Our Products</a></li>
              <li><a href="/contact" className="hover:text-[#016133]">Contact</a></li>
              <li><a href="/about" className="hover:text-[#016133]">About</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Privacy Policy */}
      <div className="mx-10 mt-10 mb-12">
        <h1 className="text-[#016133] text-[40px] font-semibold mb-4">Privacy Policy</h1>

        <p>1. Introduction</p>
        <p>
          Welcome to FreshFruitWala! Your privacy is important to us. <br />
          This Privacy Policy explains how we collect, use, and protect your personal data when you use our app and website.
        </p>

        <p className="mt-4">2. Information We Collect</p>
        <p>
          We may collect the following types of data: <br />
          • Personal Information: Name, phone number, email, address.<br />
          • Order Details: Products purchased, delivery address, payment status.<br />
          • Payment Information: Securely processed via third-party payment gateways.
        </p>

        <p className="mt-4">3. How We Use Your Information</p>
        <p>
          ✅ Process and deliver your fruit orders.<br />
          ✅ Improve app performance and user experience.<br />
          ✅ Send updates about orders, promotions, or new products.<br />
          ✅ Prevent fraud and ensure security.
        </p>

        <p className="mt-4">4. Sharing Your Information</p>
        <p>
          We do not sell your data. However, we may share it with:<br />
          • Delivery partners for order fulfillment.<br />
          • Payment providers for secure transactions.<br />
          • Legal authorities if required by law.
        </p>

        <p className="mt-4">5. Security Measures</p>
        <p>
          We use encryption, firewalls, and secure servers to protect your information. However, no online service is 100% secure.
        </p>

        <p className="mt-4">6. Your Rights</p>
        <p>
          • Access, update, or delete your personal data.<br />
          • Opt-out of promotional emails.<br />
          • Request account deletion by contacting us.
        </p>

        <p className="mt-4">7. Updates to This Policy</p>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on our website/app.
        </p>

        <p className="mt-4">8. Contact Us</p>
        <p>
          For any privacy-related concerns, contact us at <span className="text-blue-700">support@freshfruitwala.com</span>.
        </p>
      </div>

      {/* Terms & Conditions */}
      <div className="sm:mx-10">
        <h1 className="text-[#016133] text-[40px] font-semibold mb-4">Terms & Conditions</h1>

        <p>1. Introduction</p>
        <p>
          These Terms & Conditions govern your use of the FreshFruitWala app and website. By accessing our services, you agree to these terms.
        </p>

        <p className="mt-4">2. User Accounts</p>
        <p>
          • Users must provide accurate information during registration.<br />
          • Users are responsible for maintaining account security.
        </p>

        <p className="mt-4">3. Orders & Payments</p>
        <p>
          • Orders are confirmed only after successful payment.<br />
          • Prices are subject to change without notice.<br />
          • We reserve the right to cancel any order due to stock unavailability or fraud suspicion.
        </p>

        <p className="mt-4">4. Delivery & Refunds</p>
        <p>
          • Orders will be delivered within the estimated timeframe.<br />
          • Refunds will be processed for damaged or incorrect products.<br />
          • Users must report issues within 24 hours of delivery.
        </p>

        <p className="mt-4">5. Restrictions</p>
        <p>
          🚫 Use the platform for illegal purposes.<br />
          🚫 Attempt to hack, modify, or exploit the app.<br />
          🚫 Resell products without authorization.
        </p>

        <p className="mt-4">6. Intellectual Property</p>
        <p>
          All logos, content, and images on FreshFruitWala are our property. Unauthorized use is prohibited.
        </p>

        <p className="mt-4">7. Liability & Disclaimers</p>
        <p>
          • We are not liable for delays due to third-party services.<br />
          • Users agree to use the app at their own risk.
        </p>

        <p className="mt-4">8. Termination of Account</p>
        <p>
          We reserve the right to suspend or terminate accounts if users violate these terms.
        </p>

        <p className="mt-4">9. Governing Law</p>
        <p>
          These Terms are governed by the laws of India.
        </p>

        <p className="mt-4">10. Contact Us</p>
        <p>
          For queries, email us at <span className="text-blue-700">support@freshfruitwala.com</span>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
