import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase";

const FindTutorPage = () => {
    const [tutors, setTutors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch tutors from Firestore
    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, "TutorData"));
                const tutorList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTutors(tutorList);
            } catch (error) {
                console.error("Error fetching tutor data:", error);
            }
        };

        fetchTutors();
    }, []);

    // Filter tutors based on the search term matching the tuition area
    const filteredTutors = tutors.filter((tutor) =>
        tutor.tuitionArea?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Find the Best Tutor
            </h1>
            {/* Description */}
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Browse through our list of experienced tutors to find the perfect match
                for your learning needs. From mathematics to language skills, our tutors
                are here to help you succeed.
            </p>
            {/* Search Field */}
            <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search by area"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none px-2 py-2 text-gray-700"
                    />
                    <span className="absolute right-2 top-2.5 text-gray-400">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
            {/* Tutor Cards */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
                {filteredTutors.map((tutor) => (
                    <div
                        key={tutor.id}
                        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
                    >
                        {/* Tutor Image */}
                        <img
                            src={tutor.imageURL}
                            alt={tutor.fullName}
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        {/* Tutor Name */}
                        <h2 className="text-xl font-semibold text-gray-800">{tutor.fullName}</h2>
                        {/* Tuition Area */}
                        <p className="text-gray-600">{tutor.tuitionArea}</p>
                        {/* Phone Number */}
                        <p className="text-gray-600">{tutor.phone}</p>
                        {/* Qualification */}
                        <p className="text-sm text-gray-600 mt-2">{tutor.qualification}</p>
                        {/* Fee */}
                        <p className="text-sm text-gray-600 mt-1">Fee: {tutor.fee}k</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindTutorPage;
