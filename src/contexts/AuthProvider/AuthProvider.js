import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({})

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        fetch(`https://assignment-12-server-steel-delta.vercel.app/users/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserInfo(data)
        })
    },[user?.email])

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const updateUser = (userInfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser); 
            setLoading(false);
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
        updateUser,
        loading,
        userInfo
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