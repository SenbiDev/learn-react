<<<<<<< HEAD
import React from 'react';

function BeritaPage() { return ( <div className="bg-[#f1e8cf] m-0"> <header className="bg-[#F2DE9F] w-full mb-[10px]"> <div className="bg-[#F2DE9F] w-full h-[81px] flex items-center justify-between px-[20px] mb-[25px] box-border max-[529px]:h-full max-[529px]:flex-col max-[529px]:items-start max-[529px]:p-[10px_24px]"> <input
type="text"
className="bg-white text-[#727272] h-[39px] relative right-[-24px] border-0 rounded-[5px] text-[16px] font-medium order-1 max-[529px]:order-2 mb-[10px] max-[529px]:w-full max-[529px]:right-0"
defaultValue="  Search"
/> <div className="text-black font-medium text-[32px] order-2 max-[529px]:order-1 max-[529px]:text-[28px] max-[529px]:mb-[10px]"> News </div> <div className="flex gap-[20px] relative right-[24px] order-3 max-[529px]:order-3 max-[529px]:justify-between max-[529px]:gap-[10px] max-[529px]:right-0 max-[529px]:w-full"> <button className="text-[16px] font-medium text-black border-0 bg-transparent px-[20px] py-[10px] gap-[10px]">Login</button> <button className="text-white bg-[#1E1E1E] px-[20px] py-[10px] rounded-[6px] gap-[10px] text-[16px] font-medium">Register</button> </div> </div> </header>

<nav className="w-[400px] relative left-[14px] flex justify-between mb-[10px] max-[412px]:w-full max-[412px]:flex-wrap max-[412px]:justify-center max-[412px]:gap-[10px] max-[412px]:left-0">
    <button className="text-black bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-0">Latest</button>
    <button className="text-black bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-0">World</button>
    <button className="text-black bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-0">Sports</button>
    <button className="text-black bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-0">Technology</button>
  </nav>

  <hr className="border-t-[1px] border-[#ccc] mb-[30px]" />

  <main className="w-full">
    <div className="w-[90%] pl-[40px] gap-[8px] mb-[30px] max-[412px]:pl-[20px]">
      <div className="text-black text-[14px] font-medium mb-[5px]">Technology</div>
      <div className="text-black text-[12px] font-medium">12 June 2022</div>
    </div>

    <div className="w-[70%] h-full max-w-fit flex flex-col justify-center items-center m-auto max-[412px]:w-[95%] max-[412px]:px-[10px]">
      <div className="text-[40px] font-semibold text-center mb-[50px] max-[412px]:text-[24px]">
        China unveils the future of high-speed rail with a next-gen prototype
      </div>

      <img src="/images/cn-train-1.png" className="block border-[1px] mb-[50px] w-[70%] mx-[20px]" alt="Train" />

      <div className="text-justify text-[16px] font-normal mb-[20px]">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Tambahkan paragraf tambahan jika perlu */}
      </div>

      <div className="flex w-full gap-[20px] mb-[20px] justify-center flex-wrap max-[412px]:flex-col max-[412px]:items-center">
        <img src="/images/cn-train-2.png" className="object-cover mb-[50px] flex-[0_1_calc(50%-10px)] max-[412px]:flex-[0_1_100%] max-[412px]:max-w-full" alt="Train 2" />
        <img src="/images/cn-train-3.png" className="object-cover mb-[50px] flex-[0_1_calc(50%-10px)] max-[412px]:flex-[0_1_100%] max-[412px]:max-w-full" alt="Train 3" />
      </div>

      <div className="text-justify text-[16px] font-normal mb-[50px]">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Tambahkan paragraf tambahan jika perlu */}
      </div>
    </div>
  </main>

  <footer className="bg-[#F2DE9F] w-full">
    <div className="gap-[20px]">
      <div className="text-black text-[32px] font-medium text-center py-[20px] max-[412px]:text-[28px]">News</div>
      <div className="flex w-full justify-center gap-[5%] flex-wrap">
        <div className="p-[10px] gap-[10%] text-[16px] font-semibold">About</div>
        <div className="p-[10px] gap-[10%] text-[16px] font-semibold">Contact</div>
        <div className="p-[10px] gap-[10%] text-[16px] font-semibold">Archive</div>
        <div className="p-[10px] gap-[10%] text-[16px] font-semibold">Privacy Policy</div>
        <div className="p-[10px] gap-[10%] text-[16px] font-semibold">Terms and Conditions</div>
      </div>
    </div>
  </footer>
</div>

); }

export default BeritaPage;



=======
import React from "react";
import Header from "../components/Header";

