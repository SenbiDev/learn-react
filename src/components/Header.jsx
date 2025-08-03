import React from "react";
import Search from './Search';
import LoginRegister from './LoginRegister';

const Header = () => {
    return(
        <header className="bg-[#F2DE9F] w-full mb-[10px]">
            <div className="bg-[#F2DE9F] w-full h-[81px] flex items-center justify-between px-[20px] mb[25px] box-border max-[529px]:h-full max-[529px]:flex-col max-[529px]:items-start max-[529px]:p-[10px_24px]">
                <Search />
                <div className="text-[16px] font-medium text-[black] border-[0] bg-transparent px-[20px] py-[10px] gap-[10px]"></div>
                <LoginRegister />
            </div>
        </header>
    );
}

export default Header;