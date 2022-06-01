import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../utils/Firebase'
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    sendPasswordResetEmail, 
    updatePassword,
    deleteUser,
    reauthenticateWithCredential
 } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore' 

const AuthContext = createContext()

export function AuthContextProvider({ children }) {

    const [user,setUser] = useState({})

    function signUp(email,password){
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut() {
        return signOut(auth)
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth,email)
    }

    function changePassword(password) {
        return updatePassword(user,password)
    }

    function deleteAccount(){
        return deleteUser(user)
    }

    function reAuthenticateUser(credentials){
        return reauthenticateWithCredential(user, credentials)
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
        logOut,
        forgotPassword,
        changePassword,
        deleteAccount,
        reAuthenticateUser
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