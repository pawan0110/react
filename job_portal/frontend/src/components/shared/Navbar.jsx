import React from "react";
import { User2, LogOut, Store } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo pushed to far left */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        {/* Right side content */}
        <div className="flex items-center gap-8">
          {/* Nav Items */}
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Pawan</h4>
                      <p className="text-sm text-muted-foreground">
                        Software Developer
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2">
                      <User2 className="h-4 w-4" />
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm font-normal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent"
                      >
                        <Link to="/profile"> View Profile</Link>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm font-normal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
