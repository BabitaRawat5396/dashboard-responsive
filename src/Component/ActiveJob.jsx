import { activeJobs } from "../Data/activeJobsData";
import { GrView } from "react-icons/gr";

const ActiveJob = () => {
  return (
    <table className="bg-white rounded-xl w-full text-sm">
      <thead>
        <tr>
          <th className="py-2 border-b">Job Id</th>
          <th className="py-2 border-b">Project Id</th>
          <th className="py-2 border-b">Stage</th>
          <th className="py-2 border-b w-6">Scene / Shot Name</th>
          <th className="py-2 border-b">View</th>
        </tr>
      </thead>
      <tbody>
        {activeJobs.map((job, index) => (
          <tr key={index}>
            <td className="py-2 px-4 laptop:px-2 border-b">{job.jobId}</td>
            <td className="py-2 px-4 laptop:px-2 border-b">{job.projectId}</td>
            <td className="py-2 px-4 laptop:px-2 border-b">{job.stage}</td>
            <td className="py-2 px-4 laptop:px-2 border-b">
              {job.sceneShotName.substring(0, 10)}
            </td>
            <td className="py-2 px-4 border-b">
              <GrView />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActiveJob;
