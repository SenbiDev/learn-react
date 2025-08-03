import React from 'react';

const Hero = () => {
  return (
    <section>
      <div
        className="relative text-white bg-cover bg-center min-h-[750px]"
        style={{
          backgroundImage: "url('/images/blackpanther-banner-1.png')",
        }}
      >
        {/* Overlay hitam */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />

        {/* Konten */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-start h-full px-10 py-16">
          {/* Konten Teks */}
          <div className="max-w-lg flex flex-col gap-4 text-left justify-center">
            <h1 className="text-[48px] md:text-[64px] font-extrabold text-[#5A38EE] leading-none">
              BLACK PANTHER
            </h1>
            <div className="text-lg">2018 — PG-13 — 2h 14m</div>
            <div className="text-yellow-400 font-bold text-lg">Rating 4.5</div>
            <p className="text-base leading-7 max-w-md">
              Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU).
            </p>
          </div>

          {/* Tombol kanan bawah */}
          <div className="flex flex-col justify-end items-end mt-auto pb-8">
            <div className="flex gap-4">
              <button className="bg-[#5A38EE] text-white px-10 py-2 rounded-full font-bold">
                Watch Now
              </button>
              <button className="border-2 border-[#5A38EE] text-white px-10 py-2 rounded-full font-bold">
                Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
