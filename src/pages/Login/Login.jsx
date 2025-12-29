import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // 1. Added these imports
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  // 2. Initialize navigate and location
  const navigate = useNavigate();
  const location = useLocation();

  // 3. Determine where the user came from (default to home "/")
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successful",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });

        // 4. Redirect the user back to the 'Secret' page (or wherever they were)
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      });
  };

  const HadelValidteCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero text-white bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Welcome back! Please login to access your secret dashboard.</p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input text-black" placeholder="Email" required />
                <label className="label">Password</label>
                <input type="password" name="password" className="input text-black" placeholder="Password" required />

                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={HadelValidteCaptcha}
                  name="captcha"
                  className="input text-black"
                  placeholder="type the text above"
                />

                <div className="mt-2"><a className="link link-hover text-gray-600">Forgot password?</a></div>
                <input disabled={disabled} type="submit" className="btn btn-primary mt-4" value="Login" />
              </fieldset>
            </form>
            <p className="p-4 text-center text-gray-600">
              <small>New Here? <Link className='text-blue-600 font-bold' to={"/signUp"}>Create an Account</Link></small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;