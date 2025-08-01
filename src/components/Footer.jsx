import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#F2DE9F] w-full">
            <div className="gap-[20px]">
                <div className="text-black text-[32px] font-medium text-center py-[20px] max-[412px]:text-[28px]">News</div>
                <div className="flex w-full justify-center gap-[5%] flex-wrap">
                    {["About", "Contact", "Archive", "Privacy Policy", "Terms and Conditions"].map((item, index) => (
                        <div key={index} className="p-[10px] gap-[10%] text-[16px] font-semibold">{item}</div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;