const BeritaPage = () => {
    return (
        <div className="bg-[#f1e8cf] m-[0px]">
            <Header className="bg-[#F2DE9F] w-full mb-[10px]">
                <div className="bg-[#F2DE9F] w-full h-[81px] flex items-center justify-between px-[20px] mb[25px] box-border max-[529px]:h-full max-[529px]:flex-col max-[529px]:items-start max-[529px]:p-[10px_24px]">
                    <input type="text" className="bg-[white] text-[#727272] h-[39px] relative right-[-24px] border-[0] rounded-[5px] text-[16px] font-medium order-[1] max-[529px]:order-2 mb-[10px] max-[529px]:w-full max-[529px]:right-0" defaultValue="  Search" />
                    <div className="text-[black] font-medium text-[32px] order-[2] max-[529px]:order-1 max-[529px]:text-[28px] max-[529px]:mb-[10px]">News</div>
                    <div className="flex gap-[20px] relative right-[24px] order-[3] max-[529px]:order-3 max-[529px]:flex max-[529px]:justify-between max-[529px]:gap-[10px] max-[529px]:right-0 max-[529px]:w-full max-[529px]:relative">
                        <button className="text-[16px] font-medium text-[black] border-[0] bg-transparent px-[20px] py-[10px] gap-[10px]">Login</button>
                        <button className="text-white bg-[#1E1E1E] px-[20px] py-[10px] rounded-[6px] gap-[10px] text-[16px] font-medium">Register</button>
                    </div>
                </div>
            </Header>

            <nav className="w-[400px] relative left-[14px] flex justify-between mb-[10px] max-[412px]:w-full max-[412px]:flex-wrap max-[412px]:justify-center max-[412px]:gap-[10px] max-[412px]:left-0">
                    <button className="text-[black] bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-[0]">Latest</button>
                    <button className="text-[black] bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-[0]">Worldt</button>
                    <button className="text-[black] bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-[0]">Sports</button>
                    <button className="text-[black] bg-transparent p-[10px] gap-[10px] text-[16px] font-medium border-[0]">Technology</button>
            </nav>

            <hr className="border-t-[1px] border-[#ccc] mb-[30px]" />

            <main className="w-full">
                <div className="w-[90%] pl-[40px] gap-[8px] mb-[30px] max-[412px]:pl-[20px]">
                    <div className="text-[black] text-[14px] font-medium mb-[5px]">Technology</div>
                    <div className="text-[black] text-[12px] font-medium">12 June 2022</div>
                </div>

                <div className="w-[70%] h-full max-w-fit border[1px] flex flex-col justify-center items-center m-auto max-[412px]:w-[95%] max-[412px]:p-[0_10px]">
                    <div className="text-[40px] font-semibold text-center mb-[50px] max-[412px]:text-[18px] max-[512px]:text-[22px]">
                        China unveils the future of high-speed rail with a next-gen prototype
                    </div>
                

                    <img src="./public/images/cn-train-1.png" className="block border-[1px] mb-[50px] w-full mx-[20px]" alt="train 1"/>

                    <div className="text-justify text-[16px] font-normal mb-[20px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit urna, faucibus ac ligula eu, consequat vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ante vitae erat volutpat, consectetur egestas leo ullamcorper. Phasellus risus mauris, congue vitae ligula quis, gravida viverra leo. Duis feugiat eu felis eu sollicitudin. Pellentesque luctus sit amet diam quis vulputate. Aenean sodales velit sed diam malesuada eleifend. Etiam ac mollis neque. Curabitur id tincidunt velit. Nunc eu massa pulvinar, vestibulum felis porta, bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Nullam eu erat eu lorem mollis posuere nec sed tellus. Pellentesque sit amet neque tempor, mollis urna sed, pretium felis. Curabitur nec dapibus nulla, in molestie risus. In efficitur elementum aliquam. Phasellus et viverra felis. Sed convallis, lorem vel sagittis convallis, tellus risus pretium odio, ac convallis erat massa eu nibh. Sed commodo lectus massa, in imperdiet justo semper porttitor. Sed feugiat nisl vehicula, blandit lectus a, tincidunt lorem.</p>
                        <p>Duis nec est sit amet est ultrices semper. Aenean eleifend ac ante a laoreet. Donec porta nisl mauris, ut lobortis felis dapibus faucibus. Nullam posuere lacus pellentesque ultricies ultricies. Etiam auctor erat id accumsan finibus. Curabitur sed lectus id neque gravida volutpat. Integer non quam quam. Aenean vel velit eget nisi porttitor viverra. Quisque nec sapien non augue suscipit dignissim. Sed ac ullamcorper justo. Nam varius metus augue, et tincidunt magna imperdiet sit amet. Vestibulum non mi iaculis, fermentum neque nec, luctus risus. Proin vitae posuere ipsum, ut fermentum orci. Nullam laoreet quam quis vulputate laoreet.</p>
                        <p>Pellentesque blandit libero imperdiet purus scelerisque efficitur. Curabitur sit amet ante massa. Aenean consectetur vitae urna vitae pharetra. Quisque vulputate tincidunt efficitur. Sed volutpat, sapien quis iaculis pharetra, quam elit pharetra mauris, id imperdiet velit quam elementum nisi. Pellentesque dolor lacus, volutpat ac turpis vel, dictum auctor nisi. Morbi a cursus ex. Etiam nec consectetur erat. Ut vel accumsan felis. Vivamus eu turpis eu quam viverra mollis quis sit amet elit. Fusce id est in felis pulvinar egestas sit amet sed purus. Donec imperdiet pellentesque pulvinar. Vestibulum sagittis nibh sed elit tincidunt placerat. Praesent id gravida nisl. Ut placerat nec urna et pulvinar.</p> 
                    </div>
                
                    <div>
                        <img src="./public/images/cn-train-2.png" className="object-cover mb-[50px] flex-[0_1_calc(50%-10px)] max-[412px]:flex-[0_1_100%] max-[412px]:max-w-full" alt="train-2"/>                
                        <img src="./public/images/cn-train-3.png" className="object-cover mb-[50px] flex-[0_1_calc(50%-10px)] max-[412px]:flex-[0_1_100%] max-[412px]:max-w-full" alt="train-3"/>                
                    </div>

                    <div className="text-justify text-[16px] font-normal mb-[50px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit urna, faucibus ac ligula eu, consequat vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ante vitae erat volutpat, consectetur egestas leo ullamcorper. Phasellus risus mauris, congue vitae ligula quis, gravida viverra leo. Duis feugiat eu felis eu sollicitudin. Pellentesque luctus sit amet diam quis vulputate. Aenean sodales velit sed diam malesuada eleifend. Etiam ac mollis neque. Curabitur id tincidunt velit. Nunc eu massa pulvinar, vestibulum felis porta, bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Nullam eu erat eu lorem mollis posuere nec sed tellus. Pellentesque sit amet neque tempor, mollis urna sed, pretium felis. Curabitur nec dapibus nulla, in molestie risus. In efficitur elementum aliquam. Phasellus et viverra felis. Sed convallis, lorem vel sagittis convallis, tellus risus pretium odio, ac convallis erat massa eu nibh. Sed commodo lectus massa, in imperdiet justo semper porttitor. Sed feugiat nisl vehicula, blandit lectus a, tincidunt lorem.</p>
                        <p>Duis nec est sit amet est ultrices semper. Aenean eleifend ac ante a laoreet. Donec porta nisl mauris, ut lobortis felis dapibus faucibus. Nullam posuere lacus pellentesque ultricies ultricies. Etiam auctor erat id accumsan finibus. Curabitur sed lectus id neque gravida volutpat. Integer non quam quam. Aenean vel velit eget nisi porttitor viverra. Quisque nec sapien non augue suscipit dignissim. Sed ac ullamcorper justo. Nam varius metus augue, et tincidunt magna imperdiet sit amet. Vestibulum non mi iaculis, fermentum neque nec, luctus risus. Proin vitae posuere ipsum, ut fermentum orci. Nullam laoreet quam quis vulputate laoreet.</p>
                        <p>Pellentesque blandit libero imperdiet purus scelerisque efficitur. Curabitur sit amet ante massa. Aenean consectetur vitae urna vitae pharetra. Quisque vulputate tincidunt efficitur. Sed volutpat, sapien quis iaculis pharetra, quam elit pharetra mauris, id imperdiet velit quam elementum nisi. Pellentesque dolor lacus, volutpat ac turpis vel, dictum auctor nisi. Morbi a cursus ex. Etiam nec consectetur erat. Ut vel accumsan felis. Vivamus eu turpis eu quam viverra mollis quis sit amet elit. Fusce id est in felis pulvinar egestas sit amet sed purus. Donec imperdiet pellentesque pulvinar. Vestibulum sagittis nibh sed elit tincidunt placerat. Praesent id gravida nisl. Ut placerat nec urna et pulvinar.</p>
                    </div>
                </div>
            </main>

            <footer className="bg-[#F2DE9F] w-full">
                <div className="gap-[20px">
                    <div class="text-black text-[32px] font-medium text-center py-[20px] max-[412px]:text-[28px]">News</div>
                    <div class="flex w-full justify-center gap-[5%] flex-wrap">
                        <div class="p-[10px] gap-[10%] text-[16px] font-semibold">About</div>
                        <div class="p-[10px] gap-[10%] text-[16px] font-semibold">Contact</div>
                        <div class="p-[10px] gap-[10%] text-[16px] font-semibold">Archive</div>
                        <div class="p-[10px] gap-[10%] text-[16px] font-semibold">Privacy Policy</div>
                        <div class="p-[10px] gap-[10%] text-[16px] font-semibold">Terms and Conditions</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default BeritaPage;
>>>>>>> e900649283294b72638f13bd96018beb8025ee84
