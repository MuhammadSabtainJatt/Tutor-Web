import React from 'react';
import Feedback from './feedback'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faChalkboardTeacher, faCertificate, faSchool, faPaintBrush, faFutbol } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div>
            {/* Header Section */}
            <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("https://wordzz.com/wp-content/uploads/2017/04/school-kids-full-screen-wallpaper-1024x482.jpg")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">About Us</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row p-6 bg-gray-100">
                {/* First Column */}
                <div className="w-full md:w-1/2 p-4">
                    <h1 className=" text-3xl md:text-5xl  font-bold mb-4">What We Offer</h1>
                    <p className="mb-6">
                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
                    </p>

                    {/* Three Rows with Two Columns Each */}
                    <div className="space-y-4">
                        {/* Row 1 */}
                        <div className="flex flex-wrap sm:flex-nowrap">
                            <div className="w-full sm:w-1/2 flex items-start mb-4 sm:mb-0">
                                <div className="w-10 h-10 p-3 bg-gray-200 text-black flex items-center justify-center rounded-full mr-4">
                                    <FontAwesomeIcon icon={faShieldAlt} size="lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl">Safety First</h3>
                                    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-start">
                                <div className="w-10 h-10 p-3 bg-gray-200 text-black flex items-center justify-center rounded-full mr-4">
                                    <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl">Regular Classes</h3>
                                    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-wrap sm:flex-nowrap">
                            <div className="w-full sm:w-1/2 flex items-start mb-4 sm:mb-0">
                                <div className="w-10 h-10 p-3 bg-gray-200 text-black flex items-center justify-center rounded-full mr-4">
                                    <FontAwesomeIcon icon={faCertificate} size="lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl">Certified Teachers</h3>
                                    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-start">
                                <div className="w-10 h-10 p-3 bg-gray-200 text-black flex items-center justify-center rounded-full mr-4">
                                    <FontAwesomeIcon icon={faSchool} size="lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl">Sufficient Classrooms</h3>
                                    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-wrap sm:flex-nowrap">
                            <div className="w-full sm:w-1/2 flex items-start mb-4 sm:mb-0">
                                <div className="w-10 h-10 p-3 bg-gray-200 text-black flex items-center justify-center rounded-full mr-4">
                                    <FontAwesomeIcon icon={faPaintBrush} size="lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl">Creative Lessons</h3>
                                    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-start">
                                <div className="w-10 h-10 p-3 bg-gray-200 text-black flex items-center justify-center rounded-full mr-4">
                                    <FontAwesomeIcon icon={faFutbol} size="lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xl">Sports Facilities</h3>
                                    <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Second Column */}
                <div className="w-full md:w-1/2 p-6 md:p-24 bg-gray-300">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Kiddos Learning School</h2>
                    <p className="mb-6">
                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
                        <br />
                        <br />
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.
                    </p>
                    <button className="bg-gray-500 text-white p-2 px-4  hover:bg-gray-400 hover:text-black rounded">
                        Read More
                    </button>
                </div>
            </div>
            <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url("https://getwallpapers.com/wallpaper/full/c/c/d/92441.jpg")`, backgroundAttachment: "fixed" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                    {/* Heading and Text */}
                    <div className="text-white">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4"><span className='text-red-500'>20 Years of</span> Experience
                        </h1>
                        <p className="text-sm md:text-lg mb-8">Separated they live in. A small river named Duden flows by their place and supplies <br /> it with the necessary regelialia. It is a paradisematic country</p>
                    </div>

                    {/* Four Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-4">
                        {/* Column 1 */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl  font-bold text-red-500">20+</span>
                            <h3 className="text-sm md:text-lg text-white">Qualified Teachers</h3>
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl font-bold text-red-500">500+</span>
                            <h3 className="text-sm md:text-lg text-white">Successful Kids</h3>
                        </div>
                        {/* Column 3 */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl font-bold text-red-500">120+</span>
                            <h3 className="text-sm md:text-lg text-white">Happy Parents</h3>
                        </div>
                        {/* Column 4 */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl font-bold text-red-500">15+</span>
                            <h3 className="text-sm md:text-lg text-white">Awards Wins</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Feedback />
        </div>
    );
}
