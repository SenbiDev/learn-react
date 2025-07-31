import React from 'react';

function LoginRegisterButtons() {
  return (
    <div className="flex gap-[20px] relative right-[24px] order-3 max-[529px]:order-3 max-[529px]:justify-between max-[529px]:gap-[10px] max-[529px]:right-0 max-[529px]:w-full">
      <button className="text-[16px] font-medium text-black border-0 bg-transparent px-[20px] py-[10px] gap-[10px]">Login</button>
      <button className="text-white bg-[#1E1E1E] px-[20px] py-[10px] rounded-[6px] gap-[10px] text-[16px] font-medium">Register</button>
    </div>
  );
}

export default LoginRegisterButtons;
