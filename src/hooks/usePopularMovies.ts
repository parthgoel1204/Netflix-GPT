import { useEffect } from "react";
import {POPULAR_URL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getPopularMovies = async () => {
            const data = await fetch(POPULAR_URL, API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        };

        getPopularMovies();
    }, [dispatch]);
};

export default usePopularMovies;