import { useContext, useState } from "react"; // Added useState for error feedback
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import Swal from 'sweetalert2';
const SignUp = () => {
    const [firebaseError, setFirebaseError] = useState(""); // State to hold Firebase errors
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset, formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = async (data) => {
        setFirebaseError(""); // Clear previous errors

        try {
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            console.log("User Created Successfully:", loggedUser.email);
            updateUserProfile(data.name, data.PhotoURL)
                .then(() => {
                    console.log('User profile info updated')
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error => console.log(error))

            // Optional: Redirect user after success
            // navigate('/'); 
        } catch (error) {
            console.error("Firebase Error:", error.code);

            // Handle specific Firebase errors
            if (error.code === 'auth/email-already-in-use') {
                setFirebaseError("This email is already registered. Please try logging in.");
            } else {
                setFirebaseError(error.message);
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero text-white  bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Join our community today and enjoy exclusive benefits.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} className="input text-black" placeholder="Name" />
                                {errors.name && <span className="text-red-500">Name is required</span>}

                                <label className="label">Photo URL</label>
                                <input type="text" {...register("PhotoURL", { required: true })} className="input text-black" placeholder="Photo URL" />
                                {errors.PhotoURL && <span className="text-red-500">Photo URL is required</span>}

                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} className="input text-black" placeholder="email" />
                                {errors.email && <span className="text-red-500">Email is required</span>}

                                <label className="label">Password</label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    className="input text-black" placeholder="password" />

                                {/* Password Validation Messages */}
                                {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-600">Password must be at least 6 characters</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-600">Password must have uppercase, lowercase, number, and special character</p>}

                                {/* Display Firebase Error Message to User */}
                                {firebaseError && <p className="text-red-600 font-bold mt-2">{firebaseError}</p>}

                                <input type="submit" value="Sign Up" className="btn btn-neutral mt-4" />
                            </fieldset>
                        </form>
                        <p className="p-4 text-center text-black">
                            <small>Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;