import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Slider = () => {
  const sliderImages = [
    {
      src: 'https://www.kpu.ca/sites/default/files/Education-Studies-HEADER_1.jpg',
      text: 'Empower your mind'
    },
    {
      src: 'https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/2020-09/iStock-1271957539-crop.jpg',
      text: 'Unlock your potential'
    },
    {
      src: 'https://wallpaperaccess.com/full/1175481.jpg',
      text: 'Learn, grow, succeed'
    }
  ];

  const [slideCounter, setSlideCounter] = useState(0);

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const sliderText = document.querySelector('.slider--text');
    slider.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[slideCounter].src})`;
    sliderText.innerHTML = sliderImages[slideCounter].text;

    slider.classList.add('fadeIn');
    setTimeout(() => {
      slider.classList.remove('fadeIn');
    }, 1000);
  }, [slideCounter]);

  const handleRightClick = () => {
    if (slideCounter === sliderImages.length - 1) {
      setSlideCounter(0);
    } else {
      setSlideCounter(slideCounter + 1);
    }
  };

  const handleLeftClick = () => {
    if (slideCounter === 0) {
      setSlideCounter(sliderImages.length - 1);
    } else {
      setSlideCounter(slideCounter - 1);
    }
  };

  return (
    <main className="h-screen w-full font-sans bg-gray-700">
      <div className="slider h-full w-full bg-center bg-no-repeat bg-cover">
        <div className="flex justify-between items-center h-full">
          <button
            onClick={handleLeftClick}
            className="bg-transparent border-none outline-none text-6xl text-gray-200 p-4 cursor-pointer transform transition-transform duration-100 hover:scale-95"
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <div className="text-center">
            <h1 className="text-5xl text-white uppercase font-bold">
              Discover the Power of Knowledge
            </h1>
            <p className="slider--text text-lg text-white uppercase my-2"></p>
            <button className="bg-blue-900 text-white font-bold my-6 py-2 px-8 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">
              Start Learning
            </button>
          </div>
          <button
            onClick={handleRightClick}
            className="bg-transparent border-none outline-none text-6xl text-gray-200 p-4 cursor-pointer transform transition-transform duration-100 hover:scale-95"
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Slider;
