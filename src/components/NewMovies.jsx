import React from 'react';

const movieData = [
  { title: 'Another Simple Fayor', genre: 'Comedy', image: 'last_bullet 9.png' },
  { title: 'BAD INFLUENCE', genre: 'Romance', image: 'last_bullet 9 (1).png' },
  { title: 'Banger', genre: 'Comedy', image: 'last_bullet 9 (2).png' },
  { title: 'Court State VS a Nobody', genre: 'Drama', image: 'last_bullet 9 (3).png' },
  { title: 'Crazyxy', genre: 'Thriller', image: 'last_bullet 9 (4).png' },
  { title: 'Demon City', genre: 'Action', image: 'last_bullet 9 (5).png' },
];

const NewMovies = () => {
  return (
    <section className="my-20">
      <h2 className="text-2xl font-bold mb-6">New Movies 2025</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movieData.map((movie, index) => (
          <div key={index} className="bg-[#1C1A1A] rounded-lg overflow-hidden flex">
            <img src={`/images/movies/${movie.image}`} className="w-1/2 object-cover" alt={movie.title} />
            <div className="flex flex-col justify-between p-4 w-1/2">
              <div>
                <div className="text-white font-medium text-base mb-1">Rating 5.0</div>
                <div className="text-lg font-bold mb-2">{movie.title}</div>
                <div className="border-2 border-white rounded-full px-3 py-1 text-sm w-fit">{movie.genre}</div>
              </div>
              <button className="mt-4 bg-[#5A38EE] text-white px-4 py-2 rounded-full text-sm font-bold">Trailer</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewMovies;