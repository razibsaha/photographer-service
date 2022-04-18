import React from "react";
import googleIcon from "../../../Assets/icons/google-48.png";
import githubIcon from "../../../Assets/icons/github-48.png";

const LoginSocial = () => {
  return (
    <div className="container mx-auto py-3 px-6 sm:p-20 xl:w-10/12">
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <button className="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
          <div className="flex items-center space-x-4 justify-center">
            <img src={googleIcon} className="w-5" alt="" />
            <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
              Continue with Google
            </span>
          </div>
        </button>
        <button className="h-12 px-6 rounded-lg bg-slate-500 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
          <div className="flex items-center space-x-4 justify-center">
            <img src={githubIcon} className="w-5" alt="" />
            <span className="block w-max font-medium tracking-wide text-sm text-slate-50">
              Continue with Github
            </span>
          </div>
        </button>
      </div>

      <div className="mt-12 border-t">
        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
          Or
        </span>
      </div>
    </div>
  );
};

export default LoginSocial;
