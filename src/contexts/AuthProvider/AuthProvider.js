import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser); 
        });
        return () => {
            unsubscribe();
        };
    },[])

    const authInfo ={
        signUp,
        login,
        loginWithGoogle,
        user,
        logOut,
        updateUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;