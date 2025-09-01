import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({
  id,
  title,
  company,
  location,
  posted,
  description,
  logo,
  positions,
  type,
  salary,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-6 p-6 rounded-xl shadow-md border border-gray-200 transition-transform duration-200 hover:scale-[1.01] bg-white">
      {/* Company Logo */}
      <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300 shrink-0">
        <Avatar>
          <AvatarImage
            className="w-full h-full object-cover"
            src={logo}
            alt="Company Logo"
          />
        </Avatar>
      </div>

      {/* Job Content */}
      <div className="flex-1">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-gray-800 font-semibold text-base">{company}</h2>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <span>{posted}</span>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bookmark size={16} />
            </Button>
          </div>
        </div>

        {/* Title + Description */}
        <h1 className="font-bold text-lg text-gray-900 mt-2">{title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {positions && (
            <Badge className="text-indigo-700 bg-indigo-50 border border-indigo-200">
              {positions}
            </Badge>
          )}
          {type && (
            <Badge className="text-green-700 bg-green-50 border border-green-200">
              {type}
            </Badge>
          )}
          {salary && (
            <Badge className="text-rose-700 bg-rose-50 border border-rose-200">
              {salary}
            </Badge>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <Button
            className="bg-black hover:bg-amber-600 text-white px-6"
            onClick={() => navigate(`/description/${id}`)}
          >
            Details
          </Button>
          <Button
            variant="secondary"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
