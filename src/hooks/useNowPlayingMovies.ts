import { useEffect } from "react";
import {URL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch(URL, API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        };

        getNowPlayingMovies();
    }, [dispatch]);
};

export default useNowPlayingMovies;