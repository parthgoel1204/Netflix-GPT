import { IMG_CDN_URL } from "../utils/constants";

interface MovieCardProps {
    posterPath: string| null;
}

const MovieCard = ({posterPath}:MovieCardProps) => {

    if (!posterPath) return null;
    return(
        <div className="w-48 pr-4 hover:scale-110 transition-transform duration-300">
            <img alt="Movie Card"
            src={IMG_CDN_URL + posterPath}/>
        </div>
    )
};

export default MovieCard;