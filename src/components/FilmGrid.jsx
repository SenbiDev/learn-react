import FilmCard from "./FilmCard";

const FilmGrid = () => {
  const filmData = [
    { img: "public/images/movies/last_bullet 9.png", title: "Another Simple Fayor", genre: "Comedy" },
    { img: "public/images/movies/last_bullet 9 (1).png", title: "BAD INFLUENCE", genre: "Romance" },
    { img: "public/images/movies/last_bullet 9 (2).png", title: "Banger", genre: "Comedy" },
    { img: "public/images/movies/last_bullet 9 (3).png", title: "Court State VS a Nobody", genre: "Drama" },
    { img: "public/images/movies/last_bullet 9 (4).png", title: "Crazyxy", genre: "Thriller" },
    { img: "public/images/movies/last_bullet 9 (5).png", title: "Demon City", genre: "Action" },
    { img: "public/images/movies/last_bullet 9 (6).png", title: "Exterritorial", genre: "Fight" },
    { img: "public/images/movies/last_bullet 9 (7).png", title: "Havoc", genre: "Fight" },
    { img: "public/images/movies/last_bullet 9 (8).png", title: "I Hostage", genre: "Criminal" },
    { img: "public/images/movies/last_bullet 9 (9).png", title: "Jack", genre: "Adventure" },
    { img: "public/images/movies/last_bullet 9 (10).png", title: "My Fault London", genre: "Romance" },
    { img: "public/images/movies/last_bullet 9 (11).png", title: "Nonnas", genre: "Comedy" },
    { img: "public/images/movies/last_bullet 9 (12).png", title: "Renner", genre: "Sci-Fi" },
    { img: "public/images/movies/last_bullet 9 (13).png", title: "The Twister", genre: "Documentary" },
    { img: "public/images/movies/last_bullet 9 (14).png", title: "Bridget Jones Mad", genre: "Romance" }
  ];

  return (
    <div className="group3">
      <div className="rectangle4">
        <p className="new">New Movies 2025</p>
        <div className="film-grid">
            {filmData.map((film, index) => (
                <FilmCard
                key={index}
                film={film}
                className={index === filmData.length - 1 ? "CA" : ""}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilmGrid;
