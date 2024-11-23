import React from 'react';

export default function FeedbackSection() {
    const feedbacks = [
        {
            name: 'Zareena',
            relation: 'Mother',
            text: 'My child has learned so much in a fun and engaging way. I couldn’t be happier!',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            name: 'Altaf Hussain',
            relation: 'Father',
            text: 'The teachers are so caring and attentive. My child looks forward to school every day!',
            image: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        {
            name: 'Fatima',
            relation: 'Sister',
            text: 'A great environment for kids to grow and learn. Highly recommend!',
            image: 'https://randomuser.me/api/portraits/women/47.jpg'
        }
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading and Text */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-gray-900 font-bold mb-4">Parents' Feedback</h2>
                    <p className="text-lg text-gray-700">
                        Hear what our parents have to say about their experience with our school.
                    </p>
                </div>

                {/* Feedback Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src={feedback.image}
                                    alt={feedback.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{feedback.name}</h3>
                                    <p className="text-gray-500">{feedback.relation}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">"{feedback.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
