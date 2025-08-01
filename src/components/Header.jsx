const Header = () => (
    <header className="bg-[#F2DE9F] w-full h-[81px] flex justify-between box-border px-[40px] items-center max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-[20px] max-[500px]:h-[162px] max-[500px]:px-[14px]">
        <input type="search" placeholder="  Search..." className="order-[1] w-[264px] h-[39px] border rounded-[5px] bg-white max-[500px]:order-[2] max-[500px]:w-full" />
        <h1 className="order-[2] w-[87px] h-[39px] font-medium text-[32px] text-[#1E1E1E] justify-center max-[500px]:order-[1]">News</h1>
        <div className="order-[3] w-max h-[39px] flex gap-[20px] max-[500px]:mb-[10px] max-[500px]:flex-row max-[500px]:justify-between max-[500px]:w-full">
            <a href="#Login" className="font-medium text-[16px] text-[#1E1E1E] self-center no-underline">Login</a>
            <a href="#register" className="bg-black text-white rounded-[6px] px-[20px] py-[10px] font-medium text-[16px] self-center no-underline">Register</a>
        </div>
    </header>
)

export default Header;