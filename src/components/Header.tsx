import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import type { User } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

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

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }
    return(
        <div className="absolute top-0 left-0 right-0 px-8 py-6 bg-linear-to-b from-black z-20 flex justify-between">
            <img 
                src="/netflix.svg" 
                alt="Netflix Logo" 
                className="w-40"
            />
            {user && (
            <div className="flex">
                <select className="p-2 bg-gray-900 text-white rounded-lg m-2">
                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>
                <button className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg hover:cursor-pointer"
                onClick={handleGptSearchClick}>
                    GPT Search
                </button>
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