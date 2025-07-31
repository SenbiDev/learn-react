import { useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import MainBerita from "../components/MainBerita";
import Footer from "../components/Footer";

const Berita = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-[#f8f0d7] min-h-screen">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryNav />
      <MainBerita />
      <Footer />
    </div>
  );
};

export default Berita;