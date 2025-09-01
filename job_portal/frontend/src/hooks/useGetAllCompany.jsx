import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { setCompanies } from "@/redux/companySlice";

const useGetAllCompany = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setCompanies(res.data.companies || [])); // ✅ Corrected to `companies`
        } else {
          dispatch(setCompanies([])); // Fallback for no data
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        dispatch(setCompanies([])); // Avoid stale data on error
      }
    };

    fetchCompanies();
  }, [dispatch]);
};

export default useGetAllCompany;
