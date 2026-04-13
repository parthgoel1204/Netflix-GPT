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
        <div>
            <iframe 
            className="w-screen aspect-video" 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; 
            picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
        </div>
    );
};

export default VideoBackground;