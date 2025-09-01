import React, { useState, useEffect } from "react";

const FilterCard = ({ jobs = [], onFilterChange }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");

  // Extract unique filter options
  const uniqueLocations = [...new Set(jobs.map((job) => job.location).filter(Boolean))];
  const uniqueIndustries = [...new Set(jobs.map((job) => job.company?.name).filter(Boolean))];
  const uniqueSalaries = [...new Set(jobs.map((job) => job.salary).filter(Boolean))];

  // Trigger filter changes when selections change
  useEffect(() => {
    onFilterChange({
      Location: selectedLocation,
      Industry: selectedIndustry,
      Salary: selectedSalary,
    });
  }, [selectedLocation, selectedIndustry, selectedSalary, onFilterChange]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">All</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Industry Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Industry</label>
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">All</option>
          {uniqueIndustries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Salary Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Salary</label>
        <select
          value={selectedSalary}
          onChange={(e) => setSelectedSalary(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">All</option>
          {uniqueSalaries.map((sal) => (
            <option key={sal} value={sal}>
              {sal}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Button */}
      <button
        onClick={() => {
          setSelectedLocation("");
          setSelectedIndustry("");
          setSelectedSalary("");
        }}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg p-2 mt-2"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterCard;
