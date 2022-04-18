import React, { useRef } from "react";
import googleIcon from "../../Assets/icons/google-48.png";
import githubIcon from "../../Assets/icons/github-48.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container mx-auto">
      <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
        <div className="flex justify-center align-middle">
          <p className="font-medium text-3xl text-gray-600 text-center">
            Welcome to Razib Saha Studio !{" "}
            <span className="text-blue-500"> Login.</span>
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <button className="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
            <div className="flex items-center space-x-4 justify-center">
              <img src={googleIcon} className="w-5" alt="" />
              <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                with Google
              </span>
            </div>
          </button>
          <button className="h-12 px-6 rounded-lg bg-slate-500 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
            <div className="flex items-center space-x-4 justify-center">
              <img src={githubIcon} className="w-5" alt="" />
              <span className="block w-max font-medium tracking-wide text-sm text-slate-50">
                with Github
              </span>
            </div>
          </button>
        </div>

        <div className="mt-12 border-t">
          <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
            Or
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 py-6">
          <div>
            <input
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              required
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <input
              ref={passwordRef}
              type="password"
              placeholder="What's the secret word ?"
              className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              required
            />
            <button type="reset" className="w-max p-3 -mr-3">
              <span className="text-sm tracking-wide text-sky-600">
                Forgot password ?
              </span>
            </button>
          </div>

          <div className="container mx-auto">
            <button className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
              <span className="font-semibold text-white text-lg">Login</span>
            </button>
            <p className="text-sm text-center text-slate-600 mt-3">
              Don't have an account? Please
              <Link to='/signup' className="text-danger pe-auto text-decoration-none" onClick={navigateSignUp}> SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
