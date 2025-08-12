import React from 'react';

const TopMovies = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-6">Top Movies 2025</h2>

      <div className="flex flex-row gap-6 items-center overflow-x-auto">
        <img
          src="./punlic/images/bullet_train_explotion-1.png"
          alt="Top big 1"
          className="w-[250px] h-[360px] object-cover rounded-lg flex-shrink-0"
        />

        <div className="grid grid-cols-2 gap-4">
          {['1', '2', '3', '4'].map((num) => (
            <img
              key={num}
              src={`./public/images/last_bullet-${num}.png`}
              alt={`Top small ${num}`}
              className="w-[150px] h-[160px] object-cover rounded-lg"
            />
          ))}
        </div>

        <img
          src="/images/bullet_train_explotion-2.png"
          alt="Top big 2"
          className="w-[250px] h-[360px] object-cover rounded-lg flex-shrink-0"
        />

        <div className="grid grid-cols-2 gap-4">
          {['5', '6', '7', '8'].map((num) => (
            <img
              key={num}
              src={`./public/images/last_bullet-${num}.png`}
              alt={`Top small ${num}`}
              className="w-[150px] h-[160px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
