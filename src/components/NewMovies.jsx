import React from 'react';

const movieData = [
  { title: 'Another Simple Fayor', genre: 'Comedy', image: 'last_bullet 9.png' },
  { title: 'BAD INFLUENCE', genre: 'Romance', image: 'last_bullet 9 (1).png' },
  { title: 'Banger', genre: 'Comedy', image: 'last_bullet 9 (2).png' },
  { title: 'Court State VS a Nobody', genre: 'Drama', image: 'last_bullet 9 (3).png' },
  { title: 'Crazyxy', genre: 'Thriller', image: 'last_bullet 9 (4).png' },
  { title: 'Demon City', genre: 'Action', image: 'last_bullet 9 (5).png' },
  { title: 'Exterritorial', genre: 'Fight', image: 'last_bullet 9 (6).png' },
  { title: 'Havoc', genre: 'Fight', image: 'last_bullet 9 (7).png' },
  { title: 'I Hostage', genre: 'Criminal', image: 'last_bullet 9 (8).png' },
  { title: 'Jack', genre: 'Adventure', image: 'last_bullet 9 (9).png' },
  { title: 'My Fault London', genre: 'Romance', image: 'last_bullet 9 (10).png' },
  { title: 'Nonnas', genre: 'Comedy', image: 'last_bullet 9 (11).png' },
  { title: 'Renner', genre: 'Sci-Fi', image: 'last_bullet 9 (12).png' },
  { title: 'The Twister', genre: 'Documentary', image: 'last_bullet 9 (13).png' },
  { title: 'Bridget Jones Mad', genre: 'Romance', image: 'last_bullet 9 (14).png' },
];

const NewMovies = () => {
  return (
    <section className="my-20 px-6 md:px-10">
      <h2 className="text-2xl font-bold text-white mb-6">New Movies 2025</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movieData.map((movie, index) => (
          <div
            key={index}
            className="bg-[#1C1A1A] rounded-xl overflow-hidden flex shadow-lg"
          >
            <img
              src={`/images/${movie.image}`}
              className="w-1/2 h-full object-cover"
              alt={movie.title}
            />
            <div className="flex flex-col justify-between p-4 w-1/2">
              <div className="flex flex-col gap-2">
                <div className="text-white font-medium text-sm flex items-center gap-1">
                  <img src="/images/Kid star.png" alt="star" className="w-4 h-4" />
                  5.0
                </div>
                <div className="text-white text-lg font-bold leading-tight">
                  {movie.title}
                </div>
                <div className="text-white border-2 border-white rounded-full px-3 py-1 text-sm w-fit">
                  {movie.genre}
                </div>
              </div>
              <button className="mt-4 bg-[#5A38EE] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 w-fit">
                <img src="/images/Vector.png" alt="trailer icon" className="w-4 h-4" />
                Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewMovies;
