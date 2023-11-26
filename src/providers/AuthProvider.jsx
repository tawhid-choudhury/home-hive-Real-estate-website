import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
// import useAxiosInstance from '../hooks/axios/useAxiosInstance';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    // console.log(children);
    // const axiosInstance = useAxiosInstance();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google
    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // email registration
    const signUpEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateNamePhoto = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    // email login
    const loginEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // track user login
    useEffect(() => {
        const uns = onAuthStateChanged(auth, (currentUser) => {
            // const userEmail = currentUser?.email || user?.email;
            // const loggedUser = { email: userEmail }
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
            // if (currentUser) {

            //     axiosInstance.post("/jwt", loggedUser)
            //         .then(res => {
            //             console.log(res.data);
            //         })
            // } else {
            //     axiosInstance.post('/logout', loggedUser).then(res => { res.data })
            // }
        });
        return () => {
            uns();
        }
    }, [])

    const p = { user, setUser, signUpEmailPass, loginEmailPass, logout, loading, setLoading, googleSignin, updateNamePhoto }

    return (
        <AuthContext.Provider value={p}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}