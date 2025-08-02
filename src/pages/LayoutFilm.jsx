import React from "react";
import "../styles/LayoutFilm.css";
import FilmHeader from "../components/FilmHeader";
import FilmBanner from "../components/FilmBanner";
import FilmIklan from "../components/FilmIklan";
import FilmGrid from "../components/FilmGrid";
import FilmFooter from "../components/FilmFooter";

const LayoutFilm = () => {
  return (
    <div className="film-layout">
      <div className="group1" style={{ backgroundImage: "url('/images/movies/blackpanther-banner-1.png')" }}>
        <div className="absolute w-full h-full bg-black inset-0 opacity-70 z-0 min-[1921px]:hidden"></div>
        <div className="shd"></div>
        <FilmHeader />
        <FilmBanner />
      </div>

      <main>
        <div className="induk">
          <FilmIklan />
          <FilmGrid />
        </div>
      </main>

      <FilmFooter />
    </div>
  );
};

export default LayoutFilm;
