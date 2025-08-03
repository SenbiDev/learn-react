import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end px-8 pb-10 gap-10">
      <div className="max-w-md flex flex-col gap-3">
        <h1 className="text-[64px] font-extrabold text-[#5A38EE] leading-none">BLACK PANTHER</h1>
        <div className="text-lg">2018 — PG-13 — 2h 14m</div>
        <div className="text-yellow-400 font-bold text-lg">Rating 4.5</div>
        <p className="text-base leading-7">
          Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.
        </p>
      </div>
      <div className="flex gap-4">
        <button className="bg-[#5A38EE] text-white px-10 py-2 rounded-full font-bold">Watch Now</button>
        <button className="border-2 border-[#5A38EE] text-white px-10 py-2 rounded-full font-bold">Trailer</button>
      </div>
    </div>
  );
};

export default Hero;