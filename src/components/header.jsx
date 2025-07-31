import React from 'react';
import Search from './Search';
import LoginRegisterButtons from './LoginRegisterButtons';

function Header() {
  return (
    <header className="bg-[#F2DE9F] w-full mb-[10px]">
      <div className="bg-[#F2DE9F] w-full h-[81px] flex items-center justify-between px-[20px] mb-[25px] box-border max-[529px]:h-full max-[529px]:flex-col max-[529px]:items-start max-[529px]:p-[10px_24px]">
        <Search />
        <div className="text-black font-medium text-[32px] order-2 max-[529px]:order-1 max-[529px]:text-[28px] max-[529px]:mb-[10px]">News</div>
        <LoginRegisterButtons />
      </div>
    </header>
  );
}

export default Header;
