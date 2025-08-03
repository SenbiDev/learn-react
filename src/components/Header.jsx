import React from "react";
import Search from './Search';
import LoginRegister from './LoginRegister';

const Header = () => {
    return (
        <header className="bg-[#F2DE9F] w-full mb-[10px]">
            <div className="bg-[#F2DE9F] w-full h-[81px] flex items-center px-[20px] mb-[25px] box-border max-[529px]:h-full max-[529px]:flex-col max-[529px]:items-start max-[529px]:p-[10px_24px]">

                <div className="flex-1">
                <Search />
                </div>

                <div className="flex-1 text-center">
                    <div className="text-black font-medium text-[32px] max-[529px]:text-[28px] max-[529px]:mb-[10px]">
                        News
                    </div>
                </div>

                <div className="flex-1 flex justify-end gap-[20px]">
                    <LoginRegister />
                </div>
            </div>
        </header>
    );
}

export default Header;
