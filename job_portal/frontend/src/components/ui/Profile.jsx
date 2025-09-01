import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Contact, Mail, Pen } from "lucide-react";
import { useSelector } from "react-redux";
import AppliedJobTable from "../AppliedJobTable";
import UpdateProfileDialog from "../UpdateProfileDialog";
import profileImg from "./1356853.jpeg";

const Profile = () => {
  const { user } = useSelector((store) => store.auth); // ✅ get user from redux
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-8 shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 ring-2 ring-gray-200">
              <AvatarImage
                src={user?.profile?.profilePhoto || profileImg}
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-2xl">
                {user?.fullname || "No Name"}
              </h1>
              <p className="text-gray-600 text-sm">
                {user?.profile?.bio || "No bio available"}
              </p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} variant="outline" size="icon">
            <Pen className="w-4 h-4" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-4 h-4" />
            <span>{user?.email || "No email"}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Contact className="w-4 h-4" />
            <span>{user?.phoneNumber || "No phone"}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm rounded-full"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-6">
          {user?.profile?.resume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user?.profile?.resume}
            >
              <Button variant="link" className="p-0 text-blue-600">
                View Resume
              </Button>
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm my-6">
        <h2 className="text-xl font-bold text-center mb-4">Applied Jobs</h2>
        <AppliedJobTable />
      </div>

      {/* Update Profile Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
