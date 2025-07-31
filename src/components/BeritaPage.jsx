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
