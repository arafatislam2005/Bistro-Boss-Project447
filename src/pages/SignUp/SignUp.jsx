import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";


const signUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const { createUser } = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero text-white bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="Name" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span>This Name is required</span>}

                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="email" />
                                {errors.email && <span>This Email is required</span>}

                                <label className="label">Password</label>
                                <input type="password" {...register("password",
                                    { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                                    name="password" className="input" placeholder="password" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600" >Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600" >Password is must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600" >Password is must be less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600" >Password is must be One uppercase One Lower case, One Number
                                        and One Special character</p>
                                )}

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input type="submit" className="btn btn-neutral mt-4" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default signUp;