import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("description", input.description);
      formData.append("website", input.website);
      formData.append("location", input.location);
      if (input.file) formData.append("file", input.file);

      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success("Company updated successfully!");
        navigate("/admin/companies");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update company");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (singleCompany) {
      setInput({
        name: singleCompany.name || "",
        description: singleCompany.description || "",
        website: singleCompany.website || "",
        location: singleCompany.location || "",
        file: singleCompany.file || null,
      });
    }
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 px-6">
        {/* Back Button */}
        <div className="mb-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/admin/companies")}
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Title */}
          <h1 className="font-bold text-2xl mb-8 text-center text-gray-800">
            Company Setup
          </h1>

          <form onSubmit={submitHandler} className="space-y-6">
            {/* Company Name */}
            <div>
              <Label className="block mb-2">Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter company name"
              />
            </div>

            {/* Description */}
            <div>
              <Label className="block mb-2">Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Enter description"
              />
            </div>

            {/* Website */}
            <div>
              <Label className="block mb-2">Website</Label>
              <Input
                type="url"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                placeholder="https://example.com"
              />
            </div>

            {/* Location */}
            <div>
              <Label className="block mb-2">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                placeholder="Enter location"
              />
            </div>

            {/* File Upload */}
            <div>
              <Label className="block mb-2">Company Logo</Label>
              <Input
                type="file"
                name="file"
                accept="image/*"
                onChange={fileChangeHandler}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/companies")}
                className="px-6"
              >
                Cancel
              </Button>

              {loading ? (
                <Button className="bg-amber-500 px-6">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 px-6"
                >
                  Save
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;
