import { useAppSelector } from "../utils/hooks";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useAppSelector(store => store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-12">
                <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies = {movies.popularMovies}/>
                <MovieList title={"Newly Added"} movies = {movies.nowPlayingMovies}/>
                <MovieList title={"Horror"} movies = {movies.nowPlayingMovies}/>
                <MovieList title={"Comedy"} movies = {movies.nowPlayingMovies}/>
            </div>
            
        </div>
    )
}
export default SecondaryContainer;