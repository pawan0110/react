import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompamyByText:"",
    },
    reducers:{
        //actions

        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setCompanies:(state,action) => {
            state.companies = action.payload;
        },
         setSearchCompamyByText:(state,action) => {
            state.searchCompamyByText = action.payload;
         }
    }
});
export const {setSingleCompany,setCompanies, setSearchCompamyByText} = companySlice.actions;
export default companySlice.reducer;