import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { notification, Button, Spin } from 'antd';
import { useNavigate, Link } from 'react-router-dom';  // Import Link
import { useAuthContext } from '../../Context/AuthContext';

const initialState = { name: "", email: "", password: "", role: "" };

export default function RegisterPage() {
    const navigate=useNavigate()
    const { dispatch } = useAuthContext();
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 400 * 1024) { // Image size check (400kb limit)
                notification.error({ message: 'Image size must be below 400KB' });
                return;
            }
            setSelectedImage(file);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, email, password, role } = formData;

        // Check if fields are empty except the image
        if (!name || !email || !password || !role) {
            notification.error({ message: 'Please Fill All Data Carefully' });
            setLoading(false);
            return;
        }

        // Check email format
        if (!validateEmail(email)) {
            notification.error({ message: 'Please enter a valid email address' });
            setLoading(false);
            return;
        }

        try {
            // Register user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;

            let imageUrl = null;
            if (selectedImage) {
                // Upload the image to Firebase Storage using userId as the image ID
                const storageRef = ref(storage, `users/${userId}`);
                const uploadTask = uploadBytesResumable(storageRef, selectedImage);

                await new Promise((resolve, reject) => {
                    uploadTask.on(
                        'state_changed',
                        null,
                        error => reject(error),
                        async () => {
                            imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve();
                        }
                    );
                });
            }
            const userData = {
                id: userId,
                name,
                email,
                role,
                imageUrl, // Null if no image was uploaded
                dateCreated: new Date(),
            };
            // Store user data in Firestore
            await setDoc(doc(firestore, "users", userId), userData);

            notification.success({ message: 'User registered successfully!' });
            dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } });
            setFormData(initialState); // Clear all input fields
            setSelectedImage(null); // Clear image selection
           navigate("/auth/login")
        } catch (error) {
            console.error("Registration failed:", error);
            notification.error('Registration failed!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://getwallpapers.com/wallpaper/full/5/a/7/165895.jpg")' }}>
            <div className="bg-gray-900 bg-opacity-50 shadow p-8 rounded-lg shadow-lg max-w-lg w-full backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Register Here</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Image Upload */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-900 hover:bg-gray-600 flex items-center justify-center">
                                {selectedImage ? (
                                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="object-cover w-full h-full" />
                                ) : (
                                    <FontAwesomeIcon icon={faPlus} className="text-white text-2xl" />
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Input Fields */}
                    <div>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter Your Full Name"
                            className="w-full p-2 mt-2 border border-gray-100 bg-transparent text-white rounded-lg focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-2 mt-2 border border-gray-100 bg-transparent text-white rounded-lg focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-2 mt-2 border border-gray-100 bg-transparent text-white rounded-lg focus:outline-none"
                        />
                    </div>
                    <div>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 mt-2 border border-gray-100 bg-transparent text-white  rounded-lg focus:outline-none"
                        >
                            <option value="parent" className='text-slate-900'>Parent</option>
                            <option value="teacher" className='text-slate-900'>Teacher</option>
                        </select>
                    </div>

                    {/* Already have an account? Login */}
                    <div className="text-center text-white">
                        Already have an account? <Link to="/auth/login" className="text-slate-400 hover:text-gray-300 ">Login</Link>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            htmlType="submit"
                            className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-600 focus:outline-none"
                            loading={loading} // Ant Design loader
                        >
                            {loading ? <Spin /> : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
