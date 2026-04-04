import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useState,useRef } from "react";
// import { checkValidData } from "../utils/validate";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        // console.log(email.current?.value);
        // console.log(password.current?.value);
        
        const message = checkValidData(
            email.current?.value || "",
            password.current?.value || ""
        );

        setErrorMessage(message);
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
    <div>
        <Header/>
        <div className="absolute">
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"
            alt="backgroundImg"
            />
        </div>
        <form
            onSubmit={(e) => e.preventDefault()} 
            className="absolute m-36 text-white p-12 bg-black w-3/12 mx-auto right-0 left-0 opacity-80">
            <h1 className="font-bold text-4xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
            (<input 
                type="text" 
                placeholder="Full Name" 
                className="my-4 p-4 w-full bg-gray-700 rounded-lg" 
            />)}
            <input 
                ref={email}
                type="text" 
                placeholder="Email or Phone Number" 
                className="my-4 p-4 w-full bg-gray-700 rounded-lg" />
            <input 
                ref={password}
                type="password" 
                placeholder="Password" 
                className="my-4 p-4 w-full bg-gray-700 rounded-lg" />
            <p className="text-red-500 text-lg py-2 font-bold">
                {errorMessage}
            </p>
            <button 
                className="p-4 my-6 cursor-pointer bg-red-700 w-full rounded-lg"
                onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p 
                className="py-4 cursor-pointer"
                onClick={toggleSignInForm}>
                    {isSignInForm ? "New to NetFlix? Sign Up Now" : "Already Registered? Sign In Now"}
            </p>
        </form>
    </div>
    )
};

export default Login;