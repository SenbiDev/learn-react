import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../components/Hero';
import TopMovies from '../components/TopMovies';
import NewMovies from '../components/NewMovies';
import Footer from '../components/FooterMovie';

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
