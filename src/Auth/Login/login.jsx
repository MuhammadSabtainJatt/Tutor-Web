import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { notification, Spin } from 'antd';
import { useAuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const initialState = { email: "", password: "" };

export default function LoginPage() {
    const navigate = useNavigate()
    const { readUserProfile, isAuth } = useAuthContext()
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false); // Added loading state

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        // Check if both fields are filled
        if (!email || !password) {
            notification.error({ message: 'Both email and password must be filled!' });
            return;
        }
    
        // Validate email format
        if (!validateEmail(email)) {
            notification.error({ message: 'Please enter a valid email address' });
            return;
        }
    
        setLoading(true); // Start loading spinner
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Wait until the profile is read before navigating
            await readUserProfile(user); 
            setFormData(initialState);
            notification.success({ message: 'Login successful!' });
    
            // Navigate to home page after profile is loaded
            navigate('/'); 
        } catch (error) {
            console.error("Login failed:", error);
            notification.error({ message: 'Login failed!' });
        } finally {
            setLoading(false); // Stop loading spinner after login attempt
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://getwallpapers.com/wallpaper/full/5/a/7/165895.jpg")' }}>
            <div className="bg-gray-900 bg-opacity-50 shadow p-8 rounded-lg shadow-lg max-w-lg w-full backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Login Here</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Email Field */}
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
                    {/* Password Field */}
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

                    <div className="text-center text-white">
                        Don't have an account? <Link to="/auth/register" className="text-slate-400 hover:text-gray-300 ">Register</Link>
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Spin spinning={loading}>
                            <button
                                type="submit"
                                className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-600 focus:outline-none"
                                disabled={loading} // Disable button when loading
                            >
                                {loading ? <Spin /> : "Login"}
                            </button>
                        </Spin>
                    </div>
                </form>
            </div>
        </div>
    );
}
