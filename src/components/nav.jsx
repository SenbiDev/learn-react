import React from 'react';

function Navigation() {
  return (
    <nav className="w-[400px] relative left-[14px] flex justify-between mb-[10px] max-[412px]:w-full max-[412px]:flex-wrap max-[412px]:justify-center max-[412px]:gap-[10px] max-[412px]:left-0">
      {["Latest", "World", "Sports", "Technology"].map((item, index) => (
        <button key={index} className="text-black bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-0">
          {item}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
