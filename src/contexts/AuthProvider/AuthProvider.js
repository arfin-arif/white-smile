import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.Config';
export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // to create new user 
    const createUserWithEAndP = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // to login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //auto login 
    const loginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // to logout 
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            console.log(presentUser)
            setUser(presentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        createUserWithEAndP,
        signIn,
        loginProvider,
        logOutUser,
        loading

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