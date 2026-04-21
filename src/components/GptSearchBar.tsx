import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import type { langKey } from "../utils/languages";
import lang from "../utils/languages";
import groq from "../utils/groq";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useAppDispatch();
    const langKey = useAppSelector(
        (store) => store.config.lang
    ) as langKey;
    const searchText = useRef<HTMLInputElement>(null);

    const searchMovieTMDB = async (movie:string) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();

        return json.results;
    }

    const handleGptSearchClick = async () => {
        // console.log(searchText.current?.value);

        const query = "Act as a movie reccomendation system and suggest some movies for the query: " + searchText.current?.value + ". Only give me names of 5 movies all comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Inception, Avengers Endgame, Dhurandar. ";
        const results = await groq.chat.completions.create({
        messages: [
            {
            role: "user",
            content: query,
            },
        ],
        model: "openai/gpt-oss-20b",
        });
        // console.log(results.choices?.[0]?.message?.content);
        const movies = results.choices?.[0]?.message?.content?.split(",");

        if(!movies) return;
        const promiseArray = movies?.map((movie:string) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames: movies, movieResults: tmdbResults}));
        
    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={searchText}
                    type="text" 
                    className="p-4 m-4 col-span-9 bg-white" 
                    placeholder={lang[langKey].gptSearchPlaceholder} 
                />
                <button 
                    className="py-2 px-4 bg-red-700 text-white col-span-3 m-4 rounded-lg hover:cursor-pointer"
                    onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;