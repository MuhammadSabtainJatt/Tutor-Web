import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className='bg-gray-100'>
      {/* First Row: Background Image with "Contact Us" Text */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage: 'url("https://wordzz.com/wp-content/uploads/2017/04/school-kids-full-screen-wallpaper-1024x482.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Second Row: Four Attractive Cards */}
      <div className="py-12 my-12 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 text-center bg-gray-200 hover:bg-gray-600 text-gray-900 hover:text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform duration-900 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="p-8 text-center bg-gray-200 hover:bg-gray-600 text-gray-900 hover:text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform duration-900 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Contact Number</h2>
          <p>+92 304 7191103</p>
        </div>
        <div className="p-8 text-center bg-gray-200 hover:bg-gray-600 text-gray-900 hover:text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform duration-900 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p>Home@gmail.com</p>
        </div>
        <div className="p-8 text-center bg-gray-200 hover:bg-gray-600 text-gray-900 hover:text-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transition-transform duration-900 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faGlobe} size="2x" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Website</h2>
          <Link to="https://www.google.com">myWebsite.com</Link>
        </div>
      </div>

      {/* Third Row: Form with Blur Background */}
      <div
        className="relative min-h-screen bg-cover text-center bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://institute.careerguide.com/wp-content/uploads/2020/10/download.gif")',
        }}
      >
        <div className="bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur w-full max-w-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-50 text-white p-3 rounded-lg hover:bg-gray-300 hover:text-black transition-colors duration-300 bg-gray-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
