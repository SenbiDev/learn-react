import MovieCard from "./MovieCard";

const movies = [
    {
        image:'./public/images/movies/last_bullet 9.png',
        tittle:'Another Simple Fayor',
        genre:'Comedy',
    },
    {
        image:'./public/images/movies/last_bullet 9 (1).png',
        tittle:'BAD INFLUENCE',
        genre:'Romance',
    },
    {
        image:'./public/images/movies/last_bullet 9 (2).png',
        tittle:'Banger',
        genre:'Comedy',
    },
    {
        image:'./public/images/movies/last_bullet 9 (3).png',
        tittle:'Court State VS A Nobody',
        genre:'Drama',
    },
    {
        image:'./public/images/movies/last_bullet 9 (4).png',
        tittle:'Crazyxy',
        genre:'Thriller',
    },
    {
        image:'./public/images/movies/last_bullet 9 (5).png',
        tittle:'Demon City',
        genre:'Action',
    },
    {
        image:'./public/images/movies/last_bullet 9 (6).png',
        tittle:'Exterritorial',
        genre:'Fight',
    },
    {
        image:'./public/images/movies/last_bullet 9 (7).png',
        tittle:'Havoc',
        genre:'Fight',
    },
    {
        image:'./public/images/movies/last_bullet 9 (8).png',
        tittle:'I Hostage',
        genre:'Criminal',
    },
    {
        image:'./public/images/movies/last_bullet 9 (9).png',
        tittle:'Jack',
        genre:'Adventure',
    },
    {
        image:'./public/images/movies/last_bullet 9 (10).png',
        tittle:'My Fault London',
        genre:'Romance',
    },
    {
        image:'./public/images/movies/last_bullet 9 (11).png',
        tittle:'Nonnas',
        genre:'Comedy',
    },
    {
        image:'./public/images/movies/last_bullet 9 (12).png',
        tittle:'Renner',
        genre:'Sci-Fi',
    },
    {
        image:'./public/images/movies/last_bullet 9 (13).png',
        tittle:'The Twister',
        genre:'Documentary',
    },
    {
        image:'./public/images/movies/last_bullet 9 (14).png',
        tittle:'Bridget',
        genre:'Romance',
    },
]

const GridMovie = () => {
    return (
        <div className="w-full grid grid-cols-3 grid-rows-5 gap-16 max-[769px]:gap-[20px] max-[625px]:gap-[15px] max-[502px]:grid-cols-2 max-[502px]:grid-rows-8 max-[413px]:grid-cols-1 max-[413px]:grid-rows-15 max-[413px]:gap-[30px]">
            {movies.map((movie, index) => (
            <MovieCard
                key={index}
                image={movie.image}
                tittle={movie.tittle}
                genre={movie.genre}
            />
        ))}
        </div>
    )
}

export default GridMovie;