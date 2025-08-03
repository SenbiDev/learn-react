import React from 'react';

const TopMovies = () => {
  return (
    <section className="my-10 px-6 md:px-10">
      <h2 className="text-2xl font-bold text-[#5A38EE] mb-6">Top Movies 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gambar besar kiri */}
        <img
          src="/images/cn-train-2.png"
          className="w-full h-full object-cover rounded-lg"
          alt="Top movie main"
        />

        {/* Grid gambar kecil kanan */}
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((num) => (
            <img
              key={num}
              src={`/images/cn-train-2-${num}.png`}
              className="w-full object-cover rounded-lg"
              alt={`Top movie ${num}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
