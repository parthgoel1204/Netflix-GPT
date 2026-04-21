import { useEffect } from "react";
import { NOW_PLAYING_URL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useAppSelector } from "../utils/hooks";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useAppSelector(
        (store) => store.movies.nowPlayingMovies
    );

    useEffect(() => {
        if (nowPlayingMovies) return; // prevent API call

        const getNowPlayingMovies = async () => {
            const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        };

        getNowPlayingMovies();
    }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;