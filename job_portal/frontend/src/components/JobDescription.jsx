import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="max-w-7xl mx-auto my-10 p-4 border rounded-lg shadow-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex gap-2 mt-2">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              12 positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              Part Time
            </Badge>
            <Badge className="text-[#7289b7] font-bold" variant="ghost">
              24 LPA
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-400 hover:bg-amber-500"
          }`}
        >
          {isApplied ? "Already applied" : "Apply Now"}
        </Button>
      </div>

      {/* Job Description */}
      <h2 className="border-b-2 border-b-gray-300 font-medium py-4 mt-6">
        Job Description
      </h2>

      <div className="space-y-2 mt-4">
        <p className="font-bold">
          Role:
          <span className="pl-4 font-normal text-gray-500">
            Frontend Developer
          </span>
        </p>
        <p className="font-bold">
          Location:
          <span className="pl-4 font-normal text-gray-500">
            Hyderabad
          </span>
        </p>
        <p className="font-bold">
          Description:
          <span className="pl-4 font-normal text-gray-500">
            Responsible for building and maintaining UI.
          </span>
        </p>
        <p className="font-bold">
          Experience:
          <span className="pl-4 font-normal text-gray-500">
            2+ Years
          </span>
        </p>
        <p className="font-bold">
          Salary:
          <span className="pl-4 font-normal text-gray-500">
            24 LPA
          </span>
        </p>
        <p className="font-bold">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-500">
            120
          </span>
        </p>
        <p className="font-bold">
          Posted Date:
          <span className="pl-4 font-normal text-gray-500">
            Aug 14, 2025
          </span>
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
