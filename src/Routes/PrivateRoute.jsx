import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; // Ensure this path is correct
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    // This sends the user to login but "remembers" they wanted to go to 'secret'
    return <Navigate to="/login" state={{ from: location }} replace />;
};

// ADD THIS LINE - This is what fixes the "does not provide an export named default" error
export default PrivateRoute;