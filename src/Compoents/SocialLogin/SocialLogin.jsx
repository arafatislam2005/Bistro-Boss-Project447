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
                console.log("Step 1: Firebase Login Success", result.user.email);

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                };

                // This sends the data to your Express server
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("Step 2: MongoDB Response", res.data);
                        // If res.data.insertedId exists, a new user was created
                        navigate('/');
                    })
                    .catch(error => {
                        console.error("Step 2 Error (Axios/MongoDB):", error.message);
                        navigate('/');
                    });
            })
            .catch(error => {
                // This handles the 'cancelled-popup' error in your screenshot
                console.error("Step 1 Error (Firebase):", error.code);
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