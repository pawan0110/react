import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  const allJobs = useSelector((store) => store.job.AllOtherJobs) || [];
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  useEffect(() => {
    setFilteredJobs(allJobs);
  }, [allJobs]);

  // Handle filter changes from FilterCard
  const handleFilterChange = useCallback(
    (filters) => {
      const result = allJobs.filter((job) => {
        return (
          (!filters.Location || job.location === filters.Location) &&
          (!filters.Industry || job.company.name === filters.Industry) &&
          (!filters.Salary || job.salary === filters.Salary)
        );
      });
      setFilteredJobs(result);
    },
    [allJobs]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-35 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4 w-full">
            <FilterCard jobs={allJobs} onFilterChange={handleFilterChange} />
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4 w-full">
            {filteredJobs.length === 0 ? (
              <div className="flex items-center justify-center text-gray-500 text-lg h-64">
                Job not found
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredJobs.map(
                  (job) =>
                    job && (
                      <div key={job._id}>
                        <Job job={job} />
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
