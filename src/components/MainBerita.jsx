import ImageBlock from "./ImageBlock";

const topParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit urna, faucibus ac ligula eu, consequat vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ante vitae erat volutpat, consectetur egestas leo ullamcorper. Phasellus risus mauris, congue vitae ligula quis, gravida viverra leo. Duis feugiat eu felis eu sollicitudin. Pellentesque luctus sit amet diam quis vulputate. Aenean sodales velit sed diam malesuada eleifend. Etiam ac mollis neque. Curabitur id tincidunt velit. Nunc eu massa pulvinar, vestibulum felis porta, bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam eu erat eu lorem mollis posuere nec sed tellus. Pellentesque sit amet neque tempor, mollis urna sed, pretium felis. Curabitur nec dapibus nulla, in molestie risus. In efficitur elementum aliquam. Phasellus et viverra felis. Sed convallis, lorem vel sagittis convallis, tellus risus pretium odio, ac convallis erat massa eu nibh. Sed commodo lectus massa, in imperdiet justo semper porttitor. Sed feugiat nisl vehicula, blandit lectus a, tincidunt lorem.",
    "Duis nec est sit amet est ultrices semper. Aenean eleifend ac ante a laoreet. Donec porta nisl mauris, ut lobortis felis dapibus faucibus. Nullam posuere lacus pellentesque ultricies ultricies. Etiam auctor erat id accumsan finibus. Curabitur sed lectus id neque gravida volutpat. Integer non quam quam. Aenean vel velit eget nisi porttitor viverra. Quisque nec sapien non augue suscipit dignissim. Sed ac ullamcorper justo. Nam varius metus augue, et tincidunt magna imperdiet sit amet. Vestibulum non mi iaculis, fermentum neque nec, luctus risus. Proin vitae posuere ipsum, ut fermentum orci. Nullam laoreet quam quis vulputate laoreet.</p>",
    "Pellentesque blandit libero imperdiet purus scelerisque efficitur. Curabitur sit amet ante massa. Aenean consectetur vitae urna vitae pharetra. Quisque vulputate tincidunt efficitur. Sed volutpat, sapien quis iaculis pharetra, quam elit pharetra mauris, id imperdiet velit quam elementum nisi. Pellentesque dolor lacus, volutpat ac turpis vel, dictum auctor nisi. Morbi a cursus ex. Etiam nec consectetur erat. Ut vel accumsan felis. Vivamus eu turpis eu quam viverra mollis quis sit amet elit. Fusce id est in felis pulvinar egestas sit amet sed purus. Donec imperdiet pellentesque pulvinar. Vestibulum sagittis nibh sed elit tincidunt placerat. Praesent id gravida nisl. Ut placerat nec urna et pulvinar."
];

const bottomParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit urna, faucibus ac ligula eu, consequat vulputate metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ante vitae erat volutpat, consectetur egestas leo ullamcorper. Phasellus risus mauris, congue vitae ligula quis, gravida viverra leo. Duis feugiat eu felis eu sollicitudin. Pellentesque luctus sit amet diam quis vulputate. Aenean sodales velit sed diam malesuada eleifend. Etiam ac mollis neque. Curabitur id tincidunt velit. Nunc eu massa pulvinar, vestibulum felis porta, bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    "Nullam eu erat eu lorem mollis posuere nec sed tellus. Pellentesque sit amet neque tempor, mollis urna sed, pretium felis. Curabitur nec dapibus nulla, in molestie risus. In efficitur elementum aliquam. Phasellus et viverra felis. Sed convallis, lorem vel sagittis convallis, tellus risus pretium odio, ac convallis erat massa eu nibh. Sed commodo lectus massa, in imperdiet justo semper porttitor. Sed feugiat nisl vehicula, blandit lectus a, tincidunt lorem.",
    "Duis nec est sit amet est ultrices semper. Aenean eleifend ac ante a laoreet. Donec porta nisl mauris, ut lobortis felis dapibus faucibus. Nullam posuere lacus pellentesque ultricies ultricies. Etiam auctor erat id accumsan finibus. Curabitur sed lectus id neque gravida volutpat. Integer non quam quam. Aenean vel velit eget nisi porttitor viverra. Quisque nec sapien non augue suscipit dignissim. Sed ac ullamcorper justo. Nam varius metus augue, et tincidunt magna imperdiet sit amet. Vestibulum non mi iaculis, fermentum neque nec, luctus risus. Proin vitae posuere ipsum, ut fermentum orci. Nullam laoreet quam quis vulputate laoreet.",
    "Pellentesque blandit libero imperdiet purus scelerisque efficitur. Curabitur sit amet ante massa. Aenean consectetur vitae urna vitae pharetra. Quisque vulputate tincidunt efficitur. Sed volutpat, sapien quis iaculis pharetra, quam elit pharetra mauris, id imperdiet velit quam elementum nisi. Pellentesque dolor lacus, volutpat ac turpis vel, dictum auctor nisi. Morbi a cursus ex. Etiam nec consectetur erat. Ut vel accumsan felis. Vivamus eu turpis eu quam viverra mollis quis sit amet elit. Fusce id est in felis pulvinar egestas sit amet sed purus. Donec imperdiet pellentesque pulvinar. Vestibulum sagittis nibh sed elit tincidunt placerat. Praesent id gravida nisl. Ut placerat nec urna et pulvinar."
];

const MainBerita = () => (
  <main className="w-full flex flex-col items-center gap-[8px] mb-[5%] px-4">
    <div className="flex flex-col w-[80%] pl-[40px] gap-[8px] mb-[30px] mt-[30px]">
      <div className="text-[14px] font-medium">Technology</div>
      <div className="text-[12px] text-[#727272] font-medium">12 June 2022</div>
    </div>

    <div className="w-full max-w-[800px] m-auto">
      <div className="text-[#1E1E1E] font-semibold text-[40px] text-center mb-[30px] max-[768px]:text-[24px]">
        China unveils the future of high-speed rail with a next-gen prototype
      </div>
      <img src="/images/cn-train-1.png" alt="Main" className="w-full mx-auto mb-[30px] max-[768px]:w-[90%]" />
      <div className="text-[16px] font-normal text-justify max-[768px]:px-[10px]">
        {topParagraphs.map((text, i) => (
            <p key={`top-${i}`} className="mb-4">{text}</p>
        ))}
      </div>

      <ImageBlock />

      <div className="text-[16px] font-normal text-justify max-[768px]:px-[10px]">
        {bottomParagraphs.map((text, i) => (
            <p key={`bottom-${i}`} className="mb-4">{text}</p>
        ))}
      </div>
    </div>
  </main>
);

export default MainBerita;