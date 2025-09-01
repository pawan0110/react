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
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs = [] } = useSelector((store) => store.job || {});

  const statusColors = {
    accepted: "bg-green-100 text-green-800 hover:bg-green-200",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    rejected: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  if (!allAppliedJobs.length) {
    return (
      <div className="text-center text-gray-500 py-4">
        You haven't applied for any job yet
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
      <Table>
        <TableCaption className="text-gray-500 mt-2">
          A list of all jobs you have applied for
        </TableCaption>

        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Job Role</TableHead>
            <TableHead className="font-semibold">Company</TableHead>
            <TableHead className="text-right font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allAppliedJobs.map((appliedJob) => (
            <TableRow
              key={appliedJob._id}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell>
                {appliedJob.createdAt
                  ? new Date(appliedJob.createdAt).toLocaleDateString()
                  : "-"}
              </TableCell>
              <TableCell className="font-medium">{appliedJob.title}</TableCell>
              <TableCell>{appliedJob.companyName}</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={`${
                    statusColors[appliedJob.status?.toLowerCase()] ||
                    "bg-gray-100 text-gray-800"
                  } px-3 py-1 text-sm rounded-full`}
                >
                  {appliedJob.status
                    ? appliedJob.status.charAt(0).toUpperCase() +
                      appliedJob.status.slice(1)
                    : "Pending"}
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
