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