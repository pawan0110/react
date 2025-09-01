import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";

const JobDescription = () => {
  const { id: jobId } = useParams();
  const dispatch = useDispatch();

  const { singleJob } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.auth);

  // ✅ Check if user has applied
  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;

  // Apply handler
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        // ✅ Update redux state instantly
        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [
              ...(singleJob.applications || []),
              { applicant: user._id },
            ],
          })
        );
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    if (jobId) fetchSingleJob();
  }, [jobId, dispatch]);

  return (
    <div className="max-w-7xl mx-auto my-10 p-4 border rounded-lg shadow-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex gap-2 mt-2">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position}
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#7289b7] font-bold" variant="ghost">
              {singleJob?.salary}
            </Badge>
          </div>
        </div>

        <Button
          onClick={!isApplied ? applyJobHandler : null}
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
            {singleJob?.title}
          </span>
        </p>
        <p className="font-bold">
          Location:
          <span className="pl-4 font-normal text-gray-500">
            {singleJob?.location}
          </span>
        </p>
        <p className="font-bold">
          Description:
          <span className="pl-4 font-normal text-gray-500">
            {singleJob?.description || "No description available"}
          </span>
        </p>
        <p className="font-bold">
          Experience:
          <span className="pl-4 font-normal text-gray-500">
            {singleJob?.experienceLevel || "N/A"}
          </span>
        </p>
        <p className="font-bold">
          Salary:
          <span className="pl-4 font-normal text-gray-500">
            {singleJob?.salary || "N/A"}
          </span>
        </p>
        <p className="font-bold">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-500">
            {singleJob?.applications?.length || 0}
          </span>
        </p>
        <p className="font-bold">
          Posted Date:
          <span className="pl-4 font-normal text-gray-500">
            {singleJob?.createdAt
              ? new Date(singleJob.createdAt).toLocaleDateString()
              : "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
