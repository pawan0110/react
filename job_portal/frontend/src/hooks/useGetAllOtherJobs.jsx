import {  setAllOtherJobs } from '@/redux/jobSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { JOB_API_END_POINT } from '@/utils/constant'; // ✅ Import API endpoint

const useGetAllOtherJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllOtherJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllOtherJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchAllOtherJobs();
  }, [dispatch]); // ✅ Added dependency
};

export default useGetAllOtherJobs;
