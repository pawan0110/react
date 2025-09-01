import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    posted: "2 days ago",
    description: "Build and optimize user interfaces using React and Tailwind CSS.",
    logo: "https://logo.clearbit.com/google.com",
    positions: "Senior",
    type: "Full-time",
    salary: "₹15-20 LPA",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad, India",
    posted: "5 days ago",
    description: "Design and implement RESTful APIs using Node.js and Express.",
    logo: "https://logo.clearbit.com/microsoft.com",
    positions: "Mid-level",
    type: "Part-time",
    salary: "₹10-12 LPA",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Chennai, India",
    posted: "1 day ago",
    description: "Analyze big data sets to help inform business decisions.",
    logo: "https://logo.clearbit.com/amazon.com",
    positions: "Senior",
    type: "Full-time",
    salary: "₹18-25 LPA",
  }
];


const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">search results {randomJobs.length}</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((item) => (
            <Job
              key={item.id}
              title={item.title}
              company={item.company}
              location={item.location}
              posted={item.posted}
              description={item.description}
              logo={item.logo}
              positions={item.positions}
              type={item.type}
              salary={item.salary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
