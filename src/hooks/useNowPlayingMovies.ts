import { useEffect } from "react";
import {NOW_PLAYING_URL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        };

        getNowPlayingMovies();
    }, [dispatch]);
};

export default useNowPlayingMovies;