import Header from "../components/Header";
import Main from "../components/Main";
import TopMovies from "../components/TopMovies";
import NewMovies from "../components/NewMovies";
import GridMovie from "../components/GridMovie";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const Movies = () => {
    return(
        <>
            <div className="bg-[#111111] m-[0]">
                <Header/>
                <Main>
                    <TopMovies/>
                    <NewMovies/>
                    <GridMovie>
                        <MovieCard/>
                    </GridMovie>
                </Main>
                <Footer/>
            </div>
        </>
    );
};

export default Movies;