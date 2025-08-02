import FilmButton from "./FilmButton";

const FilmBanner = () => (
  <div className="rectangle2">
    <div className="frame3">
      <div className="black-panther">Black Panther</div>
      <div className="info-film">2018 -- PG-13 -- 2h 14m</div>
      <div className="rating">
        <p>Rating 4.5</p>
      </div>
      <div className="sinopsis">
        Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU).
      </div>
    </div>
    <div className="frame4">
      <FilmButton text="Watch Now" type="filled" />
      <FilmButton text="Trailer" type="outlined" />
    </div>
  </div>
);

export default FilmBanner;
