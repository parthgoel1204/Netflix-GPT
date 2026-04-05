import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import type { User } from "../utils/userSlice";



const Header = ()=> {
    const navigate = useNavigate();
    const user = useAppSelector((store): User | null => store.user);
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
                    src={user?.photoURL || "/user-icon.png"}
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