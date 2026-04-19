import { useAppSelector } from "../utils/hooks";
import type { langKey } from "../utils/languages";
import lang from "../utils/languages";

const GptSearchBar = () => {
    const langKey = useAppSelector(
        (store) => store.config.lang
    ) as langKey;

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input 
                    type="text" 
                    className="p-4 m-4 col-span-9 bg-white" 
                    placeholder={lang[langKey].gptSearchPlaceholder} 
                />
                <button 
                    className="py-2 px-4 bg-red-700 text-white col-span-3 m-4 rounded-lg">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;