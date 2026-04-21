import { useEffect } from "react";
import { POPULAR_URL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useAppSelector } from "../utils/hooks";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useAppSelector(
        (store) => store.movies.popularMovies
    );

    useEffect(() => {
        if (popularMovies) return; // prevent extra API call

        const getPopularMovies = async () => {
            const data = await fetch(POPULAR_URL, API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        };

        getPopularMovies();
    }, [dispatch, popularMovies]);
};

export default usePopularMovies;