import React from "react";

const Balance = () => {
  return (
    <div className=" bg-white tablet:p-4 laptop:pb-0 desktop:pb-4 rounded-xl flex flex-col laptop:gap-4 desktop:gap-2 laptop:text-xs desktop:text-base">
      <h1 className="font-semibold tablet:text-xl laptop:text-xl px-4">
        Balance
      </h1>
      <p className="font-semibold laptop:text-xl tablet:pb-4 laptop:pb-0 desktop:pb-2 px-4">
        $ 458
      </p>
      <div className="flex flex-col tablet:items-center tablet:gap-4 desktop:gap-2">
        <div className="flex w-full justify-center">
          <div className="border-r-2 px-6">
            <p className="text-[#1b1d1f]"> Coupon</p>
            <p className="font-semibold">$25</p>
          </div>
          <div className="px-6">
            <p className="text-[#8D969E]">Credits</p>
            <p className="font-semibold">$0</p>
          </div>
        </div>
        <p className="text-[#8D969E] desktop:whitespace-nowrap">
          Hours remaining <span className="text-black">20:59:09</span>
        </p>
        <button className="text-[#0171FE] tablet:w-[80%] laptop:w-full desktop:w-[80%] border-2 p-2 rounded-full border-[#0171FE] whitespace-nowrap">
          Recharge Now
        </button>
      </div>
    </div>
  );
};

export default Balance;
