const FilmCard = ({ film, className = "" }) => (
  <div className={`film-card ${className}`}>
    <div className="movie-img-wrp">
      <img src={film.img} alt={film.title} />
    </div>
    <div className="film-detail">
      <div className="itg">
        <div className="film-info">
          <img src="/images/Kid star.png" alt="star" /> 5.0
        </div>
        <div className="film-title">{film.title}</div>
        <div className="film-genre">{film.genre}</div>
      </div>
      <div className="i-btn">
        <button className="trailer-button">
          <img src="/images/Vector.png" alt="vector" /> Trailer
        </button>
      </div>
    </div>
  </div>
);

export default FilmCard;