import React from "react";
import LatestJobCards from "./LatestJobCards";

// Sample job data
const jobList = [
  {
    company: "Google LLC",
    location: "Bangalore, India",
    title: "Frontend Developer",
    description:
      "Build responsive and performant web apps using React, TypeScript, and Tailwind CSS.",
    positions: "3 Positions",
    type: "Full Time",
    salary: "₹32 LPA",
  },
  {
    company: "Infosys",
    location: "Pune, India",
    title: "Backend Developer",
    description:
      "Design scalable APIs and work with microservices using Node.js and MongoDB.",
    positions: "5 Positions",
    type: "Full Time",
    salary: "₹18 LPA",
  },
  {
    company: "Amazon Web Services",
    location: "Hyderabad, India",
    title: "DevOps Engineer",
    description:
      "Manage CI/CD pipelines and automate infrastructure on AWS.",
    positions: "2 Positions",
    type: "Contract",
    salary: "₹25 LPA",
  },
  {
    company: "Tata Consultancy Services",
    location: "Chennai, India",
    title: "Data Analyst",
    description:
      "Analyze datasets and build dashboards using Power BI and SQL.",
    positions: "4 Positions",
    type: "Part Time",
    salary: "₹12 LPA",
  },
  {
    company: "Flipkart",
    location: "Mumbai, India",
    title: "Product Manager",
    description:
      "Drive product strategy and roadmap with cross-functional teams.",
    positions: "1 Position",
    type: "Full Time",
    salary: "₹40 LPA",
  },
  {
    company: "Zoho Corp",
    location: "Coimbatore, India",
    title: "Software Tester",
    description:
      "Test applications manually and with automation tools for performance and bugs.",
    positions: "2 Positions",
    type: "Full Time",
    salary: "₹10 LPA",
  },
];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-amber-500">Latest and Top </span>Job Openings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jobList.slice(0, 6).map((job, index) => (
          <LatestJobCards key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
