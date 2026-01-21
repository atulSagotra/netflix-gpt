import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage("");
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Handle sign in or sign up logic here
    setErrorMessage(
      checkValidData(
        isSignInForm,
        name.current?.value,
        email.current.value,
        password.current.value,
      ),
    );
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
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 bg-black/80"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2 my-2 bg-black/80"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-black/80"
        />
        <button className="bg-red-600 p-2 my-2" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && (
          <p className="text-red-500 pt-2 whitespace-pre-wrap">
            {errorMessage}
          </p>
        )}
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
