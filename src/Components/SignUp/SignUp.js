import React from "react";
import googleIcon from "../../Assets/icons/google-48.png";
import githubIcon from "../../Assets/icons/github-48.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" container mx-auto">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
        <div className="flex justify-center align-middle">
            <p className="font-medium text-3xl text-gray-600 text-center">
              Welcome to Razib Saha Studio! <span className="text-blue-500"> SignUp</span>
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

          <form action="" className="space-y-8 py-6">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" required
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <input
                type="password"
                placeholder="What's the secret word ?"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" required
              />
              
            </div>

            <div className="container mx-auto">
              <button className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">SignUp</span>
              </button>
              <p className="text-sm text-center text-slate-600">Already have an account?<Link to="/login" type="reset" className="w-max p-3 -ml-3">
                <span className="no-underline">
                  Login
                </span>
              </Link></p> 
            </div>
          </form>

          
        </div>
    </div>
  );
};

export default SignUp;
