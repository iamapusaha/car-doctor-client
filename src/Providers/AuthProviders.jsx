import { getAuth } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import app from "../firebase/firebase.config";
export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, serLoading] = useState(true)
    const authInfo = {
        user,
        loading
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