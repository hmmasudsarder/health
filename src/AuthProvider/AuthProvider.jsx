import { createContext, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup,  } from "firebase/auth";
import app from "../Firebase/Firebase.confige";
import swal from "sweetalert";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const userLogin = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        swal("Good job!", "You clicked the button!", "success")
     }
     const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const googleLogin = () => {
        signInWithPopup(auth, provider)
     }
    const authInfo = {
        user,
        userLogin,
        createUser,
        googleLogin
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;