import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"; // ✅ Shadcn badge

const AppliedJobTable = () => {
  const jobs = [
    { date: "13-08-2025", role: "Frontend Developer", company: "Google", status: "Selected" },
    { date: "10-08-2025", role: "Backend Developer", company: "Amazon", status: "Pending" },
    { date: "05-08-2025", role: "UI/UX Designer", company: "Microsoft", status: "Rejected" },
    { date: "01-08-2025", role: "Full Stack Developer", company: "Facebook", status: "Selected" },
  ];

  const statusColors = {
    Selected: "bg-green-100 text-green-800 hover:bg-green-200",
    Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    Rejected: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
      <Table>
        <TableCaption className="text-gray-500 mt-2">
          A list of all jobs you have applied for
        </TableCaption>

        {/* Table Header */}
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Job Role</TableHead>
            <TableHead className="font-semibold">Company</TableHead>
            <TableHead className="text-right font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell>{job.date}</TableCell>
              <TableCell className="font-medium">{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={`${statusColors[job.status]} px-3 py-1 text-sm rounded-full`}
                >
                  {job.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
