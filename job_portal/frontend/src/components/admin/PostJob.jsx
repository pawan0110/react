import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { JOB_API_END_POINT } from "@/utils/constant";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
const submitHandler = async (e) => {
  e.preventDefault();

  if (!input.companyId) {
    toast.error("Please select a company");
    return;
  }

  try {
    setLoading(true);
    console.log("Posting job data:", input);

    const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/admin/jobs");
    }
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};




  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-10">
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-5xl border-gray-200 shadow-xl rounded-md"
        >
          <div className="grid grid-cols-2 gap-4 ">
            {/* Title */}
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Description */}
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Requirements */}
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Salary */}
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Location */}
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Job Type */}
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Experience */}
            <div>
              <Label>Experience</Label>
              <Input
                type="number"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Position */}
            <div>
              <Label>Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            {/* Company Select Dropdown */}
            <div>
              <Label className="my-1">Select Company</Label>
              <Select
                value={input.companyId}
                onValueChange={(value) =>
                  setInput({ ...input, companyId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {companies?.map((company) => (
                      <SelectItem key={company._id} value={company._id}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="w-full mt-4">Post New Job</Button>

          {/* Error Message */}
          {(!companies || companies.length === 0) && (
            <p className="text-xs text-red-600 font-bold text-center my-3">
              Please register a company before posting a job
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;
