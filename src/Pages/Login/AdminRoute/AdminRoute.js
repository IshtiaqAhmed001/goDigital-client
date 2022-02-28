import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    let { user, admin, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) { return <CircularProgress color="inherit" /> }

    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} replace />;

};

export default AdminRoute;