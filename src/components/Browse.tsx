import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useAppSelector } from "../utils/hooks";

const Browse = () => {
    const showGptSearch = useAppSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    return (
    <>
        <Header/>
        {showGptSearch ? (
            <GptSearch/>
        ): (
            <>
                <MainContainer/>
                <SecondaryContainer/>
            </>
        )}
        
    </>
    )
};

export default Browse;