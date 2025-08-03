import React from "react";
import Category from "./Category";
import NewsImages from "./NewsImages";

const MainContent = () => {
    return (
        <main className="w-full">
            <Category />
            <div className="w-[70%] h-full max-w-fit border[1px] flex flex-col justify-center items-center m-auto max-[412px]:w-[95%] max-[412px]:p-[0_10px]">
                <div className="text-[40px] font-semibold text-center mb-[50px] max-[412px]:text-[18px] max-[512px]:text-[22px]">
                    China unveils the future of high-speed rail with a next-gen prototype
                </div>

                <img src="./public/images/cn-train-1.png" className="block border-[1px] mb-[50px] w-full mx-[20px]" alt="train=1" />

                <div className="text-justify text-[16px] font-normal mb-[20px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit urna, faucibus ac ligula eu, consequat vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ante vitae erat volutpat, consectetur egestas leo ullamcorper. Phasellus risus mauris, congue vitae ligula quis, gravida viverra leo. Duis feugiat eu felis eu sollicitudin. Pellentesque luctus sit amet diam quis vulputate. Aenean sodales velit sed diam malesuada eleifend. Etiam ac mollis neque. Curabitur id tincidunt velit. Nunc eu massa pulvinar, vestibulum felis porta, bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Nullam eu erat eu lorem mollis posuere nec sed tellus. Pellentesque sit amet neque tempor, mollis urna sed, pretium felis. Curabitur nec dapibus nulla, in molestie risus. In efficitur elementum aliquam. Phasellus et viverra felis. Sed convallis, lorem vel sagittis convallis, tellus risus pretium odio, ac convallis erat massa eu nibh. Sed commodo lectus massa, in imperdiet justo semper porttitor. Sed feugiat nisl vehicula, blandit lectus a, tincidunt lorem.</p>
                    <p>Duis nec est sit amet est ultrices semper. Aenean eleifend ac ante a laoreet. Donec porta nisl mauris, ut lobortis felis dapibus faucibus. Nullam posuere lacus pellentesque ultricies ultricies. Etiam auctor erat id accumsan finibus. Curabitur sed lectus id neque gravida volutpat. Integer non quam quam. Aenean vel velit eget nisi porttitor viverra. Quisque nec sapien non augue suscipit dignissim. Sed ac ullamcorper justo. Nam varius metus augue, et tincidunt magna imperdiet sit amet. Vestibulum non mi iaculis, fermentum neque nec, luctus risus. Proin vitae posuere ipsum, ut fermentum orci. Nullam laoreet quam quis vulputate laoreet.</p>
                    <p>Pellentesque blandit libero imperdiet purus scelerisque efficitur. Curabitur sit amet ante massa. Aenean consectetur vitae urna vitae pharetra. Quisque vulputate tincidunt efficitur. Sed volutpat, sapien quis iaculis pharetra, quam elit pharetra mauris, id imperdiet velit quam elementum nisi. Pellentesque dolor lacus, volutpat ac turpis vel, dictum auctor nisi. Morbi a cursus ex. Etiam nec consectetur erat. Ut vel accumsan felis. Vivamus eu turpis eu quam viverra mollis quis sit amet elit. Fusce id est in felis pulvinar egestas sit amet sed purus. Donec imperdiet pellentesque pulvinar. Vestibulum sagittis nibh sed elit tincidunt placerat. Praesent id gravida nisl. Ut placerat nec urna et pulvinar.</p>
                </div> 

            <NewsImages />

                <div className="text-justify text-[16px] font-normal mb-[50px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit urna, faucibus ac ligula eu, consequat vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ante vitae erat volutpat, consectetur egestas leo ullamcorper. Phasellus risus mauris, congue vitae ligula quis, gravida viverra leo. Duis feugiat eu felis eu sollicitudin. Pellentesque luctus sit amet diam quis vulputate. Aenean sodales velit sed diam malesuada eleifend. Etiam ac mollis neque. Curabitur id tincidunt velit. Nunc eu massa pulvinar, vestibulum felis porta, bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Nullam eu erat eu lorem mollis posuere nec sed tellus. Pellentesque sit amet neque tempor, mollis urna sed, pretium felis. Curabitur nec dapibus nulla, in molestie risus. In efficitur elementum aliquam. Phasellus et viverra felis. Sed convallis, lorem vel sagittis convallis, tellus risus pretium odio, ac convallis erat massa eu nibh. Sed commodo lectus massa, in imperdiet justo semper porttitor. Sed feugiat nisl vehicula, blandit lectus a, tincidunt lorem.</p>
                    <p>Duis nec est sit amet est ultrices semper. Aenean eleifend ac ante a laoreet. Donec porta nisl mauris, ut lobortis felis dapibus faucibus. Nullam posuere lacus pellentesque ultricies ultricies. Etiam auctor erat id accumsan finibus. Curabitur sed lectus id neque gravida volutpat. Integer non quam quam. Aenean vel velit eget nisi porttitor viverra. Quisque nec sapien non augue suscipit dignissim. Sed ac ullamcorper justo. Nam varius metus augue, et tincidunt magna imperdiet sit amet. Vestibulum non mi iaculis, fermentum neque nec, luctus risus. Proin vitae posuere ipsum, ut fermentum orci. Nullam laoreet quam quis vulputate laoreet.</p>
                    <p>Pellentesque blandit libero imperdiet purus scelerisque efficitur. Curabitur sit amet ante massa. Aenean consectetur vitae urna vitae pharetra. Quisque vulputate tincidunt efficitur. Sed volutpat, sapien quis iaculis pharetra, quam elit pharetra mauris, id imperdiet velit quam elementum nisi. Pellentesque dolor lacus, volutpat ac turpis vel, dictum auctor nisi. Morbi a cursus ex. Etiam nec consectetur erat. Ut vel accumsan felis. Vivamus eu turpis eu quam viverra mollis quis sit amet elit. Fusce id est in felis pulvinar egestas sit amet sed purus. Donec imperdiet pellentesque pulvinar. Vestibulum sagittis nibh sed elit tincidunt placerat. Praesent id gravida nisl. Ut placerat nec urna et pulvinar.</p>
                </div>
            </div>
        </main>
    );
}

export default MainContent;