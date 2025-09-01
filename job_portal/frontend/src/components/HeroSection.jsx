import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        {/* Badge */}
        <span className="mx-auto inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-yellow-100 font-semibold shadow-md ring-1 ring-purple-200 transition-all duration-300 hover:scale-105">
          Find your dream job today 🚀
        </span>

        {/* Headline */}
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> get your{" "}
          <span className="text-orange-500">dream job</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Discover thousands of opportunities and find the perfect role that
          suits your skills and passion.
        </p>

        {/* Search Input */}
        <div className="flex w-[35%] border border-gray-200 shadow-lg pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream job"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchJobHandler()}
            className="outline-none border-none w-full"
          />

          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-amber-500 text-white hover:bg-amber-600"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
