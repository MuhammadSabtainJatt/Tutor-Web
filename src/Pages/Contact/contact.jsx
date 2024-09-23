import React from 'react';

function ContactPage() {
  return (
    <div>
      {/* First Row: Background Image with "Contact Us" Text */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("https://wordzz.com/wp-content/uploads/2017/04/school-kids-full-screen-wallpaper-1024x482.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Second Row: Four Attractive Cards */}
      <div className="py-12 my-12  px-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 text-center bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p className="text-gray-600">198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="bg-white p-8 text-center bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Contact Number</h2>
          <p className="text-gray-600">+92 311 2323901</p>
        </div>
        <div className="bg-white p-8 text-center bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Email </h2>
          <p className="text-gray-600">admin.gmail.com</p>
        </div>
        <div className="bg-white p-8 text-center bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 ">Website</h2>
          <p className="text-gray-600">mywebsite.surge.sh</p>
        </div>
      </div>

     {/* Third Row: Form with Blur Background */}
     <div className="relative min-h-screen bg-cover text-center bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://institute.careerguide.com/wp-content/uploads/2020/10/download.gif")' }}>
        <div className="bg- bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur w-full max-w-lg">
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
              className="w-50  text-white p-3 rounded-lg hover:bg-gray-300 hover:text-black  transition-colors duration-300 bg-gray-600"
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
