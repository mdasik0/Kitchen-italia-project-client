import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.cofig';

export const AuthContext = createContext(null)

const auth = getAuth(app)




const AuthProvider = ({children}) => {
    const user = null;
    
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authinfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;