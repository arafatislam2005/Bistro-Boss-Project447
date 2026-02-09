import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {

                    email: result.user?.email,
                    name: result.user?.displayName,
                };

                // POST to backend to create user in MongoDB
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("Database updated:", res.data);
                        navigate('/');
                    })
                    .catch(err => {
                        console.error("MongoDB Post Error:", err.message);
                        // Still navigate so user isn't stuck
                        navigate('/');
                    });
            })
            .catch(error => {
                // This handles the "auth/cancelled-popup-request" seen in your screenshot
                if (error.code !== 'auth/popup-closed-by-user') {
                    console.error("Firebase Login Error:", error.code);
                }
            });
    };

    return (
        <div className="p-8">
            <div className="divider"></div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full"
            >
                <FaGoogle className="mr-2" />
                Google
            </button>
        </div>
    );
};

export default SocialLogin;