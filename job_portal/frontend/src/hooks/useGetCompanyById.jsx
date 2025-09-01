import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { setSingleCompany } from "@/redux/companySlice";

const useGetCompanyById = (companyId) => { // Pass companyId as argument
  const dispatch = useDispatch();

  useEffect(() => {
    if (!companyId) return; // Prevent fetching if no ID

    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        }
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchSingleCompany();
  }, [companyId, dispatch]); // Correct dependencies
};

export default useGetCompanyById;
