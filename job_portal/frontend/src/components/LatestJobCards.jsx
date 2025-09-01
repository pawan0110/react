import { Badge } from "@/components/ui/badge";
import React from "react";

const LatestJobCards = ({ job }) => {
  return (
    <div className="border p-5 rounded-lg shadow-md space-y-4 hover:shadow-lg transition-shadow bg-white">
      {/* Company Info */}
      <div>
        <h1 className="text-xl font-bold">{job.company}</h1>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>

      {/* Job Info */}
      <div>
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-600">{job.description}</p>
      </div>

      {/* Badges */}
      <div className="flex gap-2 flex-wrap items-center">
        <Badge className="text-indigo-600 font-bold" variant="ghost">
          {job.positions}
        </Badge>
        <Badge className="text-green-600 font-bold" variant="ghost">
          {job.type}
        </Badge>
        <Badge className="text-rose-600 font-bold" variant="ghost">
          {job.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
