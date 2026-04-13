import { useAppSelector } from "../utils/hooks";
import useMovieTrailer from "../hooks/useMovieTrailer";

interface VideoBackgroundProps {
    movieId: number;
}
interface TrailerVideo {
    key: string;
}

const VideoBackground = ({movieId}:VideoBackgroundProps) => {
    const trailerVideo = useAppSelector(store => store.movies?.trailerVideo as TrailerVideo|null);
    useMovieTrailer(movieId );
    return (
        <div className="w-full h-screen overflow-hidden relative" >
            <iframe 
            className="absolute top-0 left-0 w-full h-screen scale-150"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&loop=1"}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; 
            picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            {/* <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" /> */}
        </div>
    );
};

export default VideoBackground;