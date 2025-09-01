import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { SlidersHorizontal } from "lucide-react";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune"],
  },
  {
    filterType: "Industry",
    array: ["Google", "Microsoft", "Amazon", "Flipkart", "Paytm", "Zoho"],
  },
  {
    filterType: "Salary",
    array: ["0-10LPA", "10-20LPA", "30-40LPA", "40LPA+"],
  },
];

const FilterCard = () => {
  return (
    <div className="relative w-full flex justify-end mb-4">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition font-medium shadow-md">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="end"
            className="z-50 w-[300px] sm:w-[350px] bg-white rounded-xl shadow-lg p-5 border border-gray-200"
            sideOffset={8}
          >
            <h1 className="text-lg font-semibold text-gray-800 mb-4">Filter Jobs</h1>

            {filterData.map((filter, index) => (
              <div key={index} className="mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">{filter.filterType}</h2>
                <RadioGroup className="flex flex-wrap gap-2">
                  {filter.array.map((item, idx) => {
                    const id = `${filter.filterType}-${idx}`;
                    return (
                      <div key={id}>
                        <RadioGroupItem id={id} value={item} className="sr-only peer" />
                        <Label
                          htmlFor={id}
                          className="peer-checked:bg-indigo-600 peer-checked:text-white text-sm cursor-pointer px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-teal-100 transition"
                        >
                          {item}
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            ))}

            <Popover.Close
              className="mt-3 w-full text-center bg-gray-100 hover:bg-gray-200 py-1.5 text-sm rounded-md text-gray-600"
              aria-label="Close"
            >
              Close
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default FilterCard;
