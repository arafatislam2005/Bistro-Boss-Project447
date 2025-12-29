import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom"; // Added useLocation

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); // Capture the current location

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user) {
        return children;
    }

    // Pass the current location to the login page using 'state'
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;