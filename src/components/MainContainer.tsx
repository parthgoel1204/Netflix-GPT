import { useAppSelector } from "../utils/hooks";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useAppSelector(
        (store) => store.movies?.nowPlayingMovies
    );

    if (!movies) return null;

    const mainMovie = movies[3];

    // console.log(mainMovie);

    const {original_title , overview}  = mainMovie;

    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview} />
            <VideoBackground  />
        </div>
    );
};

export default MainContainer;