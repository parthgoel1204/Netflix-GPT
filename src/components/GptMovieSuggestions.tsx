import { useAppSelector } from "../utils/hooks";
import MovieList from "./MovieList";

interface Movie {
    id: number;
    poster_path: string;
}
const GptMovieSuggestions = () => {
    const {movieNames , movieResults} = useAppSelector(store => store.gpt) as {
         movieNames: string[] | null;
        movieResults: Movie[][] | null;
    };
     if (!movieNames || !movieResults) return null;

    return(
        <div className="p-4 m-4 bg-black/70 text-white ">
            <div>
                {movieNames.map((movieName: string, index: number) => (
                    <MovieList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))}
            </div>
        </div>
    )
};

export default GptMovieSuggestions;