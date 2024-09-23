import React, { useState } from 'react';

const Card = ({ image, title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col items-center p-4">
      <img src={image} alt={title} className="w-40 h-40 object-cover mb-4"/>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">
        {isExpanded ? text : `${text.slice(0, 100)}...`}
        <span
          onClick={toggleReadMore}
          className="text-blue-500 cursor-pointer ml-2"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      </p>
    </div>
  );
};

const App = () => {
  const cards = [
    {
      image: "https://readhometuitionfsd.pk/wp-content/uploads/2023/06/Personalized-Learning-150x150.png",
      title: "Personalized Learning",
      text: "We understand that every student has unique learning needs. At Read Home Tuition, we provide personalized attention to each student, tailoring our teaching methods and pace according to their individual requirements. This ensures a more effective and engaging learning experience ."
    },
    {
      image: "https://readhometuitionfsd.pk/wp-content/uploads/2023/06/Experienced-and-Qualified-Tutors-150x150.png",
      title: "Experienced Tutors",
      text: "We understand that every student has unique learning needs. At Read Home Tuition, we provide personalized attention to each student, tailoring our teaching methods and pace according to their individual requirements. This ensures a more effective and engaging learning experience."
    },
    {
      image: "https://readhometuitionfsd.pk/wp-content/uploads/2023/06/Home-Based-Learning-150x150.png",
      title: "Home-Based Learning",
      text: "One of the primary advantages of our academy is the convenience it offers. We bring the learning experience directly to students’ homes, eliminating the need for commuting and providing a comfortable and familiar environment for learning. This saves time and allows for flexible scheduling to accommodate students."
    },
    {
      image: "https://readhometuitionfsd.pk/wp-content/uploads/2023/06/Progress-Monitoring-150x150.png",
      title: "Progress Monitoring",
      text: "We believe in closely monitoring students’ progress to track their development and identify areas that need improvement. Our tutors provide regular feedback to students and parents, highlighting strengths and areas for further focus."
    },
    {
      image: "https://readhometuitionfsd.pk/wp-content/uploads/2023/06/Flexible-Timings-150x150.jpg",
      title: "Flexible Timings",
      text: "Recognizing the importance of flexibility, we offer tutoring sessions at flexible timings that suit students’ schedules. Whether students prefer morning, afternoon, or evening sessions, we strive to accommodate their needs and ensure optimal learning conditions."
    },
    {
      image: "https://readhometuitionfsd.pk/wp-content/uploads/2023/06/Competitive-Pricing-150x150.jpg",
      title: "Affordable Pricing",
      text: "We aim to make quality education accessible to all. Our academy offers affordable pricing for our home tuition services without compromising on the quality of education provided."
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} text={card.text} />
      ))}
    </div>
  );
};

export default App;
