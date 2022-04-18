import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import LoginSocial from "../Login/LoginSocial/LoginSocial";

const SignUp = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth); 


const emailRef = useRef('');
const passwordRef = useRef('');

const navigate = useNavigate();


const navigateLogin = () => {
    navigate('/login')
}
const handleRegister = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email,password);
}
  
  return (
    <div className="container mx-auto">
      <div className="flex justify-center align-middle mt-5 -mb-10">
          <p className="font-medium text-3xl text-gray-600 text-center">
            Welcome to Razib Saha Studio !
            <span className="text-blue-500"> Login.</span>
          </p>
        </div>
        
      <LoginSocial></LoginSocial>

          <form onSubmit={handleRegister} className="space-y-8 py-6">
            <div>
              <input
              ref={emailRef}
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" required
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <input
              ref={passwordRef}
                type="password"
                placeholder="What's the secret word ?"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" required
              />
              
            </div>

            <div className="container mx-auto">
              <button className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">SignUp</span>
              </button>
              <p className="text-sm text-center text-slate-600 mt-3">Already have an account? <Link to="/login" onClick={navigateLogin} className="text-danger pe-auto text-decoration-none"> 
                <span className="no-underline"> Login
                </span>
              </Link></p> 
            </div>
          </form>
          </div>
  );
};

export default SignUp;
