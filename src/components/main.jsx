import React from 'react';
import Category from './Category';
import NewsImages from './NewsImages';

function MainContent() {
  return (
    <main className="w-full">
      <Category />
      <div className="w-[70%] h-full max-w-fit flex flex-col justify-center items-center m-auto max-[412px]:w-[95%] max-[412px]:px-[10px]">
        <div className="text-[40px] font-semibold text-center mb-[50px] max-[412px]:text-[24px]">
          China unveils the future of high-speed rail with a next-gen prototype
        </div>

        <img src="/images/cn-train-1.png" className="block border-[1px] mb-[50px] w-[70%] mx-[20px]" alt="Train" />

        <div className="text-justify text-[16px] font-normal mb-[20px]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <NewsImages />

        <div className="text-justify text-[16px] font-normal mb-[50px]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
