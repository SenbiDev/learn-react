const FilmFooter = () => (
  <footer>
    <div className="movies">Movies</div>
    <div className="service">
      {[
        ["FAQ", "Investor Relation", "Corporate Information", "Privacy Policy"],
        ["Help Center", "Jobs", "Team of Use", "Contact Us"],
        ["Media Center", "Buy Gift Cards", "Cookies References", "Legal Notices"],
      ].map((group, i) => (
        <div key={i} className="i-service">
          {group.map((item, j) => (
            <div key={j} className="a-service">{item}</div>
          ))}
        </div>
      ))}
    </div>
  </footer>
);
export default FilmFooter;
