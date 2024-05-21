import ActiveJob from "./ActiveJob";
import Balance from "./Balance";
import ChartComponent from "./ChartComponent";
import JobStatistics from "./JobStatistics";
import Navbar from "./Navbar";
import Storage from "./Storage";

const jobStatusItems = [
  { icon: "FaDesktop", text: "RENDERING JOBS", value: 14 },
  { icon: "FaHourglassHalf", text: "WAITING JOBS", value: 14 },
  { icon: "FaRegThumbsUp", text: "COMPLETED JOBS", value: 14 },
  { icon: "FaExclamationTriangle", text: "FAILED JOBS", value: 14 },
];

const Layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="ml-64 tablet:ml-[23%] laptop:ml-[20%] flex tablet:flex-col laptop:flex-row">
        <div className="flex flex-col gap-4 m-6 laptop:w-[55%]">
          <JobStatistics heading="Running Jobs" JobList={jobStatusItems} />
          <JobStatistics heading="Running Frames" JobList={jobStatusItems} />
          <ActiveJob />
        </div>
        <div className="laptop:w-[45%] tablet:ml-6 laptop:ml-0">
          <div className="bg-white rounded-xl pr-6 w-[96%] laptop:h- laptop:mt-6">
            <h1 className="px-6 pt-6 font-semibold text-lg">Network</h1>
            <ChartComponent />
          </div>
          <div className="grid grid-cols-2 gap-2 my-6 mr-4 ">
            <Balance />
            <Storage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
