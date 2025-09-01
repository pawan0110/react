import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    posted: "2 days ago",
    description: "Build and optimize user interfaces using React and Tailwind CSS.",
    logo: "https://logo.clearbit.com/google.com",
    positions: "2 Positions",
    type: "Full-time",
    salary: "₹20 LPA",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Hyderabad, India",
    posted: "1 day ago",
    description: "Design and implement scalable backend APIs and services using Node.js.",
    logo: "https://logo.clearbit.com/amazon.com",
    positions: "1 Position",
    type: "Full-time",
    salary: "₹50 LPA",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Noida, India",
    posted: "3 days ago",
    description: "Work across frontend and backend, building complete web applications.",
    logo: "https://logo.clearbit.com/microsoft.com",
    positions: "3 Positions",
    type: "Contract",
    salary: "₹18 LPA",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Flipkart",
    location: "Bangalore, India",
    posted: "5 days ago",
    description: "Analyze large datasets to generate business insights and dashboards.",
    logo: "https://logo.clearbit.com/flipkart.com",
    positions: "2 Positions",
    type: "Part-time",
    salary: "₹10 LPA",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Zoho",
    location: "Chennai, India",
    posted: "4 days ago",
    description: "Manage CI/CD pipelines, infrastructure, and deployment automation.",
    logo: "https://logo.clearbit.com/zoho.com",
    positions: "1 Position",
    type: "Full-time",
    salary: "₹11 LPA",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "Paytm",
    location: "Noida, India",
    posted: "2 days ago",
    description: "Develop and maintain Android/iOS applications using Flutter or React Native.",
    logo: "https://logo.clearbit.com/paytm.com",
    positions: "2 Positions",
    type: "Full-time",
    salary: "₹13 LPA",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Swiggy",
    location: "Bangalore, India",
    posted: "6 days ago",
    description: "Design user experiences and interfaces for mobile and web apps.",
    logo: "https://logo.clearbit.com/swiggy.com",
    positions: "1 Position",
    type: "Remote",
    salary: "₹9 LPA",
  },
  {
    id: 8,
    title: "Cloud Architect",
    company: "Infosys",
    location: "Pune, India",
    posted: "1 week ago",
    description: "Architect cloud infrastructure and lead migration to AWS/Azure.",
    logo: "https://logo.clearbit.com/infosys.com",
    positions: "1 Position",
    type: "Full-time",
    salary: "₹22 LPA",
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "TCS",
    location: "Mumbai, India",
    posted: "3 days ago",
    description: "Monitor systems and implement security protocols and threat analysis.",
    logo: "https://logo.clearbit.com/tcs.com",
    positions: "2 Positions",
    type: "Contract",
    salary: "₹14 LPA",
  },
  {
    id: 10,
    title: "Product Manager",
    company: "Ola",
    location: "Bangalore, India",
    posted: "2 days ago",
    description: "Define product roadmap, coordinate with teams, and manage releases.",
    logo: "https://logo.clearbit.com/olaelectric.com",
    positions: "1 Position",
    type: "Full-time",
    salary: "₹20 LPA",
  },
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-35 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4 w-full">
            <FilterCard />
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4 w-full">
            {jobsArray.length === 0 ? (
              <div className="flex items-center justify-center text-gray-500 text-lg h-64">
                Job not found
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobsArray.map((job) => (
                  <Job key={job.id} {...job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
