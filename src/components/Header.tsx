import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import type { User } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Header = ()=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useAppSelector((store): User | null => store.user);
    const handleSignOut = () => {
        signOut(auth).then(()=>{})
        .catch(() => {
            navigate("/error");
        });
    };

     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName ,photoURL} = user;
                dispatch(addUser({uid : uid, email:email , displayName:displayName, photoURL:photoURL}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    },[dispatch,navigate]);

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
                    src={user?.photoURL || USER_AVATAR}
                    className="w-10 h-10 rounded-md"
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