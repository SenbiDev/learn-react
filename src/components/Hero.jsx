import React from "react";

const Hero = () => {
  return (
    <section
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/movies/black-panther.jpg')",
        height: "600px",
      }}
    >
      {/* Background hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Konten */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-10 max-w-[600px]">
          <h1 className="text-5xl font-bold mb-4">BLACK PANTHER</h1>
          <p className="mb-2">2018 — PG-13 — 2h 14m</p>
          <p className="text-yellow-400 font-semibold mb-4">Rating 4.5</p>
          <p className="text-base leading-relaxed mb-6">
            Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.
          </p>

          {/* FIX DI SINI —> tambah justify-start */}
          <div className="flex gap-4 justify-start">
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full">
              Watch Now
            </button>
            <button className="border border-white text-white py-2 px-6 rounded-full">
              Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
