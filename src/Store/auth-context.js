import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Resources/Firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


const AuthContext = createContext()

export function AuthContextProvider({ children }) {

    const [user,setUser] = useState({})

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      });

    const value ={
        user,
        signUp,
        logIn,
        logOut
    }

    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}