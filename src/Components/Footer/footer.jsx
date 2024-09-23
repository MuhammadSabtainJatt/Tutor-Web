import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const year=new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 p-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Grid for the three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
          
          {/* Column 1: Have a Question */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Have A Question?</h3>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="text-gray-400 mr-3" />
              <p>123 Street, City, Country</p>
            </div>
            <div className="flex items-start mb-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <p>info@hometutor.com</p>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="text-gray-400 mr-3" />
              <p>+123-456-7890</p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {['Home', 'Our Tutors', 'Contact', 'Blogs', 'Services'].map((link, index) => (
                <li key={index} className="flex items-center">
                  <FaArrowRight className="text-gray-400 mr-2" />
                  <a href="#" className="hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us and Social Links */}
          <div className="text-left">
            <h1 className="text-xl font-semibold mb-4">About Us</h1>
            <p className="mb-4">
              We provide personalized home tutoring services to help students excel in their academics with one-on-one attention from qualified tutors.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="bg-gray-600 hover:text-slate-900 text-white p-2 rounded-full hover:bg-gray-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-600 hover:text-slate-900 text-white p-2 rounded-full hover:bg-gray-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-600 hover:text-slate-900 text-white p-2 rounded-full hover:bg-gray-400 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 w-full max-w-5xl">
          <p>&copy; {year} Home Tutor Services || All rights reserved.</p>
          <p>Made By Muhammad Sabtain </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
