import { useAppSelector } from "../utils/hooks";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useAppSelector(
        (store) => store.movies?.nowPlayingMovies
    );

    if (!movies) return null;

    const mainMovie = movies[5];

    // console.log(mainMovie);

    const {original_title , overview , id}  = mainMovie;

    return (
        <div className="relative h-screen">
            <VideoBackground movieId={id} />

            <div className="absolute top-0 left-0 w-full h-full z-10">
                <VideoTitle 
                    title={original_title} 
                    overview={overview} 
                />
            </div>
        </div>
    );
};

export default MainContainer;