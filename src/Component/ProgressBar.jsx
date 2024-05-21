import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress">
      <div className="barOverflow">
        <div
          className="bar"
          style={{
            transform: `rotate(${45 + percentage * 1.8}deg)`,
            borderBottomColor: percentage < 50 ? "#eee" : "#011627",
            borderRightColor: percentage < 50 ? "#eee" : "#011627",
          }}
        ></div>
      </div>
      <span className="text-[#8D969E]">
        88GB out of 100Gb({Math.round(percentage)}%)
      </span>
    </div>
  );
};

export default ProgressBar;
