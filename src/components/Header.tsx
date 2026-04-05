import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=> {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(()=>{
            navigate("/");
        }).catch(()=>[
            navigate("/error"),
        ]);
    };
    return(
        <div className="absolute w-screen px-8 py-6 bg-linear-to-b from-black z-10 flex justify-between">
            <img 
                src="/netflix.svg" 
                alt="Netflix Logo" 
                className="w-40"
            />
            {user && (<div className="flex">
                <img
                    alt="usericon"
                    src="https://netflixproject-mu.vercel.app/user-icon.png"
                />
                <button
                    onClick={handleSignOut} 
                    className="font-bold text-white cursor-pointer">
                        (Sign Out)
                </button>
            </div>)}
        </div>
    );
};

export default Header;