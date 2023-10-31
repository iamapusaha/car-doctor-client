
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node
};

export default PrivateRouter;