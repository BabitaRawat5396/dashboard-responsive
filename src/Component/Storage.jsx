import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Storage = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col gap-2 laptop:text-xs desktop:text-sm">
      <h1 className="font-semibold tablet:text-xl laptop:text-xl px-4">
        Storage
      </h1>
      <div className="flex flex-col items-center gap-2">
        <SemiCircleProgressBar percentage={88} style={{width:"100px"}} strokeWidth={12} stroke={"#011627"}/>
        <p className="text-[#8D969E]"> 88GB out of 100Gb(88%)</p>
        <button className="text-[#0171FE] tablet:w-[80%] laptop:w-full desktop:w-[80%] border-2 p-2 rounded-full w-[80%] border-[#0171FE]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Storage;
