const FilmIklan = () => (
  <div className="group2">
    <div className="rectangle3">
        <p className="top">Top Movies 2025</p>
        <div className="papan-iklan">
            {[1, 2].map((col) => (
                <div key={col} className="frame-iklan">
                <div className="film-wraper1">
                    <img
                    src={`/images/movies/bullet_train_explotion 1${col === 1 ? " (1)" : ""}.png`}
                    className="a-film af"
                    alt=""
                    />
                </div>
                <div className="film-wraper2">
                    {[1, 2].map((row) => (
                    <div key={row} className="i-film1">
                        <img
                        src={`/images/movies/last_bullet ${col === 1 ? row : row + 4}.png`}
                        className="a-film fa"
                        alt=""
                        />
                        <img
                        src={`/images/movies/last_bullet ${col === 1 ? row + 2 : row + 6}.png`}
                        className="a-film fa"
                        alt=""
                        />
                    </div>
                    ))}
                </div>
                </div>
            ))}
        </div>
    </div>
  </div>
);

export default FilmIklan;
