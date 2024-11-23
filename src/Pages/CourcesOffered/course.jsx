import React from 'react';

const subjects = [
    'English', 'Mathematics, Statistics', 'Physics, Chemistry, Biology', 'Urdu, Islamiyat',
    'Computer Science','Information Technology', 'Programming languages','Graphic design, Web design',
    'Psychology, Sociology', 'Economics, Business Studies', 'Arabic, Punjabi, History, Social Studies',
    '(MCAT, ECAT, IELTS, SAT, GRE, GMAT, GAT)', 'All O and A levels Subjects',
    'Degree level medical and engineering subjects.'
  ];

const Courses = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-10">
      {/* Heading Section */}
      <h1 className=" text-2xl md:text-5xl my-10 font-bold text-gray-900 mb-4">Courses</h1>
      <p className="text-sm md:text-lg text-black mb-8 text-center max-w-2xl">
        Explore a variety of subjects we offer to enhance your learning experience. 
        Each subject is tailored to provide in-depth knowledge and hands-on practice.
      </p>

      {/* Courses Boxes */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="w-24 h-24 md:w-60 md:h-60 text-center flex items-center justify-center bg-gray-300 text-gray-900 text-sm md:text-xl font-semibold 
            rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-600 hover:text-gray-100"
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
