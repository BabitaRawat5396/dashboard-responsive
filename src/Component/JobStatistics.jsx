import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaRegThumbsUp, FaHourglassHalf } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import StatisticsItem from "./StatisticsItem";

const JobStatistics = ({ heading, JobList }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4">
      <h1 className="text-lg font-semibold">{heading}</h1>
      <ul className="grid grid-cols-4 gap-4 mt-2">
        {JobList.map((item, index) => (
          <StatisticsItem key={index} item={item} />
        ))}
      </ul>
      {/* <ul>
        <li>
          <TbDeviceDesktopAnalytics />
          <p>RENDERING JOBS</p>
          <p>14</p>
        </li>
        <li>
          <FaRegHourglassHalf />
          <p>WAITING JOBS</p>
          <p>14</p>
        </li>
        <li>
          <FaRegThumbsUp />
          <p>COMPLETED JOBS</p>
          <p>14</p>
        </li>
        <li>
          <IoWarningOutline />
          <p>FAILED JOBS</p>
          <p>14</p>
        </li>
      </ul> */}
    </div>
  );
};

export default JobStatistics;
