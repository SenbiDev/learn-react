import React from "react";

const NewsImages = () => {
    return (
        <div className="flex w-full gap-[20px] mb-[20px] justify-center flex-wrap max-[412px]:flex-col max-[412px]:items-center">
            <img src="./public/images/cn-train-2.png" className="object-cover mb-[50px] flex-[0_1_calc(50%-10px)] max-[412px]:flex-[0_1_100%] max-[412px]:max-w-full" alt="train 2" />
            <img src="./public/images/cn-train-3.png" className="object-cover mb-[50px] flex-[0_1_calc(50%-10px)] max-[412px]:flex-[0_1_100%] max-[412px]:max-w-full" alt="train 3" />
        </div>
    );
}

export default NewsImages;