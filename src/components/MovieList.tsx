import MovieCard from "./MovieCard";

interface Movie {
    poster_path: string;
    id: number;
}

interface MovieListProps {
    title: string;
    movies: Movie[] | null;
}


const MovieList = ({title,movies}: MovieListProps) => {
    if (!movies || movies.length === 0) return null;
    // console.log(movies);
    
    return(
        <div className="px-6">
            <h1 className="text-white text-2xl font-bold py-4">
                {title}
            </h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex scrollbar-hide">
                   { movies.map((movie) => 
                   (<MovieCard key={movie.id} posterPath = {movie.poster_path}/> ))}
                    
                </div>
            </div>
            
        </div>
    )
};

export default MovieList;