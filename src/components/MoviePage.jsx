import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TopMovies from './TopMovies';
import NewMovies from './NewMovies';
import Footer from './FooterMovie';

const MoviePage = () => {
  return (
    <div className="bg-[#111] text-white font-sans">
      <header>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>
      </header>
      <main className="px-10 mb-20">
        <TopMovies />
        <NewMovies />
      </main>
      <Footer />
    </div>
  );
};

export default MoviePage;
