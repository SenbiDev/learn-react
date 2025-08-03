<<<<<<< HEAD
import React from 'react';
import Header from './header';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import Footer from './footer';

function BeritaPage() {
  return (
    <div className="bg-[#f1e8cf] m-0">
      <Header />
      <Navigation />
      <hr className="border-t-[1px] border-[#ccc] mb-[30px]" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default BeritaPage;
=======
import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import MainContent from "./Maincontent";
import Footer from "./Footer";

const BeritaPage = () => {
    return (
        <div className="bg-[#f1e8cf] m-0">
            <Header />
            <Navigation />
            <hr className="border-t-[1px] border-[#ccc] mb-[30px]" />
            <MainContent />
            <Footer />
        </div>
    );
}

export default BeritaPage;
>>>>>>> e900649283294b72638f13bd96018beb8025ee84
