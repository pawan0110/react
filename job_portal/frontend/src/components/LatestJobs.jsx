import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const AllOtherJobs = useSelector((store) => store.job.AllOtherJobs) || [];
  // Sort jobs by createdAt descending (latest first)
  const latestJobs = [...AllOtherJobs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-amber-400">Latest Job</span> Openings
      </h1>

      {latestJobs.length <= 0 ? (
        <span className="block text-center text-gray-500">
          No jobs available
        </span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestJobs.slice(0,6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
