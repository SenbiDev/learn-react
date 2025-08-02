const FilmHeader = () => (
  <div className="rectangle1">
    <span className="frame1">
      <div className="text-frame1">Movies</div>
    </span>
    <nav>
      {["Gallery", "Videos", "About", "Shows", "Contact"].map((item, i) => (
        <button key={i} className="nav-button">{item}</button>
      ))}
    </nav>
  </div>
);
export default FilmHeader;
