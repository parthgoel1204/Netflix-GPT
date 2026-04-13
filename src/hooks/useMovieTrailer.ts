import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

interface Video {
    type: string;
    key: string;
}


const useMovieTrailer = (movieId: number) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video : Video) => video.type === "Trailer");
        const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        };
        getMovieVideos();
    },[movieId,dispatch]);
};

export default useMovieTrailer;