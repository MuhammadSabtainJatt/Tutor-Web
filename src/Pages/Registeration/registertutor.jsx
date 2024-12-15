import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { message } from 'antd';
import { useAuthContext } from '../../Context/AuthContext';
import { firestore } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

const initialState = {
  fullName: '', gender: '', cnic: '', phone: '', qualification: '', address: '', tuitionArea: '', otherArea: '', experience: '', conveyance: '', fee: '', termsAccepted: false,
}


export default function TutorRegistration() {
  const { authData } = useAuthContext()
  const [formData, setFormData] = useState({
    
    fullName: `${authData.name}`, gender: '', cnic: '', phone: '', qualification: '', address: '', tuitionArea: '', otherArea: '', experience: '', conveyance: '', fee: '', termsAccepted: false, id: `${authData.id}`,imageURL:authData.imageUrl
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      'fullName', 'gender', 'cnic', 'phone', 'qualification',
      'address', 'tuitionArea', 'experience', 'conveyance', 'fee'
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        const fieldLabel = document.querySelector(`[name=${field}]`);
        fieldLabel.scrollIntoView({ behavior: 'smooth' });
        message.error(`Please fill out the ${fieldLabel.previousSibling.textContent.trim()}`);
        return false;
      }
    }

    if (!formData.termsAccepted) {
      message.error("Please accept the terms and conditions");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
console.log(formData)
return
        
        await setDoc(doc(firestore, "TutorData", authData.id), formData);
        message.success("Registration successful!");
      }
      setFormData(initialState)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-5xl text-gray-900 font-semibold text-center my-6">Tutor Registration</h1>
      <p className="text-center text-sm md:text-lg mx-6 max-w-2xl mb-6">
        Respected tutors/teachers, welcome to Read Home Tuition Faisalabad! We are excited to have you as a potential tutor.
        Please fill out the form below to register with us. It will take a few minutes to complete and join our educational community.
      </p>
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-3xl text-gray-800">
        <h1 className="text-2xl font-semibold text-center  mb-6">Tutor Registration</h1>

        {/* Divider with Star Icon */}
        <div className="relative mb-6">
          <hr className="border-gray-300" />
          <span className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-gray-100 px-2 text-gray-500 text-xl">
            <FaStar />
          </span>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="col-span-2">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
          </div>

          {/* Gender Radio Buttons */}
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Female
              </label>
            </div>
          </div>

          {/* Other Fields */}
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-gray-700">
                CNIC (without dashes) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cnic"
                maxLength={13}
                placeholder="Enter your CNIC number"
                value={formData.cnic}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                maxLength={11}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Qualification <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="qualification"
                placeholder="Enter your qualifications"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Current Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your current address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Suited Areas of Tuition */}
            <div>
              <label className="block text-gray-700">
                Suited Areas of Tuition in Faisalabad{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="tuitionArea"
                value={formData.tuitionArea}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              >
                <option value="">Select Area</option>
                {[
                  "Aziz Bhatti",
                  "Cantonment",
                  "Data Gunj Buksh",
                  "Gulberg",
                  "Iqbal Town",
                  "Nishtar",
                  "Ravi",
                  "Samanabad",
                  "Shalamar",
                  "Wagha",
                ].map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
              {formData.tuitionArea === "Other" && (
                <textarea
                  name="otherArea"
                  placeholder="Write area if you selected 'Other'"
                  value={formData.otherArea}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                />
              )}
            </div>

            <div>
              <label className="block text-gray-700">
                Teaching Experience (Years) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="experience"
                placeholder="Enter your experience in years"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
          </div>

          {/* Conveyance Radio Button */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Do you have your own conveyance? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="conveyance"
                  value="yes"
                  checked={formData.conveyance === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="conveyance"
                  value="no"
                  checked={formData.conveyance === "no"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                No
              </label>
            </div>
          </div>

          {/* Expected Fee and Terms */}
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-gray-700">
                Minimum Expected Fee (In general) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="fee"
                placeholder="Enter expected fee amount"
                value={formData.fee}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label className="text-gray-700">
                I have read and accepted the terms and conditions
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="p-2 text-center mx-auto bg-gray-800 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>


      </div>

      {/* Terms & Conditions Section */}
      <div className="max-w-3xl mt-10">
        <div className="relative mb-4">
          <hr className="border-gray-800" />
          <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-gray-500 px-2">
            <FaStar className="text-gray-900" />
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4 border-b-2 border-gray-400 pb-2">
          Terms & Conditions
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>The tutor is expected to adhere to the agreed-upon schedule without taking unscheduled  days off. In the event of an emergency, the tutor must promptly inform the student/parent and seek their permission. In such instances, the tutor is required to reschedule the missed class for another day.</li>

          <li>
            The tutor is strictly prohibited from engaging in any form of physical harm, including pushing, slapping, hitting, or any other actions that may cause harm to the student.</li>

          <li>The tutor’s interactions with the student should focus solely on academic matters and relevant topics. Irrelevant discussions should be avoided.</li>

          <li>A formal and professional relationship must be maintained between the tutor and the student/parent at all times.</li>

          <li>Personal discussions or relationships between the tutor and the student/parent outside the realm of academics are not permitted.</li>
        </ul>
      </div>
    </div>
  );
}
