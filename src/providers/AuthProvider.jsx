import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
// import { getToken } from '../api/auth';
import axiosSecure from '../api';
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
        return signInWithRedirect(auth, googleProvider);
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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {

                axiosSecure.post("/jwt", loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                axiosSecure.post('/logout', loggedUser).then(res => { res.data })
            }
        });
        return () => {
            uns();
        }
    }, [user?.email])

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