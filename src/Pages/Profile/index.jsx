import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { authData } = useAuthContext();

  useEffect(() => {
    // Fetch profile data from Firestore
    const fetchProfile = async () => {
      try {
        const docRef = doc(firestore, "TutorData", authData.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfileData(data);
          setFormData(data); // Prepopulate form data
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [authData.id]);

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(firestore, "TutorData", authData.id);
      await updateDoc(docRef, formData); // Update Firestore document
      setProfileData(formData); // Update local state
      setEditing(false); // Exit editing mode
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile data:", error);
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!profileData) {
    return <div className="min-h-screen flex items-center justify-center">Profile not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        {editing ? (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-6">
              {/* Profile Image */}
              <img
                src={formData.imageURL}
                alt={formData.fullName}
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2 mb-2"
                  placeholder="Full Name"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2 mb-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Detailed Information */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Details</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                  placeholder="Qualification"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                  placeholder="Address"
                />
                <input
                  type="text"
                  name="tuitionArea"
                  value={formData.tuitionArea}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                  placeholder="Tuition Area"
                />
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                  placeholder="Experience"
                />
                <select
                  name="conveyance"
                  value={formData.conveyance}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <input
                  type="number"
                  name="fee"
                  value={formData.fee}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded p-2"
                  placeholder="Fee"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex items-center space-x-6">
              <img
                src={profileData.imageURL}
                alt={profileData.fullName}
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{profileData.fullName}</h1>
                <p className="text-sm text-gray-600">{profileData.gender === "male" ? "Male" : "Female"}</p>
                <p className="text-sm text-gray-600">Phone: {profileData.phone}</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Details</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <strong>Qualification:</strong> {profileData.qualification}
                </li>
                <li>
                  <strong>Address:</strong> {profileData.address}
                </li>
                <li>
                  <strong>Tuition Area:</strong> {profileData.tuitionArea}
                </li>
                <li>
                  <strong>Experience:</strong> {profileData.experience} years
                </li>
                <li>
                  <strong>Conveyance:</strong> {profileData.conveyance === "yes" ? "Yes" : "No"}
                </li>
                <li>
                  <strong>Fee:</strong> ${profileData.fee} per hour
                </li>
              </ul>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
