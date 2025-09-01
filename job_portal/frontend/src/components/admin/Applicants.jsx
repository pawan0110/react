import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          { withCredentials: true }
        );

        console.log("Applicants API Response:", res.data);

        // Map applications to include applicant object + applicationId + status
        const applicantsArray =
          res.data.job?.applications?.map((a) => ({
            ...a.applicant,
            applicationId: a._id,
            status: a.status,
          })) || [];

        dispatch(setAllApplicants(applicantsArray));
      } catch (error) {
        console.error("Error fetching applicants:", error);
        dispatch(setAllApplicants([]));
      }
    };

    fetchAllApplicants();
  }, [params.id, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="font-bold text-xl my-5">
          Total Applicants: {Array.isArray(applicants) ? applicants.length : 0}
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
