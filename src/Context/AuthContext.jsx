import React, { useContext, useState, createContext, useEffect, useReducer } from 'react';
import { auth, firestore } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { notification } from 'antd';

// Context for authentication state
const AuthContext = createContext();

const initialState = { isAuth: false, user: {} };

export default function AuthContextProvider({ children }) {
    // Reducer to manage auth state
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_LOGGED_IN":
                return { isAuth: true, user: action.payload.user };
            case "SET_LOGGED_OUT":
                return initialState;
            default:
                return state;
        }
    };

    const [isAppLoading, setIsAppLoading] = useState(true);  // Track if the auth state is still loading
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // If user is found, fetch their profile
                readUserProfile(user);
            } else {
                // If no user is found, mark as logged out
                dispatch({ type: "SET_LOGGED_OUT" });
                setIsAppLoading(false);  // Stop loading once we know there's no user
            }
        });

        return () => unsubscribe();  // Clean up the listener when the component unmounts
    }, []);

    // Fetch user profile from Firestore
    const readUserProfile = async (user) => {
        try {
            const docRef = doc(firestore, "users", user.uid);  // Use user.uid instead of user.id
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                // If user data exists, set logged-in state
                dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } });
            } else {
                // If no data found, notify the user
                notification.error({ message: "User data not found. Please try again or contact support team" });
                dispatch({ type: "SET_LOGGED_OUT" });  // Set logged out if user profile is missing
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
            dispatch({ type: "SET_LOGGED_OUT" });  // If there's an error, log out
        } finally {
            setIsAppLoading(false);  // Stop loading whether the fetch succeeds or fails
        }
    };

    // If the app is still loading the auth state, show a loading screen
    if (isAppLoading) {
        return<div class='flex space-x-2 justify-center items-center bg-slate-900 h-screen dark:invert'>
        <span class='sr-only'>Loading...</span>
         <div class='h-8 w-8 bg-slate-100 rounded-full animate-bounce [animation-delay:-0.9s]'></div>
       <div class='h-8 w-8 bg-slate-100 rounded-full animate-bounce [animation-delay:-0.9s]'></div>
       <div class='h-8 w-8 bg-slate-100 rounded-full animate-bounce'></div>
   </div>;  // You can replace this with a custom loader
    }

    // Render children only once the auth state is known
    return (
        <AuthContext.Provider value={{ isAppLoading, ...state, dispatch, readUserProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook for using the auth context
export const useAuthContext = () => useContext(AuthContext);
