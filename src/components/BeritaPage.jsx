import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
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
