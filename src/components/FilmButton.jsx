const FilmButton = ({ text, type }) => {
  const className = type === "filled" ? "watch" : "trailer";
  return <div className={className}>{text}</div>;
};

export default FilmButton;