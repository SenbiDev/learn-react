// import React, { useState } from 'react';

const HamburgerMenu = ({isOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="inline-block cursor-pointer"
      // onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`w-[14px] h-[3px] rounded-xs bg-white my-[3px] transition-transform duration-300 ${
          isOpen ? 'translate-y-[6px] rotate-[-45deg]' : ''
        }`}
      ></div>
      <div
        className={`w-[14px] h-[3px] rounded-xs bg-white my-[3px] transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        className={`w-[14px] h-[3px] rounded-xs bg-white my-[3px] transition-transform duration-300 ${
          isOpen ? 'translate-y-[-6px] rotate-45' : ''
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
