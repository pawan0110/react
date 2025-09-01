import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const Job = ({ job }) => {
  const navigate = useNavigate();

  // Corrected Days Ago Function
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // fixed
  };

  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md border border-gray-200 transition-transform duration-200 hover:scale-[1.01] bg-white">
      {/* Top Row (Time + Bookmark) */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      {/* Job Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-gray-800 font-semibold text-base">
              {job?.company?.name}
            </h2>
            <p className="text-sm text-gray-500">{job?.location}</p>
          </div>
        </div>

        {/* Title + Description */}
        <h1 className="font-bold text-lg text-gray-900 mt-2">{job?.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {job?.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {job?.position && (
            <Badge className="text-indigo-700 bg-indigo-50 border border-indigo-200">
              {job.position}
            </Badge>
          )}
          {job?.jobType && (
            <Badge className="text-green-700 bg-green-50 border border-green-200">
              {job.jobType}
            </Badge>
          )}
          {job?.salary && (
            <Badge className="text-rose-700 bg-rose-50 border border-rose-200">
              {job.salary}
            </Badge>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <Button
            className="bg-black hover:bg-amber-600 text-white px-6"
            onClick={() => navigate(`/description/${job._id}`)}
          >
            Details
          </Button>
          <Button
            variant="secondary"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
