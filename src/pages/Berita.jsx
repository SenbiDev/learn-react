import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Garis from "../components/Garis"
import Main from "../components/Main";
import Footer from "../components/Footer";

const Berita = () => {
    return (
        <>
            <div className="bg-[#FFFEDF] m-[0]">
                <Header/>
                <Navigation />
                <Garis />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default Berita;