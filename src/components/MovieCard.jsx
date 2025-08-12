const MovieCard = ({image, tittle, genre}) => {
    return(
        <div className="w-full bg-[#1C1A1A] flex gap-[7%] rounded-[14px] overflow-hidden max-[1200px]:flex-col max-[1200px]:gap-[0%]">
            <img src={image} className="w-full"/>
            <div className="w-full bg-[#1C1A1A] flex flex-col gap-[25%] box-border py-[5%] max-[1200px]:gap-[25px]">
                <div className="w-full bg-[#1C1A1A] flex flex-col gap-[22px] max-[1200px]:items-center">
                    <div className="flex flex-row items-center gap-[2%]">
                        <img src="./public/images/Kid star.png"/>
                        <span className="text-[#FFFFFF] text-[16px] font-semibold">5.0</span>
                    </div>
                    <p className="h-[48px] leading-[100%] text-[#FFFFFF] text-[20px] font-medium capitalize max-[1000px]:text-center">{tittle}</p>
                    <a href="." className="w-fit text-[#FFFFFF] text-[16px] px-[4%] py-[1%] rounded-[30px] border-[2px] border-solid border-[#FFFFFF] font-bold capitalize">{genre}</a>
                </div>
                <a href="." className="w-max flex flex-row bg-[#5A38EE] px-[7%] py-[2%] rounded-[27px] gap-[10%] max-[1200px]:self-center">
                    <img src="./public/images/Vector.png"/>
                    <span className="text-[#FFFFFF] text-[18px] font-medium capitalize">trailer</span>
                </a>
            </div>
        </div>
    );
};

export default MovieCard;