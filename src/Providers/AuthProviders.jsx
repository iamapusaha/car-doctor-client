import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import app from "../firebase/firebase.config";
export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, serLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node
};

export default AuthProviders;