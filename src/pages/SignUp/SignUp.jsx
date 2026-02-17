import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Compoents/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const [firebaseError, setFirebaseError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setFirebaseError("");
        try {
            const result = await createUser(data.email, data.password);
            await updateUserProfile(data.name, data.PhotoURL);

            const userInfo = {
                name: data.name,
                email: data.email,
            };

            const res = await axiosPublic.post('/users', userInfo);

            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account Created Successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#1f2937',
                    color: '#fff'
                });
                navigate('/');
            }
        } catch (error) {
            setFirebaseError(error.code === 'auth/email-already-in-use'
                ? "This email is already registered."
                : error.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-4 font-sans">
                <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12">


                    <div className="text-center lg:text-left text-white lg:w-1/2 space-y-6">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                            Join <span className="text-orange-500">Us!</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0">
                            Create an account to unlock exclusive discounts and track your orders.
                        </p>
                        <div className="hidden lg:block w-24 h-1 bg-orange-500 rounded-full"></div>
                    </div>


                    <div className="w-full max-w-lg">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <h2 className="text-2xl font-bold text-white text-center mb-2 col-span-full">Create Account</h2>

                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-gray-300 ml-1">Full Name</label>
                                    <input type="text" {...register("name", { required: true })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-gray-500" placeholder="John Doe" />
                                    {errors.name && <span className="text-xs text-red-400">Name is required</span>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-gray-300 ml-1">Photo URL</label>
                                    <input type="text" {...register("PhotoURL", { required: true })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-gray-500" placeholder="https://image.com/..." />
                                    {errors.PhotoURL && <span className="text-xs text-red-400">Photo is required</span>}
                                </div>

                                <div className="space-y-1 col-span-full">
                                    <label className="text-xs font-medium text-gray-300 ml-1">Email Address</label>
                                    <input type="email" {...register("email", { required: true })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-gray-500" placeholder="john@example.com" />
                                    {errors.email && <span className="text-xs text-red-400">Valid email is required</span>}
                                </div>


                                <div className="space-y-1 col-span-full">
                                    <label className="text-xs font-medium text-gray-300 ml-1">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })}
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-500 pr-10"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                                        >
                                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                        </button>
                                    </div>
                                    {errors.password?.type === "required" && <p className="text-xs text-red-400">Password required</p>}
                                    {errors.password?.type === "minLength" && <p className="text-xs text-red-400">Min 6 characters</p>}
                                    {errors.password?.type === "pattern" && <p className="text-xs text-red-400 text-[10px] leading-tight">Must include: Uppercase, Lowercase, Number, & Special Char</p>}
                                </div>

                                {firebaseError && <p className="text-red-400 text-sm font-semibold col-span-full">{firebaseError}</p>}

                                <button type="submit" className="w-full py-3 col-span-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-600/30 mt-2">
                                    Sign Up
                                </button>
                            </form>

                            <div className="px-8 pb-8 text-center space-y-4">
                                <p className="text-gray-400 text-sm">
                                    Already have an account? <Link className="text-orange-400 font-bold hover:underline ml-1" to="/login">Login</Link>
                                </p>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#1a1c23] px-2 text-gray-500">Or join with</span></div>
                                </div>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;