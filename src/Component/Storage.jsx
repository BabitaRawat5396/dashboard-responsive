import { SemiCircleProgress } from "react-semicircle-progressbar";

const Storage = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col gap-2 laptop:text-xs desktop:text-sm">
      <h1 className="font-semibold tablet:text-xl laptop:text-xl px-4">
        Storage
      </h1>
      <div className="flex flex-col items-center ">
        <SemiCircleProgress
          percentage={80}
          size={{
            width: 200,
            height: 140,
          }}
          fontStyle={{
            fontSize: "0.7rem",
          }}
          strokeLinecap="square"
          hasBackground="grey"
          strokeWidth={8}
          strokeColor="#011627"
          bgStrokeColor="grey"
        />
        <p className="absolute bottom-[-12%] flex flex-col items-center text-base leading-[-1rem]">
          <span>80 GB</span> <span>out of 100 GB</span>
        </p>
        <button className="text-[#0171FE] tablet:w-[80%] laptop:w-full desktop:w-[80%] border-2 p-2 rounded-full w-[80%] border-[#0171FE]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Storage;
