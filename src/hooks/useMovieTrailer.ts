import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useAppSelector } from "../utils/hooks";

interface Video {
    type: string;
    key: string;
}

const useMovieTrailer = (movieId: number) => {
    const dispatch = useDispatch();

    const trailerVideo = useAppSelector(
        (store) => store.movies.trailerVideo
    );

    useEffect(() => {
        if (trailerVideo) return; // prevent duplicate calls

        const getMovieVideos = async () => {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/" +
                    movieId +
                    "/videos?language=en-US",
                API_OPTIONS
            );

            const json = await data.json();

            const filterData = json.results.filter(
                (video: Video) => video.type === "Trailer"
            );

            const trailer =
                filterData.length > 0
                    ? filterData[0]
                    : json.results[0];

            dispatch(addTrailerVideo(trailer));
        };

        getMovieVideos();
    }, [movieId, dispatch, trailerVideo]);
};

export default useMovieTrailer;