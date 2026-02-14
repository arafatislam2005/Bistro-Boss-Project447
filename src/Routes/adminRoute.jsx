import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const adminRoute = (children) => {
    const [user, loading] = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user && isAdmin) {
        return children;
    }

    // This sends the user to login but "remembers" they wanted to go to 'secret'
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default adminRoute;