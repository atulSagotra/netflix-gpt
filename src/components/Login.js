import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen bg-black/60 flex flex-col justify-center items-center">
      <Header />
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/CA-en-20260112-TRIFECTA-perspective_a8b0e8b6-de03-489d-91c1-31028f8ede3c_large.jpg"
          alt="background"
        />
      </div>
      <form className="p-10 bg-black/20 rounded-md flex flex-col max-w-md w-full text-white p-2">
        <h1 className="text-3xl font-bold mb-6 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 bg-black/80"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-2 my-2 bg-black/80"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-black/80"
        />
        <button className="bg-red-600 p-2 my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 mt-4">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
