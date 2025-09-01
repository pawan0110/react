import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        AllOtherJobs: [],
        singleJob: null,
        searchJobByText: "",
        allAppliedJobs:[],
        searchedQuery:""
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllOtherJobs: (state, action) => {
            state.AllOtherJobs = action.payload; // FIXED
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload; // FIXED
        },
        
        setAllAppliedJobs: (state, action) => {
           state.allAppliedJobs = action.payload;
        },
        setSearchedQuery:(state,action) => {
            state.searchedQuery = action.payload;
        }
        
    },
});

export const {
    setAllJobs,
    setSingleJob,
    setAllOtherJobs,
    setSearchJobByText,
    setAllAppliedJobs,
    setSearchedQuery
} = jobSlice.actions;

export default jobSlice.reducer;
