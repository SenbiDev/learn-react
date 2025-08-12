const Header = () => (
    <header className="w-full bg-[url(./public/images/movies/blackpanther-banner-1.png)] bg-cover bg-no-repeat box-border px-[3%] py-[2%] inset-shadow-[0_0_10px_500px_rgba(0,0,0,0.516)]">
        <div className="flex flex-row justify-between max-[769px]:flex-col">
            <h1 className="text-[#FFFFFF] text-[36px] font-bold capitalize max-[769px]:self-center">movies</h1>
            <nav className="flex flex-row justify-between gap-[10px] max-[413px]:justify-center max-[413px]:gap-[5%]">
                <button className="text-[#FFFFFF] text-[16px] font-medium capitalize tracking-[0%]">gallery</button>
                <button className="text-[#FFFFFF] text-[16px] font-medium capitalize tracking-[0%]">videos</button>
                <button className="text-[#FFFFFF] text-[16px] font-medium capitalize tracking-[0%]">abaout</button>
                <button className="text-[#FFFFFF] text-[16px] font-medium capitalize tracking-[0%]">shows</button>
                <button className="text-[#FFFFFF] text-[16px] font-medium capitalize tracking-[0%]">contact</button>
            </nav>
        </div>
        <div className="flex flex-row justify-between max-[769px]:flex-col max-[769px]:py-[30px]">
            <div className="flex flex-col max-[769px]:items-center">
                <h2 className="w-[25%] text-[#5A38EE] text-[80px] leading-[100%] font-bold uppercase max-[769px]:w-[50%] max-[769px]:text-[60px] max-[769px]:text-center max-[625px]:text-[50px]">black panther</h2>
                <p className="text-[#FFFFFF] text-[18px] leading-[28px] font-normal tracking-[0%] max-[625px]:text-[15px]">2018 -- PG-13 -- 2h 14m</p>
                <p className="text-[#FFC300] text-[18px] leading-[28px] font-bold tracking-[0%] capitalize max-[625px]:text-[15px]">rating 4.5</p>
                <p className="w-[40%] flex flex-wrap text-[#FFFFFF] text-[16px] leading-[28px] font-bold tracking-[0%] mt-[2%] max-[1024px]:w-[60%] max-[800px]:w-[70%] max-[769px]:text-center max-[625px]:text-[12px] max-[502px]:opacity-0">Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). </p>
            </div>
            <div class="flex flex-row justify-end items-end gap-[40px] max-[769px]:pt-[30px] max-[769px]:justify-center">
                <a href="/learn6" className="w-max bg-[#5A38EE] text-[#FFFFFF] text-[16px] px-[40px] py-[10px] rounded-[22px] font-bold capitalize max-[625px]:text-[12px] max-[625px]:px-[20px]">watch now</a>
                <a href="/learn9" className="text-[#FFFFFF] text-[16px] px-[40px] py-[10px] rounded-[22px] border-[2px] border-solid border-[#5A38EE] font-bold capitalize max-[625px]:text-[12px]">trailer</a>
            </div>
        </div>
    </header>
)

export default Header;