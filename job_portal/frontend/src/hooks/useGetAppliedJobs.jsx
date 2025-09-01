import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      console.log("Fetching applied jobs...");
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
          withCredentials: true,
        });

        console.log("API Response:", res.data);

        if (res.data.success) {
          const flattenedApplications = res.data.application?.map((a) => ({
            _id: a._id,
            title: a.job?.title || "N/A",
            companyName: a.job?.company?.name || "N/A",
            status: a.status || "pending",
            createdAt: a.createdAt,
          })) || [];

          console.log("Flattened Applications:", flattenedApplications);
          dispatch(setAllAppliedJobs(flattenedApplications));
        } else {
          setError("Failed to fetch applications");
          dispatch(setAllAppliedJobs([]));
        }
      } catch (err) {
        console.error("Error fetching applied jobs:", err);
        setError("Error fetching applied jobs");
        dispatch(setAllAppliedJobs([]));
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, [dispatch]);

  return { loading, error };
};

export default useGetAppliedJobs;
