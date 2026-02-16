import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Compoents/SocialLogin/SocialLogin';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      Swal.fire({
        title: "Welcome Back!",
        text: "Login Successful",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        background: '#1f2937',
        color: '#fff'
      });
      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        background: '#1f2937',
        color: '#fff'
      });
    }
  };

  const handleValidateCaptcha = (e) => {
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


      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-4">

        <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-12">


          <div className="text-center lg:text-left text-white lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Bistro <span className="text-orange-500">Boss</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto lg:mx-0">
              Experience the finest flavors in town. Log in to manage your orders and explore your secret dashboard.
            </p>
            <div className="hidden lg:block">

              <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>


          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
              <form onSubmit={handleLogin} className="p-8 space-y-5">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Login to Account</h2>


                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                    placeholder="name@example.com"
                    required
                  />
                </div>


                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                    placeholder="••••••••"
                    required
                  />
                </div>


                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <label className="block mb-2">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    className="w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white text-sm outline-none focus:border-orange-500"
                    placeholder="Type the characters above"
                  />
                </div>

                <div className="flex justify-end">
                  <button type="button" className="text-sm text-orange-400 hover:text-orange-300 transition-colors">
                    Forgot password?
                  </button>
                </div>

                <button
                  disabled={disabled}
                  type="submit"
                  className={`w-full py-3 rounded-xl font-bold text-white transition-all transform active:scale-95 ${disabled ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30'}`}
                >
                  Sign In
                </button>
              </form>


              <div className="px-8 pb-8 text-center space-y-6">
                <p className="text-gray-400 text-sm">
                  New here? <Link className='text-orange-400 font-bold hover:underline ml-1' to="/signUp">Create an account</Link>
                </p>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-transparent px-2 text-gray-500">Or continue with</span></div>
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

export default Login;