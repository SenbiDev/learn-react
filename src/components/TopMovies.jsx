import React from 'react';

const TopMovies = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-6">Top Movies 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/images/movies/bullet_train_explotion 1 (1).png" className="w-full" alt="top movie" />
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((num) => (
            <img key={num} src={`/images/movies/last_bullet ${num}.png`} className="w-full" alt={`bullet ${num}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMovies;