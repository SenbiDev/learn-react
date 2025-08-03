import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-start px-8 pt-10 mb-10">
      <div className="text-4xl font-bold">Movies</div>
      <div className="flex gap-4">
        {['Gallery', 'Videos', 'About', 'Shows', 'Contact'].map((item) => (
          <button key={item} className="text-white text-base font-medium bg-transparent border-0">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